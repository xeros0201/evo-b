 
 
 
use playwright::  Playwright;
use serde_json::json;
use std::process::Command;
use std::io::Write;
use std::fs;


use crate::constance::uri::{NODE_SERVICE_URL, PW_ENDPOINT};

 

 
 
pub async fn game_entry_exec(  url: &str) -> Result< Vec<playwright::api::Cookie>, anyhow::Error> {
    
    let body = json!({
        "url": url,
    });
    let client = reqwest::Client::new();
    let response = client
        .post( format!("{}/entry", NODE_SERVICE_URL))
        .json(&body)
        .send()
        .await
        .expect("failed get config");

    
     
    let cookies = response.json::<Vec<playwright::api::Cookie>>().await.expect("failed get config");
    
 
 
    Ok(cookies)
}
 
 
    
 