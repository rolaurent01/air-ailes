# CONTEXT.md — Air-Ailes · Site vitrine photographe

## Vision du projet

Site portfolio personnel pour exposer des photos (paysage/nature et portrait/mode), des vidéos courtes (embarquées depuis Instagram/TikTok), et du contenu éditorial (blog/storytelling). Le site doit dégager une identité visuelle forte, professionnelle, et immersive — l'image est reine, l'interface s'efface devant elle.

À terme, le site intègre une boutique légère pour vendre des tirages photo (impressions).

---

## Profil du propriétaire

- **Niveau technique** : non-développeur — toute maintenance et évolution du site se fait via Claude Code
- **Nom du projet** : Air-Ailes
- **Identité visuelle** : logo et nom existants dans /public
- **Univers photo** : paysage/nature + portrait/mode
- **Réseaux** : Instagram et TikTok actifs (vidéos courtes)
- **Volume au lancement** : ~50 photos
- **Budget** : 0€/mois (services gratuits uniquement)

---

## Stack technique

| Brique | Technologie | Rôle | Coût |
|--------|-------------|------|------|
| Framework | **Astro** | Génération statique, routage, composants | Gratuit |
| Hébergement | **Vercel** | Déploiement, CDN, domaine custom | Gratuit (tier hobby) |
| Stockage photos | **Cloudinary** | Stockage + resize + watermark via URL | Gratuit (25 crédits/mois, pas de CB) |
| Vidéos | **Embeds Instagram / TikTok** | Intégration iframe native | Gratuit |
| Blog | **Markdown + Astro Content Collections** | Articles en fichiers .md | Gratuit |
| Paiement (phase 2) | **Stripe Checkout** | Vente de tirages | 0€ fixe, 1.4% + 0.25€/transaction |

UTILISE LES SKILLS DANS .agents


### Pourquoi Astro

- Site majoritairement statique → performances maximales (Core Web Vitals)
- Zéro JavaScript côté client par défaut → chargement ultra rapide des galeries
- Content Collections natif → parfait pour gérer galeries + blog en Markdown
- Islands architecture → composants interactifs (lightbox, panier) uniquement là où c'est nécessaire
- Optimisation d'images intégrée (`astro:assets`)

### Pas de CMS

Le contenu (photos, articles, métadonnées) vit directement dans le repo Git sous forme de fichiers Markdown et d'images. Claude Code gère toutes les modifications. Cela supprime une couche de complexité, un service tiers, et un coût potentiel.

---

## Architecture des fichiers

```
/
├── public/
│   ├── fonts/
│   ├── logo.svg
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Gallery.astro          # Grille de miniatures avec lightbox
│   │   ├── PhotoCard.astro        # Carte individuelle (thumb + titre)
│   │   ├── Lightbox.astro         # Affichage plein écran (island)
│   │   ├── VideoEmbed.astro       # Embed Instagram / TikTok responsive
│   │   ├── Header.astro           # Navigation + logo
│   │   ├── Footer.astro           # Liens réseaux, copyright
│   │   ├── BlogPostCard.astro     # Carte article blog
│   │   ├── SEO.astro              # Meta tags, Open Graph
│   │   └── ProtectedImage.astro   # Image avec protections anti-vol
│   ├── layouts/
│   │   ├── BaseLayout.astro       # Layout principal (head, nav, footer)
│   │   ├── GalleryLayout.astro    # Layout galerie (grille responsive)
│   │   └── BlogLayout.astro       # Layout article (prose optimisée)
│   ├── pages/
│   │   ├── index.astro            # Accueil — hero fullscreen + sélection
│   │   ├── galeries/
│   │   │   ├── index.astro        # Liste des galeries
│   │   │   ├── paysage.astro      # Galerie paysage/nature
│   │   │   └── portrait.astro     # Galerie portrait/mode
│   │   ├── videos.astro           # Page vidéos (embeds IG/TikTok)
│   │   ├── blog/
│   │   │   ├── index.astro        # Liste des articles
│   │   │   └── [...slug].astro    # Article dynamique
│   │   ├── a-propos.astro         # Bio, démarche, contact
│   │   └── mentions-legales.astro # Mentions légales
│   ├── content/
│   │   ├── config.ts              # Schémas des collections
│   │   ├── galeries/
│   │   │   ├── paysage/
│   │   │   │   ├── _gallery.md    # Métadonnées de la galerie
│   │   │   │   ├── photo-001.md   # Métadonnées par photo
│   │   │   │   └── photo-002.md
│   │   │   └── portrait/
│   │   │       ├── _gallery.md
│   │   │       └── photo-001.md
│   │   ├── blog/
│   │   │   ├── mon-premier-article.md
│   │   │   └── behind-the-scenes.md
│   │   └── videos/
│   │       ├── video-001.md       # URL embed + description
│   │       └── video-002.md
│   ├── styles/
│   │   └── global.css             # Variables CSS, typographie, reset
│   └── lib/
│       └── cloudinary.ts           # Helpers URL Cloudinary (tailles, watermark)
├── scripts/
│   ├── sync-gallery.ts            # Compress + upload Cloudinary + crée les fiches .md
│   └── fill-metadata.ts           # Complète les champs vides (alt, mood, location)
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── CONTEXT.md                     # Ce fichier
```

