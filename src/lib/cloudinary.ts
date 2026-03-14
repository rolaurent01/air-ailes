import {
  CLOUDINARY_BASE_URL,
  IMAGE_THUMB_WIDTH,
  IMAGE_THUMB_HEIGHT,
  IMAGE_WEB_WIDTH,
  IMAGE_WATERMARK_OPACITY,
  IMAGE_WATERMARK_GRAVITY,
  IMAGE_WATERMARK_WIDTH,
} from './constants';

/** Options de transformation Cloudinary */
interface ImageOptions {
  width?: number;
  height?: number;
  crop?: string;
  format?: string;
  quality?: string;
  gravity?: string;
  watermark?: boolean;
}

/**
 * Génère une URL Cloudinary avec les transformations spécifiées.
 */
export function getImageUrl(cloudinaryId: string, options: ImageOptions = {}): string {
  const {
    width,
    height,
    crop = 'fill',
    format = 'auto',
    quality = 'auto',
    gravity = 'auto',
    watermark = false,
  } = options;

  const transforms: string[] = [];

  if (width) transforms.push(`w_${width}`);
  if (height) transforms.push(`h_${height}`);
  if (crop) transforms.push(`c_${crop}`);
  if (format) transforms.push(`f_${format}`);
  if (quality) transforms.push(`q_${quality}`);
  if (gravity) transforms.push(`g_${gravity}`);

  if (watermark) {
    transforms.push(
      `l_assets:logo`,
      `o_${IMAGE_WATERMARK_OPACITY}`,
      `g_${IMAGE_WATERMARK_GRAVITY}`,
      `w_${IMAGE_WATERMARK_WIDTH}`
    );
  }

  const transformString = transforms.join(',');
  return `${CLOUDINARY_BASE_URL}/${transformString}/${cloudinaryId}`;
}

/**
 * Raccourci miniature : 400×300px, WebP, crop fill, gravity auto.
 */
export function getThumbUrl(cloudinaryId: string): string {
  return getImageUrl(cloudinaryId, {
    width: IMAGE_THUMB_WIDTH,
    height: IMAGE_THUMB_HEIGHT,
    crop: 'fill',
    gravity: 'auto',
  });
}

/**
 * Raccourci web : 2000px, WebP, avec option watermark.
 */
export function getWebUrl(cloudinaryId: string, { watermark = false } = {}): string {
  return getImageUrl(cloudinaryId, {
    width: IMAGE_WEB_WIDTH,
    crop: 'limit',
    watermark,
  });
}

/**
 * Placeholder pour les URLs signées (phase 2 — vente de tirages).
 * Retourne l'URL de base pour l'instant.
 */
export function getOriginalUrl(cloudinaryId: string, _signature?: string): string {
  // Phase 2 : implémenter la signature Cloudinary pour accès sécurisé
  return `${CLOUDINARY_BASE_URL}/${cloudinaryId}`;
}
