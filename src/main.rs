 
use std::net::SocketAddr;
use std::path::Path;
use std::sync::Arc;

 
use app_state::AppState;
use axum::body::Body;
 
use axum::http::{  Response, StatusCode, Uri};
 
 
 
use server::build;
 
use tokio::fs::{self, File};
use tokio::io::AsyncWriteExt;
use tokio::net::TcpListener;
 
use tracing::level_filters::LevelFilter;
use tracing_subscriber::layer::SubscriberExt;
use tracing_subscriber::util::SubscriberInitExt;
 
 
mod stealth;
mod browser;
 
mod error;
mod response;
mod api;
mod app_state;
mod server;
mod constance;
mod seeds;
mod db;
mod model;
pub mod socket;
mod video_stream;
const PORT: u16 = 3000;

async fn fallback_to_remote(uri: Uri) -> Response<Body> {
   
    let path = uri.path();
    let format_path =format!("public{}",path );
    let local_path = Path::new(format_path.as_str());
    let client = reqwest::Client::new();
    let url = format!("https://babylonps9k.evo-games.com{}", uri.path());
    
    match client.get(&url).send().await {
        Ok(resp) => {
            if resp.status().is_success() {
                let bytes = resp.bytes().await.unwrap();
                if let Some(parent) = local_path.parent() {
                    fs::create_dir_all(parent).await.unwrap_or_else(|e| {
                        eprintln!("Failed to create directory: {}", e);
                    });
                }
                match File::create(&local_path).await {
                    Ok(mut file) => {
                        if let Err(e) = file.write_all(&bytes).await {
                            eprintln!("Failed to write file: {}", e);
                        } else {
                            println!("File saved to: {:?}", local_path);
                        }
                    }
                    Err(e) => eprintln!("Failed to create file: {}", e),
                }
                Response::builder()
                    .status(StatusCode::OK)
                    .body(Body::from(bytes))
                    .unwrap()
            } else {
                Response::builder()
                    .status(StatusCode::NOT_FOUND)
                    .body(Body::from("Not found"))
                    .unwrap()
            }
        }
        Err(_) => Response::builder()
            .status(StatusCode::NOT_FOUND)
            .body(Body::from("Not found"))
            .unwrap()
    }
}


 

#[tokio::main]
async fn main() {
    tracing_subscriber::registry()
        .with(
            tracing_subscriber::fmt::layer()
                .pretty()
                
        )
        .with(LevelFilter::INFO)
        .init();
   
    let state  = Arc::new(AppState::new().await.unwrap());
    
    
    let app =  build(state.clone());
    let listener = TcpListener::bind(SocketAddr::new([0, 0, 0, 0].into(), PORT)).await
        .expect("Failed to bind to port");

    println!("Server is running on port {}", PORT);
    axum::serve(listener, app.into_make_service_with_connect_info::<SocketAddr>()).await.unwrap();
}


