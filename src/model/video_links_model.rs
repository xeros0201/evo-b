use mongodb::bson::oid::ObjectId;
use serde::{Deserialize, Serialize};




#[derive(Debug, Serialize, Deserialize,Clone)]
pub struct VideoLinksModel {
    pub _id: ObjectId,
    pub url: String,
    pub room: String,
    pub table_id: String,
    pub other_id: Option<String>, 
}