---

## Gestion des photos — Cloudinary

### Principe : 1 upload, toutes les tailles via l'URL

Contrairement à un stockage classique où il faut générer et stocker plusieurs tailles, Cloudinary transforme les images **à la volée** via des paramètres dans l'URL. On uploade une seule fois la photo (compressée pour respecter la limite de 10 Mo du tier gratuit), et le site demande la taille dont il a besoin :

| Usage | Paramètres URL | Résultat |
|-------|---------------|----------|
| Galerie (miniature) | `/w_400,h_300,c_fill,f_auto,q_auto/` | 400px, WebP auto, ~30 Ko |
| Lightbox (plein écran) | `/w_2000,f_auto,q_auto/` | 2000px, WebP auto, ~200 Ko |
| Lightbox + filigrane | `/w_2000,f_auto,q_auto,l_logo,o_30,g_south_east/` | 2000px + logo semi-transparent |
| Impression (phase 2) | Fichier original sur le disque du photographe | 6000px+, qualité maximale |

**Exemple d'URL complète :**
```
https://res.cloudinary.com/air-ailes/image/upload/w_2000,f_auto,q_auto,l_logo,o_30,g_south_east/paysage/coucher-soleil-alps.jpg
```

### Contrainte Cloudinary : limite de 10 Mo par fichier (tier gratuit)

Les photos originales d'un appareil photo font souvent 15-25 Mo. Le script `sync-gallery.ts` compresse automatiquement chaque photo **avant** l'upload :
- Redimensionne à **4000px** (largeur max) via sharp
- Exporte en JPEG qualité **90**
- Résultat : 3-7 Mo par photo → toujours sous la limite de 10 Mo

