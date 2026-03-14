import {
  CLOUDINARY_BASE_URL,
  IMAGE_WATERMARK_OPACITY,
  IMAGE_WATERMARK_GRAVITY,
  IMAGE_WATERMARK_WIDTH,
} from './constants';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface TransformOptions {
  width?: number;
  height?: number;
  crop?: string;
  format?: string;
  quality?: string;
  gravity?: string;
  dpr?: string;
  watermark?: boolean;
}

// ---------------------------------------------------------------------------
// Core URL builder
// ---------------------------------------------------------------------------

/**
 * Génère une URL Cloudinary avec les transformations spécifiées.
 */
export function getImageUrl(cloudinaryId: string, options: TransformOptions = {}): string {
  const {
    width,
    height,
    crop = 'fill',
    format = 'auto',
    quality = 'auto',
    gravity = 'auto',
    dpr,
    watermark = false,
  } = options;

  const transforms: string[] = [];

  if (width) transforms.push(`w_${width}`);
  if (height) transforms.push(`h_${height}`);
  if (crop) transforms.push(`c_${crop}`);
  if (format) transforms.push(`f_${format}`);
  if (quality) transforms.push(`q_${quality}`);
  if (gravity && crop !== 'limit') transforms.push(`g_${gravity}`);
  if (dpr) transforms.push(`dpr_${dpr}`);

  const transformString = transforms.join(',');

  // Watermark must be a separate chained transformation (separated by /)
  // to avoid conflicting with base image params (e.g. two w_ values)
  let watermarkChain = '';
  if (watermark) {
    watermarkChain = `/l_assets:logo,o_${IMAGE_WATERMARK_OPACITY},g_${IMAGE_WATERMARK_GRAVITY},w_${IMAGE_WATERMARK_WIDTH}`;
  }

  return `${CLOUDINARY_BASE_URL}/${transformString}${watermarkChain}/${cloudinaryId}`;
}

// ---------------------------------------------------------------------------
// LQIP — Low Quality Image Placeholder (tiny blur)
// ---------------------------------------------------------------------------

export function getLqipUrl(cloudinaryId: string): string {
  return getImageUrl(cloudinaryId, {
    width: 40,
    crop: 'limit',
    quality: '30',
  });
}

// ---------------------------------------------------------------------------
// HERO — above the fold, full-width, high quality
// ---------------------------------------------------------------------------

const HERO_WIDTHS = [1200, 1600, 2000] as const;

export function getHeroImageUrl(cloudinaryId: string, focalPoint = 'auto'): string {
  return getImageUrl(cloudinaryId, {
    width: 2000,
    crop: 'fill',
    gravity: focalPoint,
  });
}

export function getHeroSrcSet(cloudinaryId: string, focalPoint = 'auto'): string {
  return HERO_WIDTHS
    .map((w) => `${getImageUrl(cloudinaryId, { width: w, crop: 'fill', gravity: focalPoint })} ${w}w`)
    .join(', ');
}

export const HERO_SIZES = '100vw';

// ---------------------------------------------------------------------------
// GRID — gallery thumbnails, uniform 3:2 crop, responsive
// ---------------------------------------------------------------------------

const GRID_WIDTHS = [400, 600, 800] as const;

/**
 * Returns a single grid image URL at a given width.
 * All grid images are cropped to 3:2 (landscape) for visual consistency.
 */
export function getGridImageUrl(
  cloudinaryId: string,
  width = 600,
  focalPoint = 'auto',
): string {
  return getImageUrl(cloudinaryId, {
    width,
    height: Math.round(width * (2 / 3)),
    crop: 'fill',
    gravity: focalPoint,
  });
}

/**
 * Generates a srcset string for grid thumbnails.
 * All variants use 3:2 aspect ratio fill crop.
 */
export function getGridSrcSet(cloudinaryId: string, focalPoint = 'auto'): string {
  return GRID_WIDTHS
    .map((w) => {
      const h = Math.round(w * (2 / 3));
      return `${getImageUrl(cloudinaryId, { width: w, height: h, crop: 'fill', gravity: focalPoint })} ${w}w`;
    })
    .join(', ');
}

/**
 * Sizes attribute for grid images (masonry columns layout).
 * 1 col mobile / 2 col tablet / 3 col desktop.
 */
export const GRID_SIZES = '(max-width: 768px) calc(100vw - 3rem), (max-width: 1024px) calc(50vw - 2.5rem), calc(33.33vw - 2.5rem)';

// ---------------------------------------------------------------------------
// GRID — orientation-aware helpers for masonry layout
// ---------------------------------------------------------------------------

/**
 * Returns a grid image URL respecting the photo's natural orientation.
 */
export function getOrientedGridImageUrl(
  cloudinaryId: string,
  orientation: 'landscape' | 'portrait' = 'landscape',
  width = 600,
  focalPoint = 'auto',
): string {
  const ratio = orientation === 'portrait' ? 3 / 2 : 2 / 3;
  return getImageUrl(cloudinaryId, {
    width,
    height: Math.round(width * ratio),
    crop: 'fill',
    gravity: focalPoint,
  });
}

/**
 * Generates a srcset respecting photo orientation.
 */
export function getOrientedGridSrcSet(
  cloudinaryId: string,
  orientation: 'landscape' | 'portrait' = 'landscape',
  focalPoint = 'auto',
): string {
  const ratio = orientation === 'portrait' ? 3 / 2 : 2 / 3;
  return GRID_WIDTHS
    .map((w) => {
      const h = Math.round(w * ratio);
      return `${getImageUrl(cloudinaryId, { width: w, height: h, crop: 'fill', gravity: focalPoint })} ${w}w`;
    })
    .join(', ');
}

// ---------------------------------------------------------------------------
// LIGHTBOX — full-screen viewing, no destructive crop, original ratio
// ---------------------------------------------------------------------------

/**
 * Lightbox image: large, c_limit (no crop), with watermark.
 */
export function getLightboxImageUrl(cloudinaryId: string): string {
  return getImageUrl(cloudinaryId, {
    width: 2000,
    crop: 'limit',
    watermark: true,
  });
}

/**
 * Preload URL for lightbox (same as display URL).
 */
export function getLightboxPreloadUrl(cloudinaryId: string): string {
  return getLightboxImageUrl(cloudinaryId);
}

// ---------------------------------------------------------------------------
// Legacy helpers (kept for backward compatibility during transition)
// ---------------------------------------------------------------------------

export function getThumbUrl(cloudinaryId: string): string {
  return getGridImageUrl(cloudinaryId, 400);
}

export function getWebUrl(cloudinaryId: string, { watermark = false } = {}): string {
  return getImageUrl(cloudinaryId, {
    width: 2000,
    crop: 'limit',
    watermark,
  });
}

export function getOriginalUrl(cloudinaryId: string, _signature?: string): string {
  return `${CLOUDINARY_BASE_URL}/${cloudinaryId}`;
}
