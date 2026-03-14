import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const galeries = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/galeries' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    cloudinary_id: z.string(),
    gallery: z.enum(['paysage', 'portrait']),
    date: z.coerce.date().optional(),
    location: z.string().optional(),
    camera: z.string().optional(),
    orientation: z.enum(['landscape', 'portrait', 'square']),
    aspect_ratio: z.string().optional(),
    focal_point: z.enum(['center', 'face', 'auto']).default('auto'),
    dominant_color: z.string().optional(),
    tone: z.enum(['warm', 'cold', 'neutral']).optional(),
    brightness: z.enum(['dark', 'light', 'medium']).optional(),
    mood: z.string().optional(),
    grid_size: z.enum(['normal', 'wide']).default('normal'),
    display_order: z.number(),
    printable: z.boolean().default(true),
    alt: z.string(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    cover_cloudinary_id: z.string(),
    tags: z.array(z.string()).optional(),
    published: z.boolean().default(true),
  }),
});

const videos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/videos' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    platform: z.enum(['instagram', 'tiktok']),
    embed_url: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
  }),
});

export const collections = { galeries, blog, videos };
