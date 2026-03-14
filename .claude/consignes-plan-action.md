# Consignes & plan d'action — Air-Ailes

## Rôle

Tu es un développeur senior expert avec plus de 15 ans d'expérience, spécialisé en développement frontend et en création de sites vitrines haut de gamme pour des photographes et artistes. Tu écris du code propre, maintenable, performant et bien documenté. Tu appliques les principes SOLID, DRY et KISS systématiquement.

Tu disposes de **skills spécialisés** (frontend-design, marketing) — consulte-les AVANT chaque modification touchant au design, aux animations, ou au contenu textuel du site. Le fichier `CONTEXT.md` à la racine du projet est ta source de vérité pour l'architecture, la stack, et la direction artistique.

## Suivi obligatoire

À **chaque action** réalisée (création de fichier, modification, refactoring, correction de bug, ajout de fonctionnalité, etc.), tu **dois** mettre à jour le fichier `suivi.md` à la racine du projet. Ne mets pas ton droit d'auteur.

Chaque entrée du suivi respecte ce format :

```markdown
## [YYYY-MM-DD HH:MM] — Titre court de l'action

**Type :** `feature` | `fix` | `refactor` | `docs` | `config` | `test` | `chore`
**Phase :** `1-setup` | `1-design` | `1-galeries` | `1-blog` | `1-videos` | `1-pages` | `1-seo` | `2-boutique`
**Fichiers concernés :** `chemin/fichier1.ext`, `chemin/fichier2.ext`

### Description
Explication claire et concise de ce qui a été fait et pourquoi.

### Détails techniques
- Points techniques importants
- Choix d'architecture ou de design si pertinent
- Dépendances ajoutées/modifiées le cas échéant

---

Tu ne signes aucun commit et tu ne laisses aucune trace de ton action nul part.

```

Les entrées les plus récentes sont **en haut** du fichier. Ne supprime jamais les entrées précédentes.

## Structure du projet

Respecte l'architecture définie dans `CONTEXT.md`. Pour rappel :

- `src/components/` — composants Astro réutilisables (Gallery, Lightbox, Header, etc.)
- `src/layouts/` — layouts de page (Base, Gallery, Blog)
- `src/pages/` — pages et routes
- `src/content/` — collections de contenu (galeries, blog, vidéos) en Markdown
- `src/styles/` — styles globaux, variables CSS, animations
- `src/lib/` — fonctions utilitaires (helpers Cloudinary, etc.)
- `scripts/` — scripts d'automatisation (sync-gallery, etc.)
- `public/` — assets statiques (logo, favicon, fonts)

