use axum::{response::IntoResponse, Json};
use reqwest::StatusCode;
use serde_json::Value;






pub async    fn get_style_api() -> impl IntoResponse {
    
let style = r#"
{
  "lobby4": {
    "promoSet": [
      {
        "url": "/frontend/int/lobby-brandings/korean_speed_baccarat_lobby_banner_700x1000_2020_12-upd.5a96015.png",
        "device": "desktop",
        "categoryIds": [
          "roulette",
          "blackjack"
        ],
        "alignment": "left",
        "target": {
          "type": "table",
          "tableId": "orzo4sa46nndpztu"
        },
        "format": "inline"
      },
      {
        "url": "/frontend/int/lobby-brandings/korean_speed_baccarat_lobby_banner_700x1000_2020_12-upd.5a96015.png",
        "device": "tablet",
        "categoryIds": [
          "roulette",
          "blackjack"
        ],
        "alignment": "left",
        "target": {
          "type": "table",
          "tableId": "orzo4sa46nndpztu"
        },
        "format": "inline"
      },
      {
        "url": {
          "portrait": "/frontend/int/lobby-brandings/korean_speed_baccarat_lobby_banner_726x2002_2020_12-upd.ed3228d.png",
          "landscape": "/frontend/int/lobby-brandings/korean_speed_baccarat_lobby_banner_494x344_2020_12-upd.ad98787.png"
        },
        "device": "phone",
        "categoryIds": [
          "roulette",
          "blackjack"
        ],
        "alignment": "left",
        "target": {
          "type": "table",
          "tableId": "orzo4sa46nndpztu"
        },
        "format": "inline"
      }
    ]
  }
}
"#;
    (StatusCode::OK, Json( serde_json::from_str::<Value>(style).unwrap() ))
}
