use serde::{Deserialize, Serialize};


#[derive(Serialize, Deserialize,Debug)]
pub struct  Args {
  pub  replyToId:String,
  pub  result:String,
 
}

#[derive(Serialize, Deserialize,Debug)]
pub struct  Args_Request {
  pub  requestId:String,
  pub  request:String,
 
}


#[derive(Serialize, Deserialize,Debug)]
pub struct MetricVerify {
   pub id:String,
   pub args:Args,
   #[serde(rename = "type")]
   pub mg_type: String,
}


#[derive(Serialize, Deserialize,Debug)]
pub struct MetricVerifyRequest {
   pub id: String,
   #[serde(rename = "type")]
   pub req_type: String,
   pub args: Args_Request,
   pub time:u64
}
