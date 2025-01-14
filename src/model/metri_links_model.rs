use mongodb::bson::{oid::ObjectId, DateTime};
use serde::{Deserialize, Serialize};
 



#[derive(Debug, Serialize, Deserialize,Clone)]
pub struct MetriLinksModel {
    pub _id: ObjectId,
    pub metrics: String,
    pub table_id: String,
    pub username: String,
    pub is_lock: bool,
    pub lock_time: Option<DateTime>,
    
}

