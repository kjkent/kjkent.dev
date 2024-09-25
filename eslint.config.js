//@ts-check

import globals from 'globals';
import js from '@eslint/js';
import ts from 'typescript-eslint';
import react from 'eslint-plugin-react';
import astro from 'eslint-plugin-astro';
import a11y from 'eslint-plugin-jsx-a11y';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		files: ['**/*.{{,c,m}{j,t}s,{j,t}sx,astro}'],
		ignores: ['node_modules/', 'dist/', 'build/', '.*/'],
		languageOptions: {
			globals: { ...globals.browser, ...globals.node },
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},

	js.configs.recommended,
	...ts.configs.recommendedTypeChecked,
	...ts.configs.stylisticTypeChecked,
	// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
	react.configs.flat.recommended,
	...astro.configs.recommended,
	a11y.flatConfigs.recommended,
	prettierRecommended,

	{
		rules: {
			'prettier/prettier': [
				'warn',
				{
					EndOfLine: 'auto',
				},
			],
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
];
