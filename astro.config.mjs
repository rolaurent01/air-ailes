// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Adresse de référence du site (canonical, og:url, sitemap) : le seul endroit à modifier lors du passage à air-ailes.com
  site: 'https://air-ailes.vercel.app',
  adapter: vercel(),
  integrations: [sitemap()],
  prefetch: true,
  vite: {
    css: {
      devSourcemap: true,
    },
  },
});
