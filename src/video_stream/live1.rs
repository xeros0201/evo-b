use std::sync::Arc;

use axum::debug_handler;
use axum::extract::State;
use axum::{extract::Query, response::IntoResponse};
use axum::{http::StatusCode, Json};
use axum_extra::extract::CookieJar;

use reqwest::Client;
use serde::{Deserialize, Serialize};

use crate::app_state::AppState;
use crate::constance::uri::TARGET_URL;

#[derive(Debug, Serialize, Deserialize)]
pub struct Live1Query {
    pub table_id: String,
}

#[debug_handler]
pub async fn live1(
    State(state): State<Arc<AppState>>,
    Query(query): Query<Live1Query>,
    
    jar: CookieJar,
) -> impl IntoResponse {
    let username = jar
        .get("username")
        .expect("Failed to get username in get_config_api")
        .value();
    let table_username = format!("{}-{}", query.table_id.clone(), username.to_string());

    let video_stream = state.video_stream.lock().await;
    let viddeo_stream_string = video_stream.get(&table_username);

    match viddeo_stream_string {
        Some(stream) => {
            tracing::warn!("stream for {:#?}", stream);
            let client = Client::new();
            let response = client
            .get(stream)
            .header("origin", TARGET_URL)
            .header("referer", format!("{}/{}", TARGET_URL, table_username))
            .header("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36")
            .header("authority", "live1.egcvi.com")
            .send().await;

            if response.is_ok() {
                let response = response.unwrap();
                let body = response.text().await.unwrap();
                (StatusCode::OK, body)
            } else {
                (StatusCode::INTERNAL_SERVER_ERROR, "".to_string())
            }
        }
        None => (StatusCode::INTERNAL_SERVER_ERROR, "".to_string()),
    }
}
