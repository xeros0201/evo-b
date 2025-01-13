pub const NAVIGATOR_LANG_JS: &str = r#"
(languages) => {
  // Overwrite the `languages` property to use a custom getter.
  Object.defineProperty(Object.getPrototypeOf(navigator), 'languages', {
    get: () => languages || ['en-US', 'en']
  })
}
"#;