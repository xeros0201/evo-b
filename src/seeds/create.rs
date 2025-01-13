use std::{collections::HashMap, sync::Arc, time::Duration};

use axum::{extract::State, response::IntoResponse};
 
use futures::{stream::FuturesUnordered, StreamExt, TryStreamExt};
use http::StatusCode;
use mongodb::bson::oid::ObjectId;
use serde::Deserialize;
use tokio::{sync::Mutex, time::{timeout, Instant}};

use crate::{  app_state::AppState, browser::evasions::{chrome_app::CHROME_APP_JS, chrome_runtime::CHROME_RUNTIME_JS, hairline_fix::HAIRLINE_FIX_JS, iframe_content_windows::IFRAE_CONTENT_WINDOWS_JS, media_codec::MEDIA_CODEC_JS, navigator_lang::NAVIGATOR_LANG_JS, navigator_permission::NAVIGATOR_PERMISSION_JS, navigator_plugin::NAVIGATOR_PLUGIN_JS, navigator_vendor::NAVIGATOR_VENDOR_JS, navigator_webdriver::NAVIGATOR_WEBDRIVER_JS, outer::OUTER_JS, webgl::WEBGL_JS}, constance::uri::{SEEDS_URL, VIDEO_URL}, model::video_links_model::VideoLinksModel, seeds::room::get_rooms_chunks_8, stealth};


#[derive(Debug, Deserialize)]
struct Medata{
    url: String,
}

#[derive(Debug, Deserialize)]
struct Seed_Response {
    message: String,
    metadata: Medata,
    code: i32
}

pub async fn create_seeds(
    State(state): State<Arc<AppState>>
) -> impl IntoResponse {

    let start = Instant::now();
    create_seeds_all(state.clone()).await.expect("Fail create seeds all");
    let duration = start.elapsed();
    tracing::info!("Time elapsed: {:?}", duration);
   (StatusCode::OK, format!("Time elapsed: {:?}", duration))
} 

pub async  fn create_seeds_all( state: Arc<AppState>) -> Result<(), anyhow::Error> {
    
    let rooms  = get_rooms_chunks_8();

    for room in rooms {
         let _ = create_seeds_chunks(room.clone() ,state.clone() ).await?;
         tokio::time::sleep(Duration::from_secs(4)).await;
    }
    

 
Ok(())
}


