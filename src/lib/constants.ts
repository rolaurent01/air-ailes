// --- Cloudinary ---
export const CLOUDINARY_CLOUD_NAME = import.meta.env.CLOUDINARY_CLOUD_NAME ?? 'dxiejikxc';
export const CLOUDINARY_BASE_URL = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload`;

// --- Images ---
export const IMAGE_THUMB_WIDTH = 400;
export const IMAGE_THUMB_HEIGHT = 300;
export const IMAGE_WEB_WIDTH = 2000;
export const IMAGE_WATERMARK_OPACITY = 30;
export const IMAGE_WATERMARK_GRAVITY = 'south_east';
export const IMAGE_WATERMARK_WIDTH = 150;

// --- Breakpoints ---
export const BREAKPOINT_MOBILE = 375;
export const BREAKPOINT_TABLET = 768;
export const BREAKPOINT_DESKTOP = 1440;

// --- Animations ---
export const ANIMATION_EASING = 'cubic-bezier(0.16, 1, 0.3, 1)';
export const ANIMATION_DURATION_FAST = 0.4;
export const ANIMATION_DURATION_DEFAULT = 0.6;
export const ANIMATION_DURATION_SLOW = 0.8;
export const ANIMATION_STAGGER_DELAY = 0.08;
export const HOVER_DURATION = 0.25;

// --- Navigation ---
export const NAV_LINKS = [
  { label: 'Galeries', href: '/galeries' },
  { label: 'Vidéos', href: '/videos' },
  { label: 'Blog', href: '/blog' },
  { label: 'À propos', href: '/a-propos' },
] as const;

// --- Réseaux sociaux ---
export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/air_ailes',
  tiktok: 'https://tiktok.com/@air_ailes',
} as const;

// --- Site ---
export const SITE_NAME = 'Air-Ailes';
export const SITE_DESCRIPTION = 'Photographie — Paysage & Portrait';
export const SITE_AUTHOR = 'Air-Ailes';
