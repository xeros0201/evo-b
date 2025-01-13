use axum::{Json, http::StatusCode, response::IntoResponse};
use serde_json::json;
use std::{collections::HashMap, fmt::Display};

pub type Result<T> = core::result::Result<T, Error>;

pub struct ErrorResponse {
    pub status: StatusCode,
    pub message: String,
    pub details: HashMap<String, String>,
}

impl IntoResponse for ErrorResponse {
    fn into_response(self) -> axum::response::Response {
        Json(json!({
            "status": self.status.as_u16(),
            "message": self.message,
            "details": self.details
        }))
        .into_response()
    }
}

#[derive(Debug)]
pub enum Error {
    TimedOut { reason: String },
    Unauthorized { message: String },
    Forbidden { message: String },
    Other(anyhow::Error),
}

impl Display for Error {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "{:?}", self)
    }
}

impl IntoResponse for Error {
    fn into_response(self) -> axum::response::Response {
        let (status, message, details) = match self {
            Error::TimedOut { reason } => (StatusCode::REQUEST_TIMEOUT, reason, HashMap::new()),
            Error::Unauthorized { message } => (StatusCode::UNAUTHORIZED, message, HashMap::new()),
            Error::Forbidden { message } => (StatusCode::FORBIDDEN, message, HashMap::new()),
            Error::Other(error) => (StatusCode::BAD_REQUEST, error.to_string(), HashMap::new()),
        };

        let response = ErrorResponse {
            status,
            message,
            details,
        };
        (status, response).into_response()
    }
}

impl From<anyhow::Error> for Error {
    fn from(value: anyhow::Error) -> Self {
        Error::Other(value)
    }
}
