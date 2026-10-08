// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// Anciennes adresses /blog/<slug> → nouvelles adresses de la formation (redirections 301).
// Liste figée : ce sont les URL déjà publiées, à ne jamais retirer.
const ANCIENNES_LECONS = {
  'balance-des-blancs': 'balance-des-blancs',
  'colorimetrie-photo': 'colorimetrie-photo',
  'composition-photo': 'composition-photo',
  'droit-a-limage-photographie': 'droit-a-limage-photographie',
  'flash-debutant': 'flash',
  'histogramme-photo': 'histogramme-photo',
  'impression-photo': 'impression-photo',
  'lightroom-developpement': 'lightroom-developpement',
  'macro-photo': 'macro-photo',
  'photo-basse-lumiere': 'photo-basse-lumiere',
  'portfolio-photo': 'portfolio-photo',
  'profondeur-de-champ': 'profondeur-de-champ',
  'raw-vs-jpeg': 'raw-vs-jpeg',
  'triangle-exposition': 'triangle-exposition',
  // Les deux récits ont été supprimés : leur fond est repris dans ces leçons
  'lumiere-et-portraits': 'lumiere-naturelle',
  'dans-la-brume-des-alpes': 'paysage-photo',
};

export default defineConfig({
  // Adresse de référence du site (canonical, og:url, sitemap) : le seul endroit à modifier lors du passage à air-ailes.com
  site: 'https://air-ailes.vercel.app',
  adapter: vercel(),
  integrations: [sitemap()],
  prefetch: true,
  redirects: {
    '/blog': { status: 301, destination: '/formation' },
    ...Object.fromEntries(
      Object.entries(ANCIENNES_LECONS).map(([ancien, nouveau]) => [
        `/blog/${ancien}`,
        { status: 301, destination: `/formation/${nouveau}` },
      ]),
    ),
  },
  vite: {
    css: {
      devSourcemap: true,
    },
  },
});