**4000px à qualité 90 = aucune différence visible sur écran.** Les visiteurs voient au maximum une version 2000px (via l'URL Cloudinary). La compression n'affecte donc jamais la qualité perçue.

**Pour l'impression (phase 2)** : les originaux pleine résolution (6000px+, RAW ou JPEG non compressé) restent sur le disque dur du photographe. Quand un tirage est commandé, le photographe envoie l'original au labo depuis son propre stockage. Cloudinary ne sert que le web.

### Workflow d'ajout de photos

#### Étape 1 — Dépôt des photos (toi)

Tu places tes photos originales dans un dossier local sur ton ordinateur (par exemple `~/Photos/air-ailes/inbox/`). Aucun nommage ni tri requis.

#### Étape 2 — Traitement et upload (Claude Code)

Tu demandes à Claude Code : **"Traite les nouvelles photos"**

Claude Code exécute `sync-gallery.ts` qui, pour chaque photo dans le dossier local inbox/ :

1. **Compresse** : redimensionne à 4000px max, JPEG qualité 90 via sharp (passe sous 10 Mo)
2. **Analyse** : lit les métadonnées EXIF (date, appareil, GPS)
3. **Classe** : te propose un classement par galerie (paysage/portrait)
4. **Uploade** la version compressée sur Cloudinary dans le bon dossier
5. **Renomme** avec un slug propre sur Cloudinary
6. **Crée le fichier `.md`** dans `content/galeries/{galerie}/` avec le frontmatter :
   ```yaml
   ---
   title: "Coucher de soleil sur les Alpes"
   slug: coucher-soleil-alps
   gallery: paysage
   cloudinary_id: paysage/coucher-soleil-alps
   date: 2025-08-15
   location: "Alpes, France"
   camera: "Sony A7IV"
   printable: true
   ---
   ```
6. **Commit + push** → le site se met à jour automatiquement

#### Exemple de session

```
Propriétaire : "J'ai mis 12 nouvelles photos dans ~/Photos/air-ailes/inbox/"
Claude Code  : "J'ai trouvé 12 photos. Compression en cours...
                ✓ Toutes sous 10 Mo. Je te propose :
                - 8 → galerie paysage (détecté via EXIF GPS : montagne)
                - 4 → galerie portrait
                Ça te va ?"
Propriétaire : "Oui, mais la photo IMG_4521 va dans portrait"
Claude Code  : "C'est noté. Upload sur Cloudinary + création des fiches...
                ✓ 12 photos traitées, site mis à jour."
```

#### Ajout en masse au lancement

Pour les ~50 photos initiales, le même processus fonctionne en batch. Tu déposes tout dans ton dossier inbox local, et Claude Code traite le lot complet en une session.

### Stockage des photos — deux emplacements

**Sur Cloudinary** (versions web, compressées < 10 Mo) :
```
air-ailes/                        ← compte Cloudinary
├── paysage/                      ← photos classées (compressées, 4000px)
│   ├── coucher-soleil-alps.jpg
│   └── brume-matinale.jpg
├── portrait/
│   ├── studio-marie.jpg
│   └── regard-lumiere.jpg
└── assets/
    └── logo.png                  ← logo utilisé pour le filigrane via URL
```

**Sur ton disque dur** (originaux pleine résolution) :
```
~/Photos/air-ailes/
├── inbox/                        ← photos en vrac à traiter
├── originaux/                    ← originaux archivés après traitement
│   ├── paysage/
│   │   ├── coucher-soleil-alps-ORIGINAL.jpg
│   │   └── brume-matinale-ORIGINAL.jpg
│   └── portrait/
│       └── studio-marie-ORIGINAL.jpg
```

Le script `sync-gallery.ts` archive automatiquement l'original dans `originaux/` après compression et upload. Tu ne perds jamais la version pleine qualité.

### Tier gratuit Cloudinary

- **25 crédits/mois** (≈ 25 Go de bande passante OU 25 000 transformations)
- **Pas de carte bancaire requise**
- **Limite par fichier : 10 Mo** (géré par la compression automatique du script)
- **Stockage** : inclus dans les crédits, largement suffisant pour ~50 photos compressées
- **CDN intégré** : images servies depuis le serveur le plus proche du visiteur
- Les transformations (resize, watermark) sont mises en cache — une transformation = 1 crédit, les visites suivantes = 0 crédit

---

## Protection des photos

### Couche 1 — Résolution limitée via URL (la plus efficace)

Les visiteurs ne voient jamais l'original. Le site demande systématiquement la version `w_2000` via l'URL Cloudinary — belle sur écran, mais inutilisable pour une impression de qualité au-delà de 17 cm. L'original pleine résolution (6000px+) reste sur le disque dur du photographe, jamais en ligne. Même la version stockée sur Cloudinary est compressée à 4000px — un visiteur qui contournerait toutes les protections n'obtiendrait qu'une version déjà réduite.

### Couche 2 — Filigrane automatique via URL

Le filigrane est appliqué **directement dans l'URL Cloudinary** — zéro script, zéro traitement local :
```
/l_assets:logo,o_30,g_south_east,w_150/
```
- Logo positionné en bas à droite (`g_south_east`)
- Semi-transparent (opacité 30%, `o_30`)
- Taille proportionnelle (`w_150`)
- Appliqué uniquement sur les versions web, pas sur les miniatures

### Couche 3 — Dissuasion technique

Le composant `ProtectedImage.astro` implémente :
- Désactivation du clic droit (`oncontextmenu`)
- Blocage du glisser-déposer (`ondragstart`)
- Images servies en CSS `background-image` plutôt qu'en `<img>` (pas d'URL directe visible)
- Overlay transparent par-dessus l'image (le "enregistrer sous" capture l'overlay)

