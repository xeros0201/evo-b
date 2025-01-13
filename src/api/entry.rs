use std::sync::Arc;

use axum::{extract::{Path, Query, State}, response::{IntoResponse, Redirect}};
use axum_extra::extract::{cookie::{Cookie}, CookieJar};
use serde::Deserialize;
 

use crate::{app_state::AppState, browser::sample::game_entry_exec, constance::cookies::COOKIE_EVOSESSIONID};


#[derive(Deserialize)]
pub struct  QueryParams {
    JSESSIONID: String,
    params: String,
    username: String,
}
 
 
pub async fn game_entry( 
Path(url): Path<String>, 
Query(query): Query<QueryParams>, 
State(state): State< Arc<AppState >>,   
jar: CookieJar 
) ->   impl IntoResponse {

    let native_url =format!("{}?params={}&JSESSIONID={}", url, query.params, query.JSESSIONID);
    let cookies = match game_entry_exec(&native_url ).await {
        Ok(cookies) => cookies,
        _ => return todo!()
        
    };

    tracing::info!("cookies: {:?}", cookies);
     let mut evo = String::new();
    cookies.iter().for_each(|coo: &playwright::api::Cookie | {
        if coo.name ==  "EVOSESSIONID" {
            evo = coo.value.to_string();
        }
    });
 
   let cookie = jar.add(Cookie::build((COOKIE_EVOSESSIONID.to_string(),evo)).path("/"))
                              .add(Cookie::build(("username", query.username.clone())).path("/"));
 
    state.clients.lock().await.insert(query.username, cookies);
   (cookie, Redirect::permanent("/frontend/evo/r2/"))
     

}