

pub const HAIRLINE_FIX_JS: &str = r#"
    ()=>{
	// store the existing descriptor
	const elementDescriptor = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'offsetHeight');

	// redefine the property with a patched descriptor
	Object.defineProperty(HTMLDivElement.prototype, 'offsetHeight', {
	...elementDescriptor,
	get: function() {
		if (this.id === 'modernizr') {
			return 1;
		}
		return elementDescriptor.get.apply(this);
		},
	});
}

"#;
