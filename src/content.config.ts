import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const galeries = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/galeries' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    cloudinary_id: z.string(),
    gallery: z.string().default('paysage'),
    date: z.coerce.date().optional(),
    location: z.string().optional(),
    camera: z.string().optional(),
    orientation: z.enum(['landscape', 'portrait', 'square']).default('landscape'),
    aspect_ratio: z.string().optional(),
    focal_point: z.string().default('auto'),
    dominant_color: z.string().optional(),
    tone: z.string().optional(),
    brightness: z.string().optional(),
    mood: z.string().optional(),
    grid_size: z.enum(['normal', 'wide']).default('normal'),
    display_order: z.number(),
    printable: z.boolean().default(true),
    alt: z.string(),
  }),
});

const formation = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/formation' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    /** Date de première publication : métadonnées SEO uniquement, plus affichée */
    date: z.coerce.date(),
    /** Date de mise à jour, affichée sur la leçon */
    misAJour: z.coerce.date(),
    excerpt: z.string(),
    /** Numéro du module (voir src/lib/parcours.ts) */
    module: z.number().int().min(0),
    /** Position de la leçon dans son module, à partir de 1 */
    ordre: z.number().int().min(1),
    niveau: z.enum(['débutant', 'intermédiaire', 'avancé']),
    /** Suite de la phrase « À la fin de cette leçon, vous saurez… » */
    objectif: z.string(),
    cover_svg: z.string(),
    published: z.boolean().default(true),
  }),
});

const videos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/videos' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    platform: z.enum(['instagram']),
    embed_url: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
  }),
});

export const collections = { galeries, formation, videos };
