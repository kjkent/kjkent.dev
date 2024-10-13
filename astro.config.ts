import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import global from 'astro-global';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	integrations: [global(), react(), tailwind({ applyBaseStyles: false })],
});
