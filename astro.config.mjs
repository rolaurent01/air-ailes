// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://air-ailes.com',
  adapter: vercel(),
  integrations: [sitemap()],
  prefetch: true,
  vite: {
    css: {
      devSourcemap: true,
    },
  },
});
