use axum::{handler::HandlerWithoutStateExt, routing::{any, get}, Router};
use tower_http::services::ServeDir;
use std::sync::Arc;

use crate::{api::{  config::{get_config_api, pre_fetch_config}, entry::game_entry, setup::get_setup_api, style::get_style_api}, app_state::AppState, fallback_to_remote, seeds::create::create_seeds, socket::handler::handle_request, video_stream::{live1::live1, manifest::manifest, stream::stream},  };
 

pub fn build(state:  Arc<AppState>) -> Router {
    let serve_dir = ServeDir::new("public");
    let router = Router::new()
    .route("/first_cdn/live1.egcvi.com/{*path}", get(live1 ))
    .route("/second_cdn/{*path}", get(manifest ))
    .route("/public/{game_type}/player/game/{table_id}/{*service}",
  
     any(handle_request  ))
     .route("/video_stream/{*path}", any(stream ))
     .route("/get_game_links",  get( create_seeds ))
    .route("/game_entry/{*url}", get(game_entry ))
    .route("/style", get(get_style_api ))
    // .nest("/api", generate_api())
    .route("/pre_fetch_config", get( pre_fetch_config   ))
    .route("/setup", get(get_setup_api ))
    .route("/config", get(get_config_api  ))
    .with_state(state)
    .fallback_service(serve_dir.fallback(fallback_to_remote.into_service()))   ;
     router
}
    