pub async fn create_seeds_chunks( rooms:  Vec<&'static str>, state: Arc<AppState>) -> Result<(), anyhow::Error> {
   
    return  todo!();
//     let state_clone = state.clone();
//     let state_clone_2 = state.clone();
   
//     let (mut browser, mut handler) = Browser::launch(
//         BrowserConfig::builder()
//             .no_sandbox()
//             .disable_default_args()
//             .launch_timeout(Duration::from_secs(60))
//             .args( 
//                 vec![
                
//                 "--disable-blink-features=AutomationControlled".to_string(),
               
//                 ]
//             )
            
//             .with_head()
           
//             .build()
//             .expect("Failed to build browser config"),
//     )
//     .await?;
//     let _ = tokio::spawn(async move { 
//     while let Some(h) = handler.next().await {
        
            
//     } });
 
//  let seed   =  get_seed().await;
//  let page = browser
//  .new_page(seed)
//  .await
//  ?;
//     page.disable_log().await?;
//     page.enable_stealth_mode_with_agent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36").await.expect("Fail enable stealth mode with agent");
//  let stealth_first_script = stealth::plugin::apply();

//  let stealth_actions = [
//      stealth_first_script.as_str(),
//      CHROME_APP_JS,
//      NAVIGATOR_LANG_JS,
//      NAVIGATOR_PERMISSION_JS,
//      NAVIGATOR_PLUGIN_JS,
//      NAVIGATOR_VENDOR_JS,
//      NAVIGATOR_WEBDRIVER_JS,
//      OUTER_JS,
//      WEBGL_JS,
//      CHROME_RUNTIME_JS,
//      HAIRLINE_FIX_JS,
//      IFRAE_CONTENT_WINDOWS_JS,
//      MEDIA_CODEC_JS,
//  ];

//  stealth_actions
//      .iter()
//      .map(|action| {
//          page.execute(AddScriptToEvaluateOnNewDocumentParams {
//              source: action.to_string(),
//              include_command_line_api: None,
//              world_name: None,
//              run_immediately: Some(true),
//          })
//      })
//      .collect::<FuturesUnordered<_>>()
//      .try_collect::<Vec<_>>()
//      .await
//      ?;
 


 

//     let new_room =   rooms.clone();
//     let  hanlder_get_video =      new_room.iter().map(   |room|   async  {
//         let split_string = room.split(":").collect::<Vec<&str>>();
        
//         if split_string.len() == 2 {
//             let table_id = split_string[0];
//             let vt_id = split_string[1];
          
        
//             let url = format!("https://babylonps9k.evo-games.com/frontend/evo/r2/#table_id={}&vt_id={}", table_id, vt_id);
//             let url_clone = url.clone();
//             let page_first =  Arc::new(Mutex::new(browser.new_page("about:blank").await.unwrap())); 
//             let state_block_1 =state_clone.clone();
//             let page_first_clone = Arc::clone(&page_first);
//             let mut request_will_be_sent = page_first_clone.lock().await.event_listener::<EventRequestWillBeSent>()
            
//             .await
//             .unwrap()
//             .fuse();
//             let (_, _) = tokio::join!( 
                 
                
//                tokio::spawn(async move {
                
//                    while let Some(event) = request_will_be_sent.next().await {
                        
//                        if event.request.url.contains(VIDEO_URL) {
//                           // tracing::info!("[VIDEO_STRING]: {:?}", event.request.url);
//                             Some(event.request.url.to_string());
//                             state_block_1.mongodb.lock().await.add_video_link(VideoLinksModel{
//                                 _id: ObjectId::new(),
//                                 url: event.request.url.to_string(),
//                                 room: url_clone.clone() ,
//                                 table_id: table_id.to_string(),
//                                 other_id: None,
//                             }).await.unwrap();
//                             break;
                           
//                        }
//                    }
                   
//                }),
//                tokio::spawn(async move {
//                 page_first_clone.lock().await.goto(url).await.unwrap();
//                 })
           
      
        
//             );
//                page_first.lock().await.clone().close().await.unwrap();
//             } else {
//                 let table_id = split_string[0];
//             let url = format!("https://babylonps9k.evo-games.com/frontend/evo/r2/#table_id={}", table_id);
//              let url_clone = url.clone();
           
//             let page_second =  Arc::new(Mutex::new(browser.new_page("about:blank").await.unwrap())); 
//             let page_second_clone = page_second.clone();
//             let state_block_2 =state_clone_2.clone();
//             let mut request_will_be_sent = page_second_clone.lock().await.event_listener::<EventRequestWillBeSent>()
           
//             .await
//             .unwrap()
//             .fuse();
//             let (_, _) = tokio::join!( 
                 
                 
                   
             
               
               
//                tokio::spawn(async move {
//                    while let Some(event) = request_will_be_sent.next().await {
                        
//                        if event.request.url.contains(VIDEO_URL) {
//                           // tracing::info!("[VIDEO_STRING]: {:?}", event.request.url);
                       
//                             Some(event.request.url.to_string());
//                             state_block_2.mongodb.lock().await.add_video_link(VideoLinksModel{
//                                 _id: ObjectId::new(),
//                                 url: event.request.url.to_string(),
//                                 room: url_clone.clone() ,
//                                 table_id: table_id.to_string(),
//                                 other_id: None,
//                             }).await.unwrap();
//                             break;
                           
//                        }
                       
//                    }
                    
//                }),
//                tokio::spawn(async move {
//                 page_second_clone.lock().await.goto(url).await.unwrap();
//                 }));
//                page_second.lock().await.clone().close().await.unwrap();
          
//         }
        
       
       
//     }).collect::<FuturesUnordered<_>>()
//     .collect::<Vec<_>>();
 
   
//     let handler_check =timeout(Duration::from_secs(35), hanlder_get_video).await;
    
//     match handler_check {
//         Ok(handler_check) => {
//             tracing::info!("handler_check: {:?}", handler_check);
//         }
//         Err(e) => {
//             tracing::error!("Error: {:?}", e);
//             browser.close().await?;
//             browser.wait().await?;
//            return Ok(()) ;  
//         }
//     }
//     browser.close().await?;
//     browser.wait().await?;
  
//    Ok(()) 
}

async fn get_seed() -> String{
    let mut map = HashMap::new();
    map.insert("siteUsername", "vtskmg1tt11s");
    map.insert("username", "vtskmg1tt11s");
    map.insert("balance", "0");
    map.insert("skin", "B");
    map.insert("nickname", "vtskmg1tt11s");
   
        let client = reqwest::Client::new();
        let result =  client.post(SEEDS_URL)
        .header("x-api-key", "bc8b0f210b81aa79d9755fc202444e2ca013f4eb1ab18c21c334c9b269dc0c0a4274db6c8ef590a8d14a5ceee46e59c05cda195bf49a6e8dc806e01cf2a4d9fa")
        .json(&map)
        .send().await.expect("Get seed faild !!");
      let content =  result.text().await.expect("Get seed faild !!");
    tracing::info!("content: {:?}", content);
    let seed_rs =  serde_json::from_str::<Seed_Response>(&content).expect("Parse seed faild !!");
    seed_rs.metadata.url
}

 