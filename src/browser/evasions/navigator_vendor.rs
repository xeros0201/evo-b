pub const NAVIGATOR_VENDOR_JS: &str = r#"
    vendor => {
  // Overwrite the `vendor` property to use a custom getter.
  Object.defineProperty(Object.getPrototypeOf(navigator), 'vendor', {
    get: () => vendor || 'Google Inc.'
  })
}

"#;