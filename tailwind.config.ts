import { type Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

import { addIconSelectors } from '@iconify/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
	theme: {
		extend: {
			fontFamily: {
				mono: ['bm', ...defaultTheme.fontFamily.mono],
				sans: ['Carrois\\ Gothic', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	// Iconify plugin; requires icon sets to be declared.
	plugins: [addIconSelectors(['mdi'])],
} satisfies Config;