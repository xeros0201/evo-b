use axum::{Json, http::StatusCode, response::IntoResponse};
use serde_json::json;


pub struct JsonResponse {
    pub status: StatusCode,
    pub message: String,
    pub details: String,
}
pub struct EntryResponse {
    pub status: StatusCode,
    pub url: String,
    pub local_game: String,
}

impl IntoResponse for EntryResponse {
    fn into_response(self ) -> axum::response::Response {
        Json(json!({
            "status": self.status.as_u16(),
            "url": self.url,
            "local_game": self.local_game,
        }))
        .into_response()
    }
}

impl IntoResponse for JsonResponse {
    fn into_response(self) -> axum::response::Response {
        Json(json!({
            "status": self.status.as_u16(),
            "meta": self.message,
            "details": self.details
        }))
        .into_response()
    }
}