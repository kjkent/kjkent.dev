import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import global from 'astro-global';

// https://astro.build/config
export default defineConfig({
	integrations: [
		global(),
		react(),
		tailwind({
			// Imported in base.css
			applyBaseStyles: false,
		}),
	],
});
