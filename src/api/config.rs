use std::sync::Arc ;

use axum::{
    extract::{OriginalUri, Query, State},
    response::IntoResponse,
    Json,
};
use axum_extra::extract::{cookie::Cookie, CookieJar};
use cookie::time::Duration;
use cached::{proc_macro::cached, TimedCache};

 

 
 
use mongodb::bson::oid::ObjectId;
use serde::{Deserialize, Serialize};

use serde_json::json;
use tokio::time::{self,  Instant};

use crate::{
    api::setup::{get_cookies, get_setup_cache},
    app_state::AppState,
    constance::{
        cookies::COOKIE_EVOSESSIONID,
        uri::{
            ENCODE_ORIGIN, IGNORE_TABLE, NODE_SERVICE_URL,  TARGET_URL,  
        },
    },
    model::{metri_links_model::MetriLinksModel, video_links_model::VideoLinksModel},
};

use super::setup::A;

#[derive(Debug, Deserialize, Serialize, Clone)]
pub struct ConfigQuery {
    table_id: String,
    vt_id: Option<String>,
    origin: Option<String>,
    client_version: Option<String>,
    device: Option<String>,
    wrapped: Option<String>,
}

pub async fn get_config_api(
    State(state): State<Arc<AppState>>,
    jar: CookieJar,
    Query(query): Query<ConfigQuery>,
) -> impl IntoResponse {
    let timer = Instant::now();
    let client_versions = query.client_version.clone().unwrap_or("".to_string());
    
    let username = jar
        .get("username")
        .expect("Failed to get username in get_config_api")
        .value()
        .to_string();

    let evo_ss = jar
        .get(COOKIE_EVOSESSIONID)
        .expect("Failed to get username in get_config_api")
        .value();
    let evo_ss_clone = evo_ss.to_string().clone();
    let cookies = get_cookies(
        evo_ss_clone.clone(),
        username.to_string(),
        axum::extract::State(state.clone()),
    )
    .await;
    let url = format!(
        "{}/setup?device={}&wrapped={}&client_version={}",
        TARGET_URL, "desktop", "true", client_versions
    );

    let config_url = format!(
        "{TARGET_URL}/config?table_id={}{}&origin={}&client_version={}",
        query.table_id.clone(),
        if let Some(vt_id) = query.vt_id.as_ref() {
            format!("&vt_id={}", vt_id)
        } else {
            String::new()
        },
        ENCODE_ORIGIN,
        query.client_version.unwrap_or("".to_string())
    );

    let table_username = format!("{}-{}", query.table_id.clone(), username.to_string());

    let table_id = query.table_id.clone();
    let room = format!(
        "{TARGET_URL}/frontend/evo/r2/#table_id={table_id}{}",
        if let Some(vt_id) = query.vt_id.as_ref() {
            format!("&vt_id={}", vt_id)
        } else {
            String::new()
        }
    );
    let config = get_config_cache(
        config_url,
        evo_ss.to_string(),
        username.to_string(),
        cookies.clone(),
    );
    let setup_a = get_setup_cache(
        url,
        evo_ss.to_string(),
        username.to_string(),
        cookies.clone(),
    );

    
    
    let (setup_a, config_b, check_metric,check_live1) = tokio::join!(
        setup_a,
        config,
        get_metrics( state.clone(),  table_id.clone(), username.to_string()),
        get_live1( state.clone(),  table_id.clone()),
    );



   let is_check = check_live1.is_ok() && check_metric.is_ok();
    if is_check {
        let metrics_un = state.metrics.lock();
        let video_un = state.video_stream.lock();
        
        let (mut metrics_lock, mut video_lock) =
            tokio::join!(metrics_un, video_un);
        let metrics_check = check_metric.unwrap();
        let video_check  = check_live1.unwrap();
        if video_check.is_some() && metrics_check.is_some() { 

            video_lock.insert(
                table_username.clone(),
                video_check.unwrap().url,
            );
            metrics_lock.insert(
                table_username.clone(),
                metrics_check .unwrap().metrics,
            );
    
            return Json(Some(config_b));


        }
         

       
    }



    let config_clone = config_b.clone();

    let username_clone = username.clone().to_string();
    if !IGNORE_TABLE.contains(&table_id.as_str()) {
        tokio::spawn(async move {
            let mut metrics_cache_check = state.cache_check.lock().await;
            metrics_cache_check.insert(table_username.clone(), false);
            drop(metrics_cache_check);
            let res_from_cert =
                get_certification(room, username_clone, setup_a, config_clone, cookies).await;
            tracing::warn!("res_from_cert for {:#?}", res_from_cert);
            let metrics = res_from_cert.unwrap_or(serde_json::Value::String("".to_string()));
            let metrics_un = state.metrics.lock();
            let video_un = state.video_stream.lock();
            let mongo = state.mongodb.lock();
            let metrics_cache_check_un = state.cache_check.lock();
            if metrics.get("metrics").is_some() {
                let (mut metrics_lock, mut video_lock, mut metrics_cache_check,mut mongodb) =
                    tokio::join!(metrics_un, video_un, metrics_cache_check_un,mongo);
                metrics_lock.insert(
                    table_username.clone(),
                    serde_json::from_str(metrics.get("metrics").expect("asd").to_string().as_str())
                        .unwrap(),
                );
             let add_metri_link =   mongodb.add_metri_link( MetriLinksModel{
                    _id: ObjectId::new(),
                    metrics: serde_json::from_str(metrics.get("metrics").expect("asd").to_string().as_str()).unwrap(),
                    table_id: table_id.clone(),
                    username: username.to_string(),
                    is_lock: false,
                    lock_time: None,
                  
                }) ;
            
                video_lock.insert(
                    table_username.clone(),
                    serde_json::from_str(&metrics.get("video").unwrap().to_string()).unwrap(),
                );
                let add_video_link =   mongodb.add_video_link( VideoLinksModel{
                    _id: ObjectId::new(),
                    url: serde_json::from_str(&metrics.get("video").unwrap().to_string()).unwrap(),
             
                    table_id: table_id.clone(),
                    other_id: None,
              
                }) ;
                let (_,_)  = tokio::join!(add_metri_link,add_video_link);
                metrics_cache_check.insert(table_username.clone(), true);
                drop(metrics_cache_check);
                drop(metrics_lock);
                drop(video_lock);
            } else {
                let (mut metrics_lock, mut metrics_cache_check) =
                    tokio::join!(metrics_un, metrics_cache_check_un);
                metrics_lock.insert(table_username.clone(), "NO METRICS".to_string());

                metrics_cache_check.insert(table_username.clone(), true);
                drop(metrics_cache_check);
                drop(metrics_lock);
            }
        });
    };

    let duration = timer.elapsed();
    tracing::info!("[CONFIG] duration: {:?}", duration);
   
      Json(Some(config_b))
}

