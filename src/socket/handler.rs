use std::{sync::Arc, time::Duration};

use axum::{
    debug_handler,
    extract::{
        ws::{Message, WebSocket},
        Path, Query, State, WebSocketUpgrade,
    },
    response::IntoResponse
};
use axum_extra::extract::CookieJar;
 
use futures::{SinkExt, StreamExt};
use itertools::Itertools;
use native_tls::TlsConnector;
use serde::Deserialize;
 
use tokio_tungstenite::{
    connect_async_tls_with_config,
    tungstenite::{handshake::client::generate_key, ClientRequestBuilder},
    Connector,
};

use crate::{
    api::setup::get_cookies,
    app_state::AppState,
    constance::{
        cookies::COOKIE_EVOSESSIONID,
        uri::{TARGET_URL, TARTGET_DOMAIN},
    },
    socket::msg_struct::{kickout::KickoutMessage, metric_verify::MetricVerify},
};

 

#[derive(Deserialize)]
pub struct QueryParams {
    pub messageFormat: Option<String>,
    pub tableConfig: Option<String>,
    pub EVOSESSIONID: Option<String>,
    pub instance: Option<String>,
    pub client_version: Option<String>,
}

#[debug_handler]
pub async fn handle_request(
    Path((game_type, table_id, service)): Path<(String, String, String)>,
    ws: WebSocketUpgrade,
    Query(query): Query<QueryParams>,
    State(state): State<Arc<AppState>>,
    jar: CookieJar,
) -> impl IntoResponse {
    let username = jar.get("username").expect("username not found").value();
    let evo_ss = jar
        .get(COOKIE_EVOSESSIONID)
        .expect("username not found")
        .value();
  
    let cookies = get_cookies(
        evo_ss.to_string(),
        username.to_string(),
        State(state.clone()),
    )
    .await;
    let cookies_string = cookies
        .iter()
        .map(|cookie| format!("{}={}", cookie.name, cookie.value))
        .intersperse("; ".to_string())
        .collect::<String>();
    let table_username = format!("{}-{}", table_id.clone(), username.to_string()).to_string();
    
        return ws.on_upgrade(move |socket| async move {
            handle_upgrade(
                service,
                socket,
                table_id,
                cookies_string,
                game_type,
                &query,
                table_username,
                state
            )
            .await
            .unwrap()
        });
    
   

    
}

async fn handle_upgrade(
    service: String,
    socket: WebSocket,
    table_id:String,
    cookies_string: String,
    game_type:String,
    query: &QueryParams,
    table_username:String,
    state:Arc<AppState>
   
 
 
) -> anyhow::Result<()> {
    let (mut sender, mut receiver) = socket.split();
    
  
    let mut attempts = 0;
    let max_attempts = 4;
    
    loop {
        let  metrics_cache_check = state.cache_check.lock().await;
        let check_state  = metrics_cache_check.get(&table_username ).unwrap_or(&false);
        
        if *check_state {
            break;
        }

        tracing::info!("DEBUG: check_state: {:?}", check_state);
   
        drop(metrics_cache_check);
        
        attempts += 1;
        if attempts >= max_attempts {
            break;
        }
        
        tokio::time::sleep(Duration::from_secs(2)).await;
    }
 
    let primary_address = match determine_primary_address(
        format!("public/{game_type}/player/game/{table_id}/{service}").as_str(),
        &query,
    ) {
        Ok(addr) => addr,
        Err(err) => err.to_string(),
    };
 
    println!("Connecting to primary socket: {}", primary_address);

    let request = ClientRequestBuilder::new(
        primary_address
            .parse()
            .expect("Failed to parse primary_address"),
    )
    .with_header("host", TARTGET_DOMAIN)
    .with_header("origin", TARGET_URL)
    .with_header("accept-language", "en-US,en;q=0.5")
    .with_header("pragma", "no-cache")
    .with_header("accept-encoding", "gzip, deflate, br")
    .with_header("cookie", cookies_string)
    .with_header("sec-websocket-key", generate_key());

    let (ws_stream, _) = match connect_async_tls_with_config(
        request,
        None,
        false,
        Some(Connector::NativeTls(
            TlsConnector::new().expect("Failed to create TLS connector"),
        )),
    )
    .await
    {
        Ok(ws_stream) => ws_stream,
        Err(err) => {
            sender
                .send(Message::text(&format!(
                    "Evo native connection failed: {}",
                    err
                )))
                .await
                .expect("Failed to send message");

            return Ok(());
        }
    };

    let (mut write, mut read) = ws_stream.split();

    let native_hanler = tokio::spawn(async move {
        while let Some(read) = read.next().await {
            let Ok(message) = read else {
                continue;
            };

            let Ok(message) = message.into_text() else {
                println!("[Debug] Fail read from native into text");
                continue;
            };


            let   kickout_message= serde_json::from_str::<KickoutMessage>(&message);
            if kickout_message.is_ok() {
                let kickout_message = kickout_message.unwrap();
                if kickout_message.args.reason == "other".to_string() {
                   tracing::info!("DEBUG: last message: {:?} failed metrics :  ", kickout_message,);
                  
                }
                continue;
            }
           

            sender
                .send(Message::text(message.to_string()))
                .await
                .expect("Fail send to client");
        }
    });
    
    let client_hanler = tokio::spawn(async move {
        while let Some(receiver) = receiver.next().await {
            let message = receiver
                .expect("Fail read from local")
                .into_text()
                .expect("Fail read from local");
            let Ok(mut metric_res) = serde_json::from_str::<MetricVerify>(&message) else {
                write
                    .send(tokio_tungstenite::tungstenite::Message::text(
                        message.to_string(),
                    ))
                    .await
                    .expect("Fail send to client");
                continue;
            };

            if metric_res.mg_type == "metrics.verify".to_string() {
                tracing::warn!("DEBUG: cache_verify [RECEIVED] >>>>>>>>>>");
                let metrics = state.metrics.lock().await;
                let replace = "".to_string();
                let metrics_value = metrics.get(&table_username).unwrap_or(&replace);
                tracing::warn!(
                    "DEBUG: before sent to native: {:#?}",
                    metric_res.args.result
                );
                metric_res.args.result = metrics_value.to_string() ;
                
                write
                    .send(tokio_tungstenite::tungstenite::Message::text(
                        serde_json::to_string(&metric_res).expect("Fail convert to string"),
                    ))
                    .await
                    .expect("Fail send to native");

                tracing::warn!("DEBUG: sent to native: {:#?}", metric_res.args.result);
            }
        }
    });
    tokio::select! {
       _ = native_hanler => {
       tracing::info!("native_hanler closed !!" );
       },
       _ = client_hanler => {
        tracing::info!("client_hanler closed");
       }
    };

    Ok(())
}






 
fn determine_primary_address(service: &str, query: &QueryParams) -> Result<String, String> {
    let message_format = query.messageFormat.as_ref().expect("handler.rs:73");

    let evo_session_id = query.EVOSESSIONID.as_ref().expect("handler.rs:75");
    let instance = query.instance.as_ref().expect("handler.rs:76");
    let client_version = query.client_version.as_ref().expect("handler.rs:77");

    Ok(format!(
        "wss://{}/{}?messageFormat={}&EVOSESSIONID={}&instance={}&client_version={}{}",
        TARTGET_DOMAIN,
        service,
        message_format,
        evo_session_id,
        instance,
        client_version,
        if let Some(table_config) = query.tableConfig.as_ref() {
            format!("&tableConfig={}", table_config)
        } else {
            String::new()
        }
    ))
}

// Simulates relaying data between the client and the primary socket
