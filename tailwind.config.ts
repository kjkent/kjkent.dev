import { type Config as TailwindConfig } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import typography from '@tailwindcss/typography';
import { addDynamicIconSelectors } from '@iconify/tailwind';

const tailwindConfig: TailwindConfig = {
	content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
	theme: {
		extend: {
			fontFamily: {
				mono: ['bm', ...defaultTheme.fontFamily.mono],
				sans: ['Carrois\\ Gothic', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [addDynamicIconSelectors(), typography()],
};

export default tailwindConfig;
