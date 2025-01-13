use std::collections::HashMap;

use anyhow::Result;
 
 
use playwright::api::Cookie;
 
use tokio::sync::Mutex;

use crate::db::mongodb::MongoDB;
 


#[derive(Debug,Clone,PartialEq)]
pub enum  PreFetchConfigState {
    Idle,
    IsFetching,
    IsFetched,
    IsFailed,
}


 
#[derive(Debug)]
pub struct AppState {
  
  
    pub clients: Mutex<HashMap<String, Vec<Cookie>>>,
    pub mongodb: Mutex<MongoDB> ,
    pub cache_check: Mutex<HashMap<String,bool>>,
    pub metrics: Mutex<HashMap<String,  String >>,
    pub pre_fetch_config: Mutex<HashMap<String,  PreFetchConfigState >>,
    pub video_stream: Mutex<HashMap<String,  String >>,
 
}

impl  AppState  {
    pub async fn new() -> Result<Self> {
        Ok(Self {
            cache_check: Mutex::new(HashMap::new()),
            clients: Mutex::new(HashMap::new()),
            mongodb: Mutex::new(MongoDB::init().await),
            metrics: Mutex::new(HashMap::new()),
            pre_fetch_config: Mutex::new(HashMap::new()),
            video_stream: Mutex::new(HashMap::new()),
        })
    }
}
