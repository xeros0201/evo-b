 
use serde::{Deserialize, Serialize};




#[derive(Debug, Serialize, Deserialize,Clone)]
pub struct RoomLog {
    pub _type: String,
    pub content: String,
    pub table_id: String,
    pub vt_id: Option<String>,
}

