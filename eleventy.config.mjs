const config = (eleventyConfig) => {
	return {
		dir: {
			input: 'src',
			output: 'dist',
			// includes directory is relative to input directory
			includes: 'include',
			// layout directory only applies to language-agnostic layouts when
			//   referenced in front-matter or data files. When using
			//   {% extends %}, includes directory is still searched.
			layouts: 'layout',
		},
	};
};

export default config;
