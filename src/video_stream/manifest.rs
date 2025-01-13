use axum::{extract::{Path, Query}, response::IntoResponse};
use http::{StatusCode, Uri};
use reqwest::Client;
use serde::{Deserialize, Serialize};

use crate::constance::uri::TARGET_URL;





#[derive(Debug, Serialize, Deserialize)]
pub struct Manifest {
    pub ac: String,
    pub streamid: String,
    pub videoSessionId: String,
    pub videoToken: String,
    pub vc: String,
}

pub async fn manifest( 
    Path(full_url): Path<String>,
    Query(query): Query<Manifest>,
) -> impl IntoResponse {
    tracing::warn!("[MANIFEST] FOR {:#?}", full_url);
    let full_url_clone = format!("{}{}?ac={}&streamid={}&videoSessionId={}&videoToken={}&vc={}", "https://", full_url, query.ac, query.streamid, query.videoSessionId, query.videoToken, query.vc );
    
    let host = Uri::try_from(full_url_clone.as_str()).unwrap();
    let client = Client::new();
    let response = client
        .get(full_url_clone)
        .header("origin", TARGET_URL)
    .header("referer", format!("{}/", TARGET_URL))
    .header("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36")
    .header("authority", host.host().unwrap().to_string())
    .send().await;

    tracing::warn!("[MANIFEST] RESPONSE {:#?}", response);
    if response.is_ok() {
        let response = response.unwrap();
        let body = response.text().await.unwrap();
        (StatusCode::OK, body)
    } else {
        (StatusCode::INTERNAL_SERVER_ERROR, "".to_string())
    }
 
}
