pub const NAVIGATOR_WEBDRIVER_JS: &str = r#"
() => {
  delete Object.getPrototypeOf(navigator).webdriver
}
"#;
