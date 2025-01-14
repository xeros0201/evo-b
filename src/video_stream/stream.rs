use std::{str::FromStr, sync::Arc};

use axum::{extract::{ws::{Message, WebSocket}, Path, Query, State, WebSocketUpgrade}, response::IntoResponse};
use futures::{SinkExt, StreamExt};
use http::  Uri;
use native_tls::TlsConnector;
use serde::{Deserialize, Serialize};
use tokio_tungstenite::{connect_async_tls_with_config, tungstenite::{handshake::client::generate_key, ClientRequestBuilder}, Connector};

use crate::{app_state::AppState, constance::uri::{REFERRER, TARGET_URL, UA}};









#[derive(Debug, Serialize, Deserialize)]
pub struct StreamQuery {
    pub ac: String,
    pub streamid: Option<String>,
    pub videoSessionId: String,
    pub videoToken: String,
    pub vc: String,
}




pub async fn stream( 
    Path(path): Path<String>,
    ws: WebSocketUpgrade,
 
    Query(query): Query<StreamQuery>,
) -> impl IntoResponse {
     
    return ws.on_upgrade(move |socket| async move {
        handle_stream(
            socket,
            query,
            path
        )
        .await
        .unwrap()
    });
}





async fn handle_stream(ws: WebSocket, query: StreamQuery, path: String) -> anyhow::Result<()> {
    
        let primary_address = format!("wss://{}?vc={}&ac={}&videoSessionId={}&videoToken={}{}",path, query.vc, query.ac, query.videoSessionId, query.videoToken,
        if let Some(streamid) = query.streamid.as_ref() {
            format!("&streamid={}", streamid)
        } else {
            String::new()
        }
       );
        
        
       
        let host  =   Uri::from_str(&primary_address.clone()).unwrap();
        let request = ClientRequestBuilder::new(
            primary_address
                .parse()
                .expect("Failed to parse primary_address"),
        )
        .with_header("host", host.host().unwrap().to_string())
        .with_header("origin", TARGET_URL.to_string())
        .with_header("referer", REFERRER.to_string())
        .with_header("user-agent", UA.to_string())
        .with_header("accept-language", "en-US,en;q=0.9,vi;q=0.8,ko;q=0.7")
        .with_header("pragma", "no-cache")
        .with_header("accept-encoding", "gzip, deflate, br, zstd")
        .with_header("sec-websocket-key", generate_key());
    
        let (video_stream, _) = 
        match    connect_async_tls_with_config(request, None,false,Some(Connector::NativeTls(
            TlsConnector::new().expect("Failed to create TLS connector"),
        ))).await  {
            Ok(res) => res,
            Err(e) => {
                println!("Failed to connect to the video stream server: {}", e);
                return Ok(());
            }
        };
        let (mut video_writter, mut video_reader) = video_stream.split();
        let (mut sender, mut receiver) = ws.split();
       

        
    let native_hanler = tokio::spawn(async move {
        while let Some(read) = video_reader.next().await {
            let Ok(message) = read else {
                continue;
            };

            match message {
                tokio_tungstenite::tungstenite::Message::Binary(data) => {
                    sender.send(Message::binary(data))
                        .await
                        .expect("Failed to send binary message to video server");
                }
                tokio_tungstenite::tungstenite::Message::Text(text) => {
                    sender.send(Message::text(text.to_string()))
                        .await
                        .expect("Failed to send text message to video server");
                }
                _ => {}
            }
      
        }
    });
    
    let client_hanler = tokio::spawn(async move {
        while let Some(receiver) = receiver.next().await {
           let Ok(message) = receiver else {
                continue;
            };

            match message {
                Message::Text(text) => {
                    video_writter.send(tokio_tungstenite::tungstenite::Message::text(text.to_string()))
                        .await
                        .expect("Failed to send text message to video server");
                }
                _ => {}
            }
             
        }
    });
    tokio::select! {
        _ = native_hanler => {
        tracing::error!("[VIDEO_STREAM] native_hanler closed !!" );
        },
        _ = client_hanler => {
         tracing::error!("[VIDEO_STREAM] client_hanler closed");
        }
     };
    Ok(())
}
