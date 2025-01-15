use std::sync::Arc;

use axum::{
    extract::{Query, State},
    response::IntoResponse,
    Json,
};
use axum_extra::extract::CookieJar;
use cached::{proc_macro::cached, TimedCache};
use futures::{stream::FuturesUnordered, TryStreamExt};
 
use playwright::Playwright;
use serde::{Deserialize, Serialize};
use serde_json::{json, Value};
 

use crate::{
    app_state::AppState,
 
    constance::{
        cookies::COOKIE_EVOSESSIONID,
        uri::{NODE_SERVICE_URL, PW_ENDPOINT, TARGET_URL, TARTGET_DOMAIN},
    },
};

#[derive(Debug, Serialize, Deserialize)]
pub struct Setup {
    pub lang: String,
    pub locale: String,
    pub user_id: String,
    pub player_id: String,
    pub casino_id: String,
    pub session_id: String,
    pub bare_session_id: String,
    pub version: String,
    pub currencyCode: String,
    pub currencySymbol: String,
    pub currencyMult: i32,
    pub currencyDecimals: i32,
    pub view: String,
    pub client: String,
    pub site: String,
    pub clientApiV2: ClientApiV2,
    pub AAMS: String,
    pub wrapped: bool,
    pub lobby: Lobby,
    pub chat: Chat,
    pub screenNameChanges: ScreenNameChanges,
    pub casinoConfig: CasinoConfig,
    pub cdn_host: String,
    pub geo: Geo,
    pub abTestingIds: Vec<String>,
    pub globalSettings: String,
    pub video_token_issuer: String,
    pub localization: Localization,
    pub branding: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct ClientApiV2 {
    pub release: String,
    pub enabledEvents: Vec<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Lobby {
    pub version: String,
    pub thumbnailsCdnHost: String,
    pub rngEnabled: bool,
    pub flipbook: bool,
    pub multiplayWidget: MultiplayWidget,
    pub brandingName: Option<String>,
    pub snippet: Snippet,
    pub sidePlay: SidePlay,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct MultiplayWidget {
    pub chipStack: Vec<i32>,
    pub defaultChip: i32,
    pub enabled: bool,
    pub categoryIds: Vec<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Snippet {
    pub enabled: bool,
    pub showCashier: bool,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct SidePlay {
    pub enabled: bool,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Chat {
    pub serverHost: String,
    pub showPublicChat: bool,
    pub showPrivateChat: bool,
    pub screen_name: String,
    pub characterCountPerMinuteThreshold: i32,
    pub messagingThrottle: i32,
    pub messageCharacterLimit: i32,
    pub privateChatTranslationEnabled: bool,
    pub captchaEnabled: bool,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct ScreenNameChanges {
    pub enabled: bool,
    pub count: i32,
    pub players_change_screen_name_limit_count: i32,
    pub players_change_screen_name_limit_time_frame_days: i32,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct CasinoConfig {
    pub specificBets: Vec<String>,
    pub maxOpenFrames: String,
    pub html5MultiWindow: String,
    pub flexPilot: String,
    pub closedTableLastActivityIgnore: String,
    pub freeGamesEnabled: String,
    pub isCompatibleLauncherEnabled: String,
    pub balancePushApiEnabled: bool,
    pub gameIdInHistory: bool,
    pub compliance: Compliance,
    pub gameClientUrl: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Compliance {
    pub mga: bool,
    pub uk: bool,
    pub ukWrapper: bool,
    pub ukWrapperLiveSlots: bool,
    pub aams: bool,
    pub dk: bool,
    pub swe: bool,
    pub esp: bool,
    pub de: bool,
    pub deRtp: bool,
    pub arg: bool,
    pub caOn: bool,
    pub forbidMultipleLiveSlots: bool,
    pub betExceedMinimumNotification: bool,
    pub showPaytableAndRtpOnStartup: bool,
    pub jurisdictionId: String,
}
#[derive(Debug, Serialize, Deserialize)]
pub struct Geo {
    pub country: String,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Localization {
    pub enableLanguageSwitcher: bool,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct SetupQuery {
    device: String,
    wrapped: bool,
    client_version: String,
}
#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct A {
    #[serde(flatten)]
    pub origin: Value,
    pub wsHost: String,
}

pub async fn get_setup_api(
    Query(query): Query<SetupQuery>,
    State(state): State<Arc<AppState>>,
    jar: CookieJar,
) -> impl IntoResponse {
    let url = format!(
        "{}/setup?device={}&wrapped={}&client_version={}",
        TARGET_URL, "desktop", "true", query.client_version
    );

    let username = jar.get("username").unwrap().value();
    let evo_ss = jar.get(COOKIE_EVOSESSIONID).unwrap().value();

    let cookies = get_cookies(
        evo_ss.to_string(),
        username.to_string(),
        axum::extract::State(state.clone()),
    )
    .await;

    let setup_a = get_setup_cache(
        url,
        evo_ss.to_string(),
        username.to_string(),
        cookies.clone(),
    )
    .await;

    (jar, Json(Some(setup_a)))
}

// #[cached(
//     ty = "TimedCache<(String, String, String),  A >",
//     create = "{ TimedCache::with_lifespan(3600) }",
//     convert = r#"{ (url.clone(), evo_ss.clone(),username.clone()) }"#
// )]
pub async fn get_setup_cache(
    url: String,
    evo_ss: String,
    username: String,
    cookies:  Vec<playwright::api::Cookie>,
) -> A {
 
    
    let body = json!({
        "url": url,
        "cookies":  cookies,
    });
    let client = reqwest::Client::new();
    let response = client
        .post( format!("{}/setup", NODE_SERVICE_URL))
        .json(&body)
        .send()
        .await
        .expect("failed get config");
   
   
    tracing::info!("[SETUP] of:{}-{} in {}", username, evo_ss, url);
  
  
    

    let result = response.json::<Value>().await.expect("Failed to parse setup");
 
    let setup_a = A {
        origin: result,
        wsHost: TARTGET_DOMAIN.to_string(),
    };
    setup_a
}

// #[cached(
//     ty = "TimedCache<(String, String  ), Vec<playwright::api::Cookie> >",
//     create = "{ TimedCache::with_lifespan(3600) }",
//     convert = r#"{ (evo_ss.clone(), username.clone() ) }"#
// )]
pub async fn get_cookies(
    evo_ss: String,
    username: String,
    state: State<Arc<AppState>>,
) -> Vec<playwright::api::Cookie> {
    tracing::info!("get_cookies - for {} - evo_ss {}", username, evo_ss);
    let clients = state.clients.lock().await.clone();
    let cookies: &Vec<playwright::api::Cookie> = clients
        .get(&username)
        .expect("Failed to get cookies in get_setup_api");
    cookies.clone()
}
