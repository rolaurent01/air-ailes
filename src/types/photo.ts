/** Métadonnées d'une photo dans une galerie */
export interface Photo {
  title: string;
  slug: string;
  gallery: 'paysage' | 'macro';
  cloudinaryId: string;
  date: Date;
  location?: string;
  camera?: string;
  orientation?: 'landscape' | 'portrait' | 'square';
  aspectRatio?: string;
  focalPoint?: string;
  dominantColor?: string;
  tone?: 'warm' | 'cold' | 'neutral';
  brightness?: 'light' | 'dark' | 'medium';
  mood?: string;
  gridSize?: 'normal' | 'wide';
  displayOrder?: number;
  printable: boolean;
  alt: string;
}

/** Métadonnées d'une galerie */
export interface Gallery {
  title: string;
  slug: string;
  description: string;
  coverCloudinaryId: string;
  photos: Photo[];
}

/** Embed vidéo Instagram ou TikTok */
export interface VideoEmbed {
  title: string;
  slug: string;
  platform: 'instagram' | 'tiktok';
  embedUrl: string;
  description?: string;
  date: Date;
}

/** Article de blog */
export interface BlogPost {
  title: string;
  slug: string;
  date: Date;
  excerpt: string;
  coverCloudinaryId?: string;
  tags: string[];
  content: string;
}
