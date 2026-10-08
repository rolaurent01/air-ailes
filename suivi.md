# Suivi du projet Air-Ailes

---

## [2026-10-08 11:28] — Ajout de 3 photos et mélange de la galerie

**Type :** `feature`
**Phase :** `1-galeries`
**Fichiers concernés :** `src/content/galeries/paysage/dji-20251231165333-0023-d.md`, `src/content/galeries/paysage/dsc00067.md`, `src/content/galeries/paysage/dsc00108.md`, `src/lib/gallery-mix.ts`, `src/pages/galeries/index.astro`

### Description
Trois nouvelles photos sont en ligne dans la galerie, qui passe de 102 à 105 photos. La galerie mélange aussi désormais ses photos. Pourquoi : rangées par nom de fichier, donc par date, les photos d'une même sortie formaient des blocs, et la mise en colonnes les empilait les unes sous les autres (jusqu'à 12 photos du même jour d'affilée).

### Détails techniques
- Import avec `scripts/add-photos.ts` depuis le dossier `Nouvelles photos/` : compression à 4000 px, upload Cloudinary dans `paysage/`, fiches créées à la suite (`display_order` 104 à 106). Titres et textes alternatifs tirés du nom de fichier, comme pour les autres photos
- `DSC09329` non importée : déjà dans la galerie (même date, même appareil, même format), doublon confirmé
- Dossier `Nouvelles photos/` mis à la corbeille après l'import (les photos sont sur Cloudinary)
- `gallery-mix.ts` : ordre calculé au build, déterministe. Il écarte au maximum les photos d'un même jour et d'un même voyage (jours à moins de 3 jours d'écart), y compris côte à côte sur une ligne de 3 colonnes, et répartit paysages et portraits au prorata
- Mesures sur 105 photos : photos voisines du même jour 64 → 0, plus longue suite de même orientation 9 → 3
- `display_order` n'est plus utilisé pour l'ordre de la galerie, sauf pour la première photo qui reste en tête. Il sert toujours au hero de l'accueil, qui ne change pas
- Build vérifié : `npm run build` passe sans erreur, 105 photos affichées sur `/galeries` sans image cassée

---

## [2026-10-08 11:06] — Vidéos chargées après navigation et script d'ajout de photos

**Type :** `fix`, `feature`
**Phase :** `1-videos`, `1-galeries`
**Fichiers concernés :** `src/pages/videos.astro`, `scripts/add-photos.ts`

### Description
La première vidéo de la page Envol ne se chargeait qu'après un rechargement complet de la page. Elle se charge maintenant aussi quand on arrive par un lien du site. Un nouveau script permet aussi d'ajouter des photos sans toucher aux photos déjà en ligne. Pourquoi : les anciens scripts d'import (`batch-import.ts`, `sync-gallery.ts`) suppriment toutes les fiches de la galerie avant d'importer.

### Détails techniques
- Cause : le site change de page sans recharger (`ClientRouter` d'Astro). Chrome tente de charger la vidéo pendant que la nouvelle page est préparée hors écran, échoue, et garde l'erreur une fois la page affichée
- `videos.astro` : la vidéo en erreur relance son chargement à l'arrivée sur la page, et une vidéo déjà prête s'affiche tout de suite au lieu d'attendre un événement déjà passé
- Vérifié dans Chrome : accueil → Envol, puis Envol → Galeries → Envol, la première vidéo joue ; la deuxième se lance au scroll
- `add-photos.ts` : ignore les photos déjà présentes (même slug), refuse d'écraser une image sur Cloudinary, numérote à la suite du `display_order` le plus haut, lit date, appareil et orientation dans l'EXIF. Option `--dry-run` pour un essai sans envoi
- Usage : `npx tsx scripts/add-photos.ts --inbox "chemin/du/dossier"`

---

## [2026-10-06 20:05] — Empêcher l'assombrissement forcé par le navigateur

**Type :** `fix`
**Phase :** `1-design`
**Fichiers concernés :** `src/layouts/BaseLayout.astro`, `src/styles/global.css`

### Description
Le site déclare désormais aux navigateurs qu'il ne doit pas être recoloré. Pourquoi : Chrome Android et l'appli Google assombrissent d'office, élément par élément, un site qui n'a pas de mode sombre, ce qui peut abîmer ses couleurs ; l'extension Dark Reader fait de même. Le site est déjà sombre par choix : rien ne change à son apparence, on interdit seulement au navigateur d'y toucher.

### Détails techniques
- `BaseLayout.astro` (utilisé par toutes les pages, y compris les articles via `BlogLayout.astro`) : balises `<meta name="color-scheme" content="only light">` et `<meta name="darkreader-lock">`
- `global.css` : `color-scheme: only light` sur `:root` et sur les champs de formulaire, avec la couleur de texte du site sur les champs ; le `body` avait déjà un fond et une couleur de texte explicites
- Aucun changement visible : sans déclaration, le navigateur traitait déjà le site en « clair » pour ses barres de défilement et ses éléments natifs ; le site n'a aucun champ de formulaire aujourd'hui
- Limite : Samsung Internet passe outre et peut encore assombrir le site
- Build vérifié : `npm run build` passe sans erreur, balises présentes sur les 22 pages générées

---

## [2026-10-06 20:03] — Crédit Donkey Corp dans le pied de page

**Type :** `feature`
**Phase :** `1-pages`
**Fichiers concernés :** `src/components/CreditDonkey.astro`, `src/components/Footer.astro`

### Description
Ajout de la mention « Conçu par Donkey Corp » dans le pied de page, sur toutes les pages du site. Pourquoi : Donkey Corp est mentionnée sur tous les sites de ses clients, et le lien (https://donkey-corp.fr/?utm_source=air-ailes&utm_medium=credit) permet de mesurer les visites venues de ce site.

### Détails techniques
- Brique « Crédit Donkey » version 1.1.0, variante monogramme blanc (la charte Donkey Corp impose le blanc sur un fond foncé, et le pied de page est quasi noir)
- `CreditDonkey.astro` copié tel quel depuis la brique, sans modification (il est fabriqué par la brique et ne se retouche pas à la main)
- Placé sous le lien « Mentions légales », dans la même colonne centrée que le copyright : même alignement sur téléphone et sur ordinateur
- Le crédit reprend la couleur et la police du pied de page, taille 13 px par défaut (entre le copyright à 14 px et les mentions légales à 12 px), aucun réglage ajouté
- Le pied de page est commun à toutes les pages (via `BaseLayout.astro`, y compris les articles du blog via `BlogLayout.astro`)
- Lien ouvert dans un nouvel onglet, annoncé aux lecteurs d'écran ; aucune dépendance, aucun script
- Build vérifié : `npm run build` passe sans erreur, crédit présent sur les 22 pages générées

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
