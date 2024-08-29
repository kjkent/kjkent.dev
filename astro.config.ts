import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import react from "@astrojs/react";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: 'https://kjkent.dev',
  integrations: [tailwind({
    // We implement our own
    applyBaseStyles: false
  }), mdx(), react(), icon()]
});