#[cached(
    ty = "TimedCache<(String, String,String),   serde_json::Value >",
    create = "{ TimedCache::with_lifespan(3600) }",
    convert = r#"{ (target_url.clone(), evo_ss.clone(),username.clone()) }"#
)]
async fn get_config_cache(
    target_url: String,
    evo_ss: String,
    username: String,
    cookies: Vec<playwright::api::Cookie>,
) -> serde_json::Value {
    println!(
        "[CONFIG] for  {}-{}   in {}",
        username,
        evo_ss.clone(),
        target_url
    );
    tracing::warn!("get_certification for {}in {}", username, target_url);
    let body = json!({
        "url": target_url,
        "cookies": cookies,

    });
    let client = reqwest::Client::new();
    let response = client
        .post(format!("{NODE_SERVICE_URL}/config_first"))
        .json(&body)
        .send()
        .await
        .expect("failed get config");

    response
        .json::<serde_json::Value>()
        .await
        .expect("failed get config")
}

#[cached(
    ty = "TimedCache<(String, String),   serde_json::Value >",
    create = "{ TimedCache::with_lifespan(3600) }",
    convert = r#"{ (room.clone(), username.clone() ) }"#,
    result = true
)]
async fn get_certification(
    room: String,
    username: String,
    setup_a: A,
    config_b: serde_json::Value,
    cookies: Vec<playwright::api::Cookie>,
) -> Result<serde_json::Value, reqwest::Error> {
    tracing::warn!("get_certification for {}in {}", username, room);
    let body = json!({
        "url": room,
        "cookies": cookies,
        "setup": setup_a,
        "config": config_b
    });
    let client = reqwest::Client::new();
    let response = client
        .post(format!("{NODE_SERVICE_URL}/config"))
        .json(&body)
        .send()
        .await
        .expect("failed get config");

    response.json::<serde_json::Value>().await
}

pub async fn pre_fetch_config(
    State(state): State<Arc<AppState>>,
    jar: CookieJar,
    Query(query): Query<ConfigQuery>,
    OriginalUri(uri): OriginalUri,
) -> impl IntoResponse {
    tracing::info!("pre_fetch_config for {}", uri);
    let timer = Instant::now();
    let client_versions = query.client_version.clone().unwrap_or("".to_string());

    let username = jar
        .get("username")
        .expect("Failed to get username in get_config_api")
        .value()
        .to_string();

    let evo_ss = jar
        .get(COOKIE_EVOSESSIONID)
        .expect("Failed to get username in get_config_api")
        .value();
    let evo_ss_clone = evo_ss.to_string().clone();
    let cookies = get_cookies(
        evo_ss_clone.clone(),
        username.to_string(),
        axum::extract::State(state.clone()),
    )
    .await;
    let url = format!(
        "{}/setup?device={}&wrapped={}&client_version={}",
        TARGET_URL, "desktop", "true", client_versions
    );

    let config_url = format!(
        "{TARGET_URL}/config?table_id={}{}&origin={}&client_version={}",
        query.table_id.clone(),
        if let Some(vt_id) = query.vt_id.as_ref() {
            format!("&vt_id={}", vt_id)
        } else {
            String::new()
        },
        ENCODE_ORIGIN,
        query.client_version.unwrap_or("".to_string())
    );

    let config = get_config_cache(
        config_url,
        evo_ss.to_string(),
        username.to_string(),
        cookies.clone(),
    );
    let setup_a = get_setup_cache(
        url,
        evo_ss.to_string(),
        username.to_string(),
        cookies.clone(),
    );
    let (_, config_b) = tokio::join!(setup_a, config);
 
    let duration = timer.elapsed();
    tracing::info!("[CONFIG] duration: {:?}", duration);
    let mut new_cookie = Cookie::new(query.table_id.clone(), "1".to_string());
  
    new_cookie.set_max_age(Duration::hours(1));
    let newjar = jar.add(new_cookie);
    (newjar, Json(Some(config_b)))
}
#[cached(
    ty = "TimedCache<( String,String),  Option<MetriLinksModel> >",
    create = "{ TimedCache::with_lifespan(86400) }",
    convert = r#"{ (table_id.clone(),  username.clone()) }"#,
    result = true
)]
pub async fn get_metrics(
    state: Arc<AppState>,
    table_id: String,
    username: String,
) -> Result<Option<MetriLinksModel>, anyhow::Error> {
    let client_metrics = state.mongodb.lock().await;
    let check_metric = client_metrics
        .check_metric(table_id.clone(), username.to_string())
        .await?;
    Ok(check_metric)
}

#[cached(
    ty = "TimedCache<( String),  Option<VideoLinksModel> >",
    create = "{ TimedCache::with_lifespan(1800) }",
    convert = r#"{ (table_id.clone() ) }"#,
    result = true
)]
pub async fn get_live1(
    state: Arc<AppState>,
    table_id: String,
) -> Result<Option<VideoLinksModel>, anyhow::Error> {
    let client_live1 = state.mongodb.lock().await;
    let check_live1 = client_live1.get_video_by_table_id(table_id.clone()).await?;
    Ok(check_live1)
}