### Couche 4 — Restriction d'accès Cloudinary

- **Strict transformations** : activé → seules les transformations pré-définies fonctionnent, un visiteur ne peut pas bidouiller l'URL pour demander la version 4000px non watermarkée
- **Les originaux (6000px+) ne sont jamais en ligne** — ils restent sur le disque dur du photographe, inaccessibles depuis le web

---

## Pages et fonctionnalités

### Accueil (`/`)

- Hero fullscreen : une photo vedette qui occupe 100vh avec un léger effet parallax
- Le titre "Air-Ailes" apparaît en animation lettre par lettre, typographie light extra-large
- Scroll indicator minimaliste (trait fin animé ou chevron pulsant)
- Scroll vers une sélection curatée de photos avec reveal cinématique au scroll
- Transition fluide vers les galeries (View Transitions API)

### Galeries (`/galeries/paysage`, `/galeries/portrait`)

- Grille masonry responsive avec miniatures qui se révèlent au scroll (stagger)
- Hover : zoom subtil + élévation + désaturation des photos adjacentes
- Clic sur une miniature → transition FLIP vers lightbox plein écran
- Navigation clavier (← →) et swipe natif mobile dans la lightbox
- Blur-up loading : placeholder flou → image nette (LQIP)
- Métadonnées discrètes : titre, lieu, date apparaissent au hover ou sous la photo en lightbox

### Vidéos (`/videos`)

- Grille d'embeds Instagram / TikTok avec reveal au scroll
- Chaque vidéo a un titre et une courte description
- Responsive : les iframes s'adaptent au viewport
- Les vidéos sont définies dans `content/videos/*.md` avec l'URL embed

### Blog (`/blog`)

- Liste d'articles avec image de couverture pleine largeur, titre en overlay
- Textes qui glissent depuis le bas au scroll
- Articles rédigés en Markdown avec typographie premium (prose optimisée, 65ch max)
- Barre de progression de lecture en haut de page
- Partage social (Open Graph meta tags)

### À propos (`/a-propos`)

- Photo de l'auteur avec effet parallax léger
- Bio et démarche artistique, texte qui apparaît progressivement au scroll
- Liens vers les réseaux sociaux (icônes minimalistes)
- Formulaire de contact simple (mailto ou service gratuit type Formspree)

---

## Phase 2 — Boutique tirages

### Activation

La boutique est ajoutée quand le propriétaire est prêt. Elle se greffe sur l'existant sans refonte.

### Fonctionnement

1. Sur chaque photo en lightbox, un bouton "Commander un tirage" apparaît
2. L'utilisateur choisit :
   - **Format** : 30×20cm, 60×40cm, 90×60cm
   - **Finition** : mat, brillant, fine art
   - **Support** : papier photo, dibond, toile
3. Chaque combinaison a un prix défini dans un fichier de configuration (`pricing.json`)
4. Clic sur "Commander" → redirection vers Stripe Checkout (session server-side)
5. Après paiement validé :
   - Email de confirmation au client
   - Email de notification au photographe avec détails de la commande
   - La version originale HD est rendue disponible pour impression

### Stack boutique

| Brique | Technologie |
|--------|-------------|
| Paiement | Stripe Checkout (session) |
| Backend commandes | Vercel Serverless Functions (API route Astro) |
| Notifications | Stripe webhooks → email (Resend, gratuit 100/jour) |
| Catalogue | `pricing.json` dans le repo |
| Suivi commandes | Dashboard Stripe (gratuit) |

