# Suivi du projet Air-Ailes

---

## [2026-03-14 14:52] — Blog, Vidéos, Pages statiques et SEO (étapes 1.11 à 1.13)

**Type :** `feature`
**Phase :** `1-blog`, `1-videos`, `1-pages`, `1-seo`
**Fichiers concernés :** `src/components/SEO.astro`, `src/components/VideoEmbed.astro`, `src/components/BlogPostCard.astro`, `src/layouts/BaseLayout.astro`, `src/layouts/BlogLayout.astro`, `src/layouts/GalleryLayout.astro`, `src/pages/videos.astro`, `src/pages/blog/index.astro`, `src/pages/blog/[...slug].astro`, `src/pages/a-propos.astro`, `src/pages/mentions-legales.astro`, `src/pages/index.astro`, `src/pages/galeries/*.astro`, `src/components/Footer.astro`, `astro.config.mjs`, `public/robots.txt`

### Description
Toutes les pages du site sont en place : vidéos, blog complet, à propos, mentions légales. SEO intégré sur chaque page. Sitemap généré.

### Détails techniques
- **SEO.astro** : composant réutilisable — title, meta description, canonical, Open Graph complet (og:title, og:description, og:image via Cloudinary 1200x630, og:locale fr_FR), Twitter Card (summary_large_image), Schema.org JSON-LD (WebSite/BlogPosting), noindex optionnel
- **Sitemap** : @astrojs/sitemap installé, site URL configurée, sitemap-index.xml généré
- **robots.txt** : Allow all, Disallow /original/, référence sitemap
- **VideoEmbed** : container 9:16, placeholder avec bouton play SVG, lazy loading iframe via IntersectionObserver, badge platform, support Instagram/TikTok
- **Page vidéos** : grille responsive 1/2/3 colonnes, stagger reveal clip-path, liens profils sociaux
- **BlogLayout** : hero 70vh avec couverture + parallax + gradient, titre fade-up, métadonnées (date, tags), prose premium (65ch, 18px, line-height 1.8), barre de progression de lecture (2px, fixed top, scroll-driven), navigation prev/next articles
- **BlogPostCard** : grille 2fr/3fr, hover avec zoom image + élévation, excerpt tronqué 3 lignes, lien "Lire l'article →"
- **Pages blog** : index avec liste triée par date + stagger reveal, [...slug].astro avec getStaticPaths + render()
- **Page À propos** : hero 60vh avec parallax, bio prose (démarche, approche), contact (email mailto + réseaux sociaux), reveal au scroll (paragraphes + headings en fade-up)
- **Mentions légales** : page utilitaire noindex, contenu placeholder (éditeur, hébergeur, PI, données, crédits)
- **Footer** : ajout lien "Mentions légales" discret
- **Pages existantes** : SEO props ajoutées sur accueil (image hero), galeries index (image cover), paysage, portrait
- **GalleryLayout** : ajout props description + image pour SEO
- Build vérifié : 10 pages en 1.32s, aucune erreur

### Pages du site
1. `/` — Accueil (hero + portfolio + journal)
2. `/galeries` — Index galeries
3. `/galeries/paysage` — Galerie paysage
4. `/galeries/portrait` — Galerie portrait
5. `/videos` — Vidéos (embeds Instagram/TikTok)
6. `/blog` — Liste des articles
7. `/blog/dans-la-brume-des-alpes` — Article
8. `/blog/lumiere-et-portraits` — Article
9. `/a-propos` — Bio, démarche, contact
10. `/mentions-legales` — Mentions légales

---

## [2026-03-14 14:42] — Repasse design (skills frontend-design + marketing-psychology)

**Type :** `enhancement`
**Phase :** `1-design-polish`
**Fichiers concernés :** `src/styles/global.css`, `src/components/Gallery.astro`, `src/components/Lightbox.astro`, `src/pages/index.astro`, `src/pages/galeries/index.astro`

### Description
Repasse complète appliquant les skills frontend-design et marketing-psychology pour élever le niveau visuel et l'immersion.

### Détails techniques
- **Grain texture** : overlay SVG feTurbulence sur body::after (opacity 3.5%), donne une texture photographique film
- **Séparateurs de section** : classe `.section-separator` — gradient linéaire horizontal fade-in/out, utilisé entre hero/sélection/blog
- **Reveal cinématique** : remplacement du simple fade par un clip-path inset animé (12% → 0%) + translateY, durée 0.8s — effet de dévoilement
- **Lightbox scale-up** : le contenu scale de 0.92 → 1 à l'ouverture (transition 0.4s)
- **Lightbox compteur** : affichage "1 / 8" sous les métadonnées + aria-label enrichi
- **Lightbox grain** : texture grain sur le backdrop (pseudo-element ::after)
- **Lightbox bouton** : "Obtenir un tirage d'art" (marketing-psychology : framing premium) au lieu de "Commander un tirage"
- **Hero gradient** : radial-gradient + linear-gradient multicouche pour plus de profondeur atmosphérique
- **Blog cards hover** : zoom 1.03 de l'image au survol
- **Galeries index asymétrique** : grille 1.15fr / 0.85fr avec aspect-ratios différents (4:3 vs 3:4), hover : titre glisse vers le haut, compteur apparaît en fade-up
- Tout respecte prefers-reduced-motion et hover:none
- Build vérifié : `npm run build` passe sans erreur

