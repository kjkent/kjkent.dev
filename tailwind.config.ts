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
				serif: ['Podkova', ...defaultTheme.fontFamily.serif],
			},
			colors: {
				term: {
					fg: '#cbe3e7',
					bg: '#16161e',
					black: '#100e23',
					gray: '#a6b3cc',
					red: '#ff5458',
					green: '#62d196',
					yellow: '#ffb378',
					blue: '#65b2ff',
					magenta: '#906cff',
					cyan: '#63f2f1',
					lred: '#ff8080',
					lgreen: '#95ffa4',
					lyellow: '#ffe9aa',
					lblue: '#91ddff',
					lmagenta: '#c991e1',
					lcyan: '#aaffe4',
				},
			},
		},
	},
	plugins: [addDynamicIconSelectors(), typography()],
};

export default tailwindConfig;