### Évolution future

- Intégration API labo d'impression pour automatiser la production
- Suivi de livraison
- Galeries privées pour clients (événementiel)

---

## Design et direction artistique

### ⚠️ Skills Claude Code

Claude Code dispose de deux skills spécialisés fournis par le propriétaire :
- **Skill frontend** : bonnes pratiques design, composants, animations, UX
- **Skill marketing** : copywriting, conversion, storytelling, SEO

Ces skills DOIVENT être consultés et appliqués pour chaque modification touchant au design ou au contenu textuel du site.

### Vision : ultra-moderne, épuré, classe

Le site doit ressembler à une **galerie d'art numérique haut de gamme**, pas à un portfolio de photographe classique. Chaque pixel est intentionnel. Le visiteur doit ressentir une expérience immersive dès la première seconde — le genre de site qu'on envoie à quelqu'un en disant "regarde comme c'est beau".

**Références d'ambiance** : Apple.com (sobriété, animations au scroll), les sites de maisons de luxe (Bottega Veneta, Aesop), les galeries d'art contemporain en ligne.

### Principes fondamentaux

- **L'image est sacrée** : aucun élément d'interface ne doit jamais concurrencer la photo. Le design est invisible — il guide l'œil vers l'image et disparaît.
- **Fond noir profond** : les photos flottent dans un espace sombre. Le noir n'est pas une couleur par défaut, c'est un choix artistique — il donne de la profondeur et magnifie les couleurs.
- **Espace négatif radical** : beaucoup d'espace vide. Les marges sont généreuses. Rien n'est entassé. Chaque photo respire.
- **Moins = plus** : si un élément n'est pas indispensable, il disparaît. Zéro décoration, zéro fioriture.
- **Chaque interaction est une sensation** : le site doit donner l'impression d'être vivant et réactif, jamais statique ou figé.

### Animations — le cœur de l'expérience

Les animations ne sont pas décoratives — elles créent l'émotion et le rythme de navigation.

#### Animations sur les photos

