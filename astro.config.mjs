import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',   // generate static files suitable for GitHub Pages
  base: '/',          // root path; adjust if deploying to a subdirectory
});