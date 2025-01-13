use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct KickoutMessage {
    pub id: String,
    #[serde(rename = "type")]
    pub msg_type: String,
    pub args: KickoutArgs,
    pub time: i64,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct KickoutArgs {
    pub reason: String,
}
