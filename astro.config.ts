import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import icon from 'astro-icon';
import global from 'astro-global';

// https://astro.build/config
export default defineConfig({
	site: 'https://kjkent.dev',
	integrations: [
		tailwind({
			// We implement our own
			applyBaseStyles: false,
		}),
		react(),
		icon(),
		global(),
	],
});
