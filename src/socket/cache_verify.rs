// use std::{sync::Arc, time::Duration};

// use cached::{proc_macro::cached, TimedCache};
// use chromiumoxide::cdp::browser_protocol::{
//         network::EventWebSocketFrameSent, page::AddScriptToEvaluateOnNewDocumentParams
//     };
// use futures::{stream::FuturesUnordered, FutureExt, StreamExt, TryStreamExt};
// use thirtyfour::cookie::Cookie;
// use tokio::time::timeout;

// use crate::{
//     browser::{chromiumoxide::NewChrome, evasions::{chrome_app::CHROME_APP_JS, chrome_runtime::CHROME_RUNTIME_JS, hairline_fix::HAIRLINE_FIX_JS, iframe_content_windows::IFRAE_CONTENT_WINDOWS_JS, media_codec::MEDIA_CODEC_JS, navigator_lang::NAVIGATOR_LANG_JS, navigator_permission::NAVIGATOR_PERMISSION_JS, navigator_plugin::NAVIGATOR_PLUGIN_JS, navigator_vendor::NAVIGATOR_VENDOR_JS, navigator_webdriver::NAVIGATOR_WEBDRIVER_JS, outer::OUTER_JS, webgl::WEBGL_JS}},
//     constance::uri::TARGET_URL,
//     socket::msg_struct::metric_verify::MetricVerify, stealth,
// };

// #[cached(
//     ty = "TimedCache<(String, String, Option<String>), String>",
//     create = "{ TimedCache::with_lifespan(14400) }",
//     convert = r#"{ (game_type.clone(), table_id.clone(), vt_id.clone()) }"#,
//     option = true
// )]
// pub async fn cache_verify(
//     cookies: Vec<Cookie<'static>>,
//     game_type: String,
//     table_id: String,
//     vt_id: Option<String>,
// ) -> Option<String> {

//     let room = format!(
//         "{TARGET_URL}/frontend/evo/r2/#table_id={table_id}{}",
//         if let Some(vt_id) = vt_id.as_ref() {
//             format!("&vt_id={}", vt_id)
//         } else {
//             String::new()
//         }
//     );

//     let mut browser = NewChrome(cookies).await.expect("Fail new chrome");

//     let page =  browser.new_page("about:blank").await.expect("Fail new page");
    
//     page.enable_stealth_mode_with_agent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36").await.expect("Fail enable stealth mode with agent");
//       let stealth_first_script = stealth::plugin::apply();

//     let stealth_actions = [
//         stealth_first_script.as_str(),
//         CHROME_APP_JS,
//         NAVIGATOR_LANG_JS,
//         NAVIGATOR_PERMISSION_JS,
//         NAVIGATOR_PLUGIN_JS,
//         NAVIGATOR_VENDOR_JS,
//         NAVIGATOR_WEBDRIVER_JS,
//         OUTER_JS,
//         WEBGL_JS,
//         CHROME_RUNTIME_JS,
//         HAIRLINE_FIX_JS,
//         IFRAE_CONTENT_WINDOWS_JS,
//         MEDIA_CODEC_JS,
//     ];
 
//     stealth_actions
//         .iter()
//         .map(|action| {
//             page.execute(
//                AddScriptToEvaluateOnNewDocumentParams {
//                     source: action.to_string(),
//                     include_command_line_api: None,
//                     world_name: None,
//                     run_immediately: Some(true),
//                 },
//             )
//         })
//         .collect::<FuturesUnordered<_>>()
//         .try_collect::<Vec<_>>()
//         .await.expect("Fail apply stealth");
 
    
//     let mut events = browser
//         .event_listener::<EventWebSocketFrameSent>()
//         .await
//         .unwrap()
//         .fuse();

//    let hanlder_metric  = tokio::spawn(async move{
//     while let Some(event) = events.next().await {
     
//         let metric_res = serde_json::from_str::<MetricVerify>(&event.response.payload_data);
//         match metric_res {
//             Ok(metric_res) => {
//                 tracing::warn!("[METRIC_STRING]: {:?}", metric_res.args.result);
//                 browser.close().await.expect("Fail close browser");
//                 browser.wait().await.expect("Fail wait browser");
//                 return Some(metric_res.args.result.to_string());
//             }
//             Err(_) => {
//                 continue;
//                 // tracing::error!("[METRIC_ERROR]: {:?}", e);
//             }
//         }
       
      
        
//     };
//     None
//    });
//    let (metric_res, _) = tokio::join!(hanlder_metric,
//     page.goto(room)
//     );
//     metric_res.expect("failed metric") 
// }

 

