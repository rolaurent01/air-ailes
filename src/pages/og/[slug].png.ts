import type { APIRoute, GetStaticPaths } from 'astro';
import { getParcours } from '../../lib/parcours';
import sharp from 'sharp';

// Image de partage (og:image) de chaque leçon : le croquis d'en-tête centré
// sur un fond 1200×630, générée au build et servie par le site lui-même.
// Les réseaux sociaux (LinkedIn, Facebook, WhatsApp) n'affichent pas les SVG.

const OG_WIDTH = 1200;
const OG_HEIGHT = 630;
const OG_BACKGROUND = '#111111'; // même fond que les croquis

const covers = import.meta.glob<string>('/public/formation/*.svg', {
  query: '?raw',
  import: 'default',
  eager: true,
});

export const getStaticPaths = (async () => {
  const parcours = await getParcours();
  return parcours.map((lecon) => ({
    params: { slug: lecon.data.slug },
    props: { cover: lecon.data.cover_svg },
  }));
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => {
  const svg = covers[`/public${props.cover}`];
  if (!svg) throw new Error(`Croquis d'en-tête introuvable : ${props.cover}`);

  const croquis = await sharp(Buffer.from(svg), { density: 216 })
    .resize({ height: OG_HEIGHT })
    .png()
    .toBuffer();

  const png = await sharp({
    create: { width: OG_WIDTH, height: OG_HEIGHT, channels: 3, background: OG_BACKGROUND },
  })
    .composite([{ input: croquis, gravity: 'center' }])
    .png()
    .toBuffer();

  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
