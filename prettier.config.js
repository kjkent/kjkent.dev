/** @type {import('prettier').Config} */
export default {
	printWidth: 80,
	tabWidth: 2,
	useTabs: true,
	semi: true,
	singleQuote: true,
	trailingComma: 'all',
	embeddedLanguageFormatting: 'auto',
	experimentalTernaries: true,
	resolveGlobalModules: false,
	endOfLine: 'lf',
	bracketSpacing: true,
	bracketSameLine: true,
	jsxSingleQuote: true,
	quoteProps: 'as-needed',
	requirePragma: false,
	htmlWhitespaceSensitivity: 'css',
	insertPragma: false,
	arrowParens: 'always',
	proseWrap: 'always',
	plugins: [
		'prettier-plugin-packagejson',
		'prettier-plugin-astro',
		'prettier-plugin-tailwindcss'
	],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
};
