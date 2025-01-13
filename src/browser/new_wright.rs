use playwright::Playwright;









pub async fn new_wright() -> Result<(playwright::api::Page,playwright::api::BrowserContext), anyhow::Error> {
    let playwright = Playwright::initialize().await?;
    let launch_args = r#"{"headless": false, "stealth": true}"#;
    let launch_ws = format!("ws://localhost:3000?token=6R0W53R135510&launch={}", launch_args);
    let chromium = playwright
    .chromium()
    .connect_over_cdp_builder(
        launch_ws.as_str()
    ).connect_over_cdp().await.expect("Failed to connect to chromium");
    let context: playwright::api::BrowserContext = chromium.context_builder().build().await?;
    let page: playwright::api::Page = context.new_page().await?;
   
 
    Ok((page,context) )
}
