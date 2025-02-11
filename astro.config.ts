import react from '@astrojs/react';
import global from 'astro-global';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [global(), react()],

  vite: { plugins: [tailwindcss()] },
});