- **Reveal au scroll** : les photos apparaissent avec un effet de dévoilement (clip-path ou mask qui s'ouvre) quand elles entrent dans le viewport — pas un simple fade-in, un vrai reveal cinématique
- **Parallax subtil** : les photos bougent légèrement plus lentement que le scroll, créant une sensation de profondeur
- **Hover magnétique** : au survol d'une miniature, léger zoom (scale 1.03) + élévation (ombre douce) + désaturation partielle des photos adjacentes — le regard est guidé
- **Transition lightbox** : la miniature s'agrandit en plein écran avec une animation fluide (shared element transition / FLIP), pas un simple pop-up
- **Chargement progressif** : les images apparaissent d'abord en version floue basse résolution (blur-up / LQIP) puis deviennent nettes — zéro flash blanc

#### Animations sur les textes

- **Titres qui se composent** : les titres apparaissent lettre par lettre ou mot par mot au scroll, avec un léger décalage entre chaque (stagger animation)
- **Textes qui glissent** : les paragraphes entrent par le bas avec un fade + translate, déclenchés au scroll (Intersection Observer)
- **Compteurs animés** (si stats affichées) : les chiffres s'incrémentent progressivement
- **Curseur custom** : sur desktop, curseur personnalisé qui change de forme selon le contexte (cercle qui grossit au survol des photos, flèches dans la lightbox)

#### Animations de navigation

- **Transitions entre pages** : les pages ne "chargent" pas — elles transitionnent (View Transitions API d'Astro). La page sortante fade out tandis que la nouvelle slide in.
- **Menu** : le menu s'ouvre avec une animation fluide (sur mobile : plein écran qui descend du haut avec les liens qui apparaissent en cascade)
- **Scroll smooth** : tout le scroll est fluide et décéléré (Lenis ou similaire)
- **Progress bar** : barre fine en haut de page qui montre la progression du scroll (blog uniquement)

#### Règles d'animation

- **Performance** : animations uniquement via `transform` et `opacity` (GPU-accelerated). Jamais d'animation sur `width`, `height`, `margin`, `top/left`.
- **Durée** : entre 400ms et 800ms pour les reveals, 200-300ms pour les hovers. Jamais plus d'1s.
- **Easing** : `cubic-bezier(0.16, 1, 0.3, 1)` pour les entrées (ease-out exponentiel). Jamais de `linear` ni de `ease` par défaut.
- **Respect du motion** : toutes les animations sont désactivées si `prefers-reduced-motion: reduce` est actif.
- **Pas de surcharge** : si tout bouge en même temps, rien ne ressort. Une animation à la fois dans le viewport.

### Librairies d'animation recommandées

- **GSAP** (GreenSock) : animations complexes, timelines, ScrollTrigger
- **Lenis** : smooth scroll performant
- **View Transitions API** (natif Astro) : transitions entre pages
- **Intersection Observer** (natif) : déclenchement au scroll

### Palette

- Fond principal : noir profond (`#050505`)
- Fond secondaire : anthracite (`#111111`)
- Texte principal : blanc cassé (`#F0EDE8`)
- Texte secondaire : gris noble (`#7A7A72`)
- Accent : à définir selon le logo existant
- Aucune autre couleur — le site est monochrome, les photos apportent la couleur

### Typographie

- **Un seul typeface** pour tout le site — sans-serif géométrique haut de gamme (exemples : Satoshi, General Sans, Cabinet Grotesk, ou Outfit)
- Titres : extra-light ou light en grande taille (48-72px desktop), espacement large (letter-spacing: 0.05-0.1em)
- Sous-titres : regular, taille moyenne, uppercase avec letter-spacing élevé
- Corps : regular 16-18px, line-height 1.7-1.8, max-width 65ch pour le blog
- **Pas de gras visible** — le contraste vient de la taille et de la graisse light/regular, jamais du bold

### Navigation

- Fixe en haut, quasi-invisible : logo à gauche, 3-4 liens à droite, fond transparent qui devient semi-opaque au scroll
- Sur mobile : icône hamburger minimaliste (deux traits fins, pas trois), menu plein écran noir avec liens centrés qui apparaissent en cascade
- **Breadcrumb et éléments utilitaires** : masqués par défaut, apparaissent subtilement au hover ou au scroll
- Le logo est un lien vers l'accueil — pas de lien "Accueil" dans le menu

### Responsive

- Mobile-first
- Galerie : 1 colonne mobile → 2 tablette → 3-4 desktop (masonry)
- Lightbox : plein écran sur tous les appareils, swipe natif sur mobile
- Navigation : hamburger plein écran sur mobile, nav horizontale ultra-discrète sur desktop
- Les animations sont simplifiées sur mobile (pas de parallax, reveals plus simples) pour la performance
- Touch-friendly : zones de tap larges, pas de hover-dependent interactions sur mobile

---

## SEO et performance

### SEO

- Balises meta dynamiques par page (titre, description, Open Graph)
- Images avec attributs `alt` descriptifs (depuis le frontmatter)
- Sitemap XML automatique (plugin Astro)
- Schema.org pour les photos (`ImageObject`) et articles (`BlogPosting`)

### Performance

- Score Lighthouse visé : > 90 sur les 4 métriques (les animations GSAP ajoutent du JS, mais tout est lazy-loaded)
- Images en WebP avec `loading="lazy"` + blur-up placeholder (LQIP)
- Astro génère du HTML statique → TTFB minimal
- CDN Vercel + CDN Cloudinary pour les images
- JavaScript chargé uniquement sur les islands interactifs (lightbox, animations, panier phase 2)
- GSAP et Lenis chargés en async, non bloquants
- Animations GPU-only (`transform`, `opacity`) → 60fps constant

---

## Dépôt de code — GitHub

### Repository

- **Plateforme** : GitHub
- **Nom du repo** : `air-ailes` (privé)
- **URL** : `github.com/{username}/air-ailes`
- **Branche principale** : `main` (déploiement auto à chaque push)

### Ce que contient le repo

```
air-ailes/
├── src/                    ← Code source du site (composants, pages, layouts)
├── public/                 ← Assets statiques (logo, favicon, fonts)
├── scripts/                ← Scripts d'automatisation (process-inbox, watermark)
├── content/                ← Galeries, blog, vidéos (fichiers Markdown)
├── astro.config.mjs        ← Configuration Astro
├── package.json            ← Dépendances Node.js
├── tsconfig.json           ← Configuration TypeScript
├── .env.example            ← Template des variables d'environnement
├── .gitignore              ← Fichiers exclus du repo
├── README.md               ← Documentation rapide
└── CONTEXT.md              ← Ce fichier (spec complète du projet)
```

### Ce que le repo NE contient PAS

- Les photos elles-mêmes (stockées sur Cloudinary, pas dans Git)
- Les clés API et secrets (dans les variables d'environnement Vercel)
- Le dossier `node_modules/` (régénéré via `npm install`)

### Comment Claude Code travaille

1. Clone le repo localement
2. Fait les modifications (code, contenu Markdown, config)
3. `git add . && git commit -m "description" && git push`
4. Vercel détecte le push → build Astro → déploie automatiquement (~30 secondes)

### Setup initial (une seule fois)

```bash
# 1. Créer le repo GitHub
gh repo create air-ailes --private

# 2. Initialiser le projet Astro
npm create astro@latest air-ailes

# 3. Créer un compte Cloudinary (gratuit, sans CB) → cloudinary.com
# 4. Connecter Vercel au repo (via dashboard Vercel)
# 5. Configurer les variables d'environnement sur Vercel
# 6. Connecter le domaine custom air-ailes.com
```

---

## Déploiement

### Pipeline

```
Claude Code modifie le code
        ↓
   git push main
        ↓
  Vercel détecte le push
        ↓
  Build Astro (~30 sec)
        ↓
  Site en ligne sur air-ailes.com
```

### Environnements Vercel

| Environnement | Branche | URL |
|---------------|---------|-----|
| Production | `main` | `air-ailes.com` |
| Preview | toute autre branche / PR | `air-ailes-xxx.vercel.app` |

### Domaine

- Domaine custom `air-ailes.com` connecté sur Vercel (configuration DNS)
- Les images sont servies directement depuis `res.cloudinary.com/air-ailes/`

### Variables d'environnement (Vercel)

```
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
STRIPE_SECRET_KEY=          # Phase 2
STRIPE_WEBHOOK_SECRET=      # Phase 2
RESEND_API_KEY=             # Phase 2
CONTACT_EMAIL=              # Email du photographe
```

---

## Commandes Claude Code fréquentes

Exemples de demandes que le propriétaire fera à Claude Code :

- "J'ai mis des nouvelles photos dans inbox, traite-les"
- "Mets les 5 dernières photos dans la galerie portrait"
- "Crée un nouvel article de blog avec ce texte et cette photo de couverture"
- "Ajoute cette vidéo Instagram à la page vidéos"
- "Change la photo hero de la page d'accueil"
- "Modifie le texte de ma page à propos"
- "Crée une nouvelle galerie 'Urbain'"
- "Active la boutique tirages" (phase 2)
- "Modifie le prix du tirage 60×40 mat"
- "Supprime la photo coucher-soleil-002 de la galerie paysage"

---

## Contraintes et rappels

- **Budget : 0€/mois** — aucun service payant sauf commission Stripe sur les ventes
- **Pas de carte bancaire** — tous les services utilisés (Vercel, Cloudinary, GitHub) ont un tier gratuit sans CB
- **Pas de CMS** — tout passe par Claude Code + fichiers dans le repo
- **Pas de base de données** — les données vivent dans les fichiers Markdown et JSON
- **Pas de backend lourd** — uniquement des API routes Astro (serverless) pour Stripe
- **Photos sur Cloudinary** — jamais dans le repo Git, resize et watermark via URL
- **Logo et nom existants** — à intégrer dès le setup initial
- **Mobile-first** — la majorité du trafic viendra probablement d'Instagram/TikTok