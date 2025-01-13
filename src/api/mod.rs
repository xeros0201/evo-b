use std::sync::Arc;

use axum::Router;
use axum::routing::get;
use axum::response::IntoResponse;

use crate::app_state::AppState;

pub mod setup;
pub mod entry;
pub mod style;
pub mod config;

pub fn generate_api( ) -> Router<Arc<AppState>>{


    Router::new().route("/test", get(test_api)) 
}



async  fn test_api() -> impl IntoResponse{
    "test"
}