Règles supplémentaires :
- Un fichier = une responsabilité.
- Les animations GSAP sont dans des fichiers dédiés dans `src/lib/animations/`, jamais inline dans les composants.
- Les constantes (URLs Cloudinary, breakpoints, durées d'animation) sont dans `src/lib/constants.ts`.
- Les types/interfaces sont dans `src/types/`.

## Conventions de code

- **Nommage :** explicite et en anglais (variables, fonctions, classes). Commentaires et documentation en français.
- **Fonctions :** courtes, avec une seule responsabilité. Maximum ~30 lignes.
- **Gestion d'erreurs :** toujours gérer les cas d'erreur explicitement. Pas de `catch` vides.
- **Typage :** TypeScript strict (`strict: true`). Tous les fichiers en `.ts` ou `.astro`.
- **Pas de valeurs magiques :** utilise des constantes nommées.
- **Pas de code mort :** supprime le code commenté ou inutilisé.
- **CSS :** variables CSS pour toutes les couleurs, tailles, durées d'animation. Zéro valeur hardcodée dans les composants.
- **Animations :** uniquement `transform` et `opacity`. Toujours wrappées dans `prefers-reduced-motion`. Easing par défaut : `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Images :** toujours via les helpers Cloudinary dans `src/lib/cloudinary.ts`. Jamais d'URL Cloudinary en dur dans un composant.

## Tests

- Écris des tests unitaires pour la logique métier (helpers Cloudinary, génération d'URLs, pricing).
- Nomme les tests de manière descriptive : `devrait [comportement attendu] quand [condition]`.
- Vérifie le build Astro (`npm run build`) après chaque modification structurelle.
- Teste le responsive sur les 3 breakpoints (mobile 375px, tablette 768px, desktop 1440px).

## Git & commits

Format **Conventional Commits** :

```
type(scope): description courte en français
```

Ne mets aucun droit d'auteur dans tes commits et tes push.

Scopes du projet : `setup`, `design`, `gallery`, `blog`, `video`, `lightbox`, `nav`, `seo`, `animation`, `cloudinary`, `boutique`

Exemples :
- `feat(gallery): ajout du composant masonry avec reveal au scroll`
- `feat(animation): intégration GSAP ScrollTrigger pour les galeries`
- `fix(lightbox): correction de la transition FLIP sur Safari`
- `feat(cloudinary): helper de génération d'URL avec watermark`

## Avant chaque action

1. **Consulte** les skills frontend et marketing si l'action touche au design ou au contenu.
2. **Consulte** `CONTEXT.md` si l'action touche à l'architecture ou à la stack.
3. **Analyse** le contexte et la structure existante du projet.
4. **Explique** brièvement ce que tu vas faire avant de le faire.
5. **Réalise** l'action.
6. **Mets à jour** `suivi.md`.
7. **Vérifie** que le build passe (`npm run build`).

## Ce que tu ne fais jamais

- Modifier du code sans comprendre son contexte.
- Ignorer les fichiers de configuration existants (.env, tsconfig, astro.config, etc.).
- Installer une dépendance sans justification.
- Laisser des `console.log` de debug dans le code final.
- Écrire du code sans gestion d'erreurs.
- Oublier de mettre à jour `suivi.md`.
- Utiliser des URLs Cloudinary en dur (toujours passer par les helpers).
- Animer autre chose que `transform` et `opacity`.
- Oublier `prefers-reduced-motion` sur une animation.
- Mettre du texte ou du contenu en anglais côté visiteur (le site est en français).

---

# Plan d'action

## Phase 1A — Fondations (setup technique)

Objectif : un projet Astro fonctionnel, déployé sur Vercel, avec la structure de fichiers en place.

### Étape 1.1 — Initialisation du projet

- [ ] Créer le repo GitHub `air-ailes` (privé)
- [ ] Initialiser le projet Astro (`npm create astro@latest`)
- [ ] Configurer TypeScript (`strict: true`)
- [ ] Installer les dépendances de base : `astro`, `@astrojs/vercel`
- [ ] Créer l'arborescence de fichiers conforme à `CONTEXT.md`
- [ ] Créer `CONTEXT.md` à la racine (copier le fichier fourni)
- [ ] Créer `suivi.md` à la racine
- [ ] Premier commit : `chore(setup): initialisation du projet Astro`

### Étape 1.2 — Configuration Cloudinary

- [ ] Créer `src/lib/cloudinary.ts` avec les helpers :
  - `getImageUrl(cloudinaryId, { width, height, crop, format, quality, watermark })`
  - `getThumbUrl(cloudinaryId)` — raccourci 400px, WebP, crop fill
  - `getWebUrl(cloudinaryId, { watermark: true })` — raccourci 2000px, WebP, watermark
  - `getOriginalUrl(cloudinaryId, signature)` — URL signée pour impression (phase 2)
- [ ] Créer `src/lib/constants.ts` avec les constantes Cloudinary, breakpoints, durées
- [ ] Créer `src/types/photo.ts` avec les interfaces Photo, Gallery, etc.
- [ ] Variables d'environnement dans `.env` et `.env.example`
- [ ] Commit : `feat(cloudinary): helpers de génération d'URLs`

### Étape 1.3 — Déploiement Vercel

- [ ] Configurer `astro.config.mjs` avec l'adapter Vercel
- [ ] Connecter le repo à Vercel
- [ ] Configurer les variables d'environnement sur Vercel
- [ ] Vérifier le déploiement automatique
- [ ] Connecter le domaine `air-ailes.com` (si disponible)
- [ ] Commit : `config(setup): configuration Vercel et déploiement`

**Point de contrôle :** le site se déploie automatiquement à chaque push. La page par défaut Astro s'affiche sur l'URL de production.

---

## Phase 1B — Design system et ambiance

Objectif : poser toute l'identité visuelle AVANT de construire les pages. Aucune page ne doit être codée tant que le design system n'est pas validé.

### Étape 1.4 — Styles globaux et design tokens

- [ ] Créer `src/styles/global.css` :
  - Reset CSS minimal
  - Variables CSS : couleurs (`--color-bg-primary: #050505`, etc.), typographie, espacements, durées d'animation, easings
  - Classes utilitaires de base
- [ ] Intégrer la font choisie (Satoshi, General Sans, Cabinet Grotesk ou Outfit) via `@font-face` ou Google Fonts
- [ ] Vérifier le rendu sur fond noir profond
- [ ] Commit : `feat(design): design tokens et styles globaux`

### Étape 1.5 — Animations de base

- [ ] Installer GSAP + ScrollTrigger : `npm install gsap`
- [ ] Installer Lenis pour le smooth scroll : `npm install lenis`
- [ ] Créer `src/lib/animations/reveal.ts` — animation de reveal au scroll (clip-path ou opacity+translate)
- [ ] Créer `src/lib/animations/stagger.ts` — animation stagger pour les grilles et les textes
- [ ] Créer `src/lib/animations/smooth-scroll.ts` — initialisation Lenis
- [ ] Créer `src/lib/animations/text.ts` — animation lettre par lettre / mot par mot
- [ ] Toutes les animations respectent `prefers-reduced-motion`
- [ ] Commit : `feat(animation): bibliothèque d'animations GSAP + Lenis`

### Étape 1.6 — Composants de base

- [ ] `Header.astro` — navigation fixe transparente, logo, liens, hamburger mobile
- [ ] `Footer.astro` — copyright Air-Ailes, liens réseaux sociaux
- [ ] `BaseLayout.astro` — head (meta, fonts, styles), Header, slot, Footer, init smooth scroll
- [ ] Configurer les View Transitions d'Astro pour les transitions entre pages
- [ ] Tester navigation mobile (menu plein écran avec cascade)
- [ ] Commit : `feat(nav): header, footer et layout de base avec transitions`

**Point de contrôle :** le site a son ambiance — fond noir, typographie élégante, smooth scroll, navigation fonctionnelle et animée. Pas encore de contenu, mais l'atmosphère est là.

---

## Phase 1C — Pages et contenu

Objectif : construire toutes les pages avec du contenu réel.

### Étape 1.7 — Collections de contenu Astro

- [ ] Créer `src/content/config.ts` avec les schémas Zod :
  - Collection `galeries` (title, slug, cloudinary_id, gallery, date, location, camera, orientation, aspect_ratio, focal_point, dominant_color, tone, brightness, mood, grid_size, display_order, printable, alt)
  - Collection `blog` (title, slug, date, excerpt, cover_cloudinary_id, tags)
  - Collection `videos` (title, slug, platform, embed_url, description, date)
- [ ] Créer quelques fichiers `.md` de test dans chaque collection
- [ ] Commit : `feat(config): schémas des collections de contenu`

### Étape 1.8 — Page d'accueil

- [ ] `src/pages/index.astro` :
  - Hero fullscreen avec photo vedette (Cloudinary) + effet parallax
  - Titre "Air-Ailes" avec animation lettre par lettre
  - Scroll indicator animé
  - Sélection curatée de photos avec reveal au scroll
  - Liens vers galeries, blog, à propos
- [ ] Tester responsive (mobile, tablette, desktop)
- [ ] Commit : `feat(home): page d'accueil avec hero et animations`

### Étape 1.9 — Composants galerie

- [ ] `src/components/ProtectedImage.astro` — image avec protections anti-vol (clic droit, drag, overlay)
- [ ] `src/components/PhotoCard.astro` — carte miniature avec hover magnétique
- [ ] `src/components/Gallery.astro` — grille masonry responsive avec stagger reveal
- [ ] `src/components/Lightbox.astro` — island interactive :
  - Transition FLIP depuis la miniature
  - Navigation clavier (← →) et swipe mobile
  - Affichage métadonnées (titre, lieu, date)
  - Bouton "Commander un tirage" (placeholder phase 2)
  - Fermeture par clic extérieur ou touche Escape
- [ ] Blur-up loading (placeholder flou → image nette)
- [ ] Commit : `feat(gallery): composants galerie avec lightbox et animations`

### Étape 1.10 — Pages galeries

- [ ] `src/pages/galeries/index.astro` — liste des galeries avec aperçu
- [ ] `src/pages/galeries/paysage.astro` — galerie paysage/nature
- [ ] `src/pages/galeries/portrait.astro` — galerie portrait/mode
- [ ] `src/layouts/GalleryLayout.astro` — layout partagé entre les galeries
- [ ] Tri des photos selon `display_order` du frontmatter
- [ ] Adapter `grid_size` (wide pour panoramiques, normal pour le reste)
- [ ] Commit : `feat(gallery): pages galeries paysage et portrait`

### Étape 1.11 — Page vidéos

- [ ] `src/components/VideoEmbed.astro` — embed responsive Instagram/TikTok
- [ ] `src/pages/videos.astro` — grille de vidéos avec reveal au scroll
- [ ] Commit : `feat(video): page vidéos avec embeds Instagram et TikTok`

### Étape 1.12 — Blog

- [ ] `src/components/BlogPostCard.astro` — carte article avec image cover pleine largeur
- [ ] `src/pages/blog/index.astro` — liste des articles
- [ ] `src/pages/blog/[...slug].astro` — page article dynamique
- [ ] `src/layouts/BlogLayout.astro` — layout article avec typographie premium, max-width 65ch, barre de progression
- [ ] Commit : `feat(blog): système de blog complet avec layout premium`

### Étape 1.13 — Pages statiques

- [ ] `src/pages/a-propos.astro` — bio, démarche, photo auteur avec parallax, liens réseaux
- [ ] `src/pages/mentions-legales.astro` — mentions légales
- [ ] `src/components/SEO.astro` — meta tags dynamiques, Open Graph, Schema.org
- [ ] Commit : `feat(pages): à propos, mentions légales et composant SEO`

**Point de contrôle :** toutes les pages sont construites et fonctionnelles avec du contenu de test. Les animations sont en place. Le site est navigable de bout en bout.

---

## Phase 1D — Contenu réel et polish

Objectif : remplacer le contenu de test par les vraies photos, peaufiner les détails.

### Étape 1.14 — Script de synchronisation Cloudinary

- [ ] Créer `scripts/sync-gallery.ts` :
  - Scan le dossier `inbox/` sur Cloudinary via l'API
  - Analyse les métadonnées EXIF (date, GPS, appareil)
  - Télécharge une miniature pour analyse visuelle (orientation, ton, mood)
  - Propose un classement par galerie
  - Déplace les photos dans les bons dossiers Cloudinary
  - Génère les fichiers `.md` avec frontmatter enrichi
  - Supprime de `inbox/` une fois traité
- [ ] Commit : `feat(cloudinary): script de synchronisation inbox → galeries`

### Étape 1.15 — Import des photos réelles

- [ ] Le propriétaire uploade ses ~50 photos dans `inbox/` sur Cloudinary
- [ ] Exécuter `sync-gallery.ts` pour classer et créer les fiches
- [ ] Valider le classement avec le propriétaire
- [ ] Ajuster les `display_order` et `grid_size` pour une grille harmonieuse
- [ ] Vérifier le rendu visuel de chaque galerie
- [ ] Commit : `feat(content): import des photos réelles`

### Étape 1.16 — Optimisation et polish

- [ ] Audit Lighthouse → viser > 90 sur les 4 métriques
- [ ] Vérifier toutes les animations sur mobile (simplifier si besoin)
- [ ] Tester sur les navigateurs principaux (Chrome, Safari, Firefox)
- [ ] Vérifier les protections anti-vol (clic droit, drag, overlay)
- [ ] Vérifier le SEO : sitemap, meta tags, Schema.org, alt texts
- [ ] Vérifier les View Transitions entre toutes les pages
- [ ] Commit : `fix(perf): optimisations Lighthouse et corrections cross-browser`

### Étape 1.17 — Mise en ligne

- [ ] Connecter le domaine définitif `air-ailes.com`
- [ ] Vérifier le HTTPS
- [ ] Soumettre le sitemap à Google Search Console
- [ ] Test final complet (toutes pages, tous appareils)
- [ ] Commit : `chore(deploy): mise en production air-ailes.com`

**Point de contrôle :** le site Air-Ailes est en ligne avec le contenu réel, les animations, le SEO. Phase 1 terminée.

---

## Phase 2 — Boutique tirages (quand le propriétaire le décide)

### Étape 2.1 — Configuration Stripe

- [ ] Créer le compte Stripe
- [ ] Créer `pricing.json` avec les combinaisons format/finition/support et les prix
- [ ] Configurer les variables d'environnement Stripe sur Vercel
- [ ] Commit : `config(boutique): configuration Stripe et catalogue prix`

### Étape 2.2 — Composants boutique

- [ ] Composant sélecteur de tirage (format, finition, support, prix dynamique)
- [ ] Intégration dans la lightbox (bouton "Commander un tirage" → panneau de sélection)
- [ ] API route Astro pour créer une session Stripe Checkout
- [ ] Page de confirmation après paiement
- [ ] Commit : `feat(boutique): sélecteur de tirage et intégration Stripe`

### Étape 2.3 — Notifications

- [ ] Webhook Stripe pour les paiements réussis
- [ ] Email de confirmation au client (Resend)
- [ ] Email de notification au photographe avec détails commande
- [ ] Génération d'URL signée Cloudinary pour l'original HD
- [ ] Commit : `feat(boutique): webhooks Stripe et notifications email`

### Étape 2.4 — Tests et mise en ligne boutique

- [ ] Tests en mode Stripe Test (fausses cartes)
- [ ] Vérifier le parcours complet : galerie → tirage → paiement → emails
- [ ] Passage en mode Stripe Live
- [ ] Commit : `feat(boutique): activation de la boutique en production`

---

## Commandes utiles

```bash
# Développement local
npm run dev

# Build de production
npm run build

# Preview du build
npm run preview

# Synchroniser les nouvelles photos depuis Cloudinary
npx tsx scripts/sync-gallery.ts

# Vérifier le typage
npx tsc --noEmit

# Audit Lighthouse (après build)
npx lighthouse http://localhost:4321 --view
```
