import globals from 'globals';

import js from '@eslint/js';
import ts from 'typescript-eslint';
import react from 'eslint-plugin-react';
import astro from 'eslint-plugin-astro';
import a11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-plugin-prettier/recommended';

export default [
	// Default sharable configs from plugins
	a11y.flatConfigs.recommended,
	js.configs.recommended,
	ts.configs.recommended,
	prettier,

	{
		// Needs separating to avoid react-in-jsx-scope
		files: ['**/*.astro'],
		...astro.configs.recommended,
	},
	{
		files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
		...react.configs.flat.recommended,
	},

	{
		// Defaults for all supported files
		files: ['**/*.{astro,cjs,js,jsx,mjs,ts,tsx}'],
		languageOptions: { globals: { ...globals.browser, ...globals.node } },
	},
];