---

## [2026-03-14 14:36] — Collections, contenu, composants et galeries (étapes 1.7 à 1.10)

**Type :** `feature`
**Phase :** `1-content`, `1-components`, `1-pages`
**Fichiers concernés :** `src/content.config.ts`, `src/content/galeries/paysage/*.md` (5), `src/content/galeries/portrait/*.md` (3), `src/content/blog/*.md` (2), `src/content/videos/*.md` (2), `src/components/ProtectedImage.astro`, `src/components/PhotoCard.astro`, `src/components/Gallery.astro`, `src/components/Lightbox.astro`, `src/layouts/GalleryLayout.astro`, `src/pages/index.astro`, `src/pages/galeries/index.astro`, `src/pages/galeries/paysage.astro`, `src/pages/galeries/portrait.astro`, `src/lib/animations/text.ts`

### Description
Collections de contenu Astro, contenu de démonstration, composants photo (ProtectedImage, PhotoCard, Gallery, Lightbox), page d'accueil complète et pages galeries.

### Détails techniques
- **Collections de contenu** : 3 collections Zod (galeries, blog, videos) avec glob loader (Astro 6)
- **Contenu démo** : 8 photos (5 paysage, 3 portrait), 2 articles blog complets, 2 vidéos (Instagram + TikTok) — cloudinary_id fictifs
- **ProtectedImage** : background-image CSS (pas de `<img>`), overlay transparent, blocage clic droit/drag, blur-up LQIP via IntersectionObserver, lazy loading
- **PhotoCard** : hover scale 1.03 + ombre, overlay titre en fade-in, aspect-ratio dynamique selon orientation, support grid_size wide
- **Gallery** : grille masonry CSS (columns), responsive (1/2/3 colonnes), stagger reveal GSAP ScrollTrigger
- **Lightbox** : ouverture/fermeture animée, navigation clavier (←, →, Escape), swipe mobile (touch events), focus trap, backdrop click, métadonnées (titre, lieu, date), bouton "Commander un tirage" (placeholder), watermark via getWebUrl, dimensionnement dynamique
- **Page d'accueil** : hero 100vh avec photo vedette, parallax GSAP ScrollTrigger, gradient overlay, titre animé lettre par lettre, section Portfolio (6 photos en masonry + stagger), section Journal (2 articles en cards), lightbox intégrée
- **GalleryLayout** : titre animé, sous-titre, navigation inter-galeries (← Paysage | Portrait →)
- **Pages galeries** : index (2 blocs avec photo vedette + hover zoom), paysage.astro, portrait.astro — chacune avec Gallery + Lightbox
- **text.ts** : ajout support scrollTrigger pour les animations de texte déclenchées au scroll
- Toutes les animations respectent prefers-reduced-motion
- Build vérifié : `npm run build` passe sans erreur (4 pages)

---

## [2026-03-14 14:25] — Setup complet Phase 1A + 1B (étapes 1.1 à 1.6)

**Type :** `feature`
**Phase :** `1-setup`, `1-design`
**Fichiers concernés :** `astro.config.mjs`, `tsconfig.json`, `.gitignore`, `.env.example`, `src/lib/cloudinary.ts`, `src/lib/constants.ts`, `src/types/photo.ts`, `src/styles/global.css`, `src/lib/animations/reveal.ts`, `src/lib/animations/stagger.ts`, `src/lib/animations/text.ts`, `src/lib/animations/smooth-scroll.ts`, `src/components/Header.astro`, `src/components/Footer.astro`, `src/layouts/BaseLayout.astro`, `src/pages/index.astro`

### Description
Initialisation complète du projet Astro avec design system, animations et navigation.

### Détails techniques
- Projet Astro initialisé avec TypeScript strict et adapter Vercel
- Arborescence complète conforme à CONTEXT.md
- Helpers Cloudinary : `getImageUrl`, `getThumbUrl`, `getWebUrl`, `getOriginalUrl` avec transformations dynamiques
- Constantes centralisées dans `constants.ts` (breakpoints, durées, easings, liens nav, réseaux sociaux)
- Types TypeScript : interfaces `Photo`, `Gallery`, `VideoEmbed`, `BlogPost`
- Design system CSS : reset, variables (couleurs, typo, espacements, animations), font Outfit 300/400
- Animations GSAP : reveal au scroll, stagger pour grilles, animation texte lettre/mot, smooth scroll Lenis
- Toutes les animations respectent `prefers-reduced-motion`
- Header fixe avec fond transparent → semi-opaque au scroll, hamburger mobile avec menu plein écran animé en cascade
- Footer minimaliste avec copyright et icônes SVG (Instagram, TikTok)
- BaseLayout avec ClientRouter (View Transitions Astro 5), Lenis, meta tags
- Page d'accueil temporaire : titre "Air-Ailes" animé lettre par lettre, sous-titre fade-up, scroll indicator animé
- Dépendances : `@astrojs/vercel`, `gsap`, `lenis`
- Build vérifié : `npm run build` passe sans erreur

---
