---
title: "SEO des images : rendre vos photos trouvables sur Google"
slug: seo-images-photo
date: 2026-02-19
excerpt: "Noms de fichiers, texte alternatif, légendes, données structurées et performance : les bonnes pratiques pour référencer vos photos sur le web."
cover_cloudinary_id: paysage/brume-matinale
tags: ["SEO", "web", "professionnel"]
published: true
---

Google Images représente plus de 20 % du trafic de recherche mondial. Pour un photographe, c'est une source de visibilité considérable — à condition que vos images soient correctement optimisées. Le référencement des images ne demande pas de compétences techniques avancées, mais il exige de la rigueur et de la méthode. Chaque détail compte : le nom du fichier, le texte alternatif, le poids de l'image, les données structurées.

Ce guide couvre les bonnes pratiques essentielles pour rendre vos photos visibles, accessibles et performantes sur le web.

<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" style="max-width:600px;margin:2rem auto;display:block;" role="img" aria-label="Comparaison SEO image : mauvais exemple avec IMG_4523.jpg sans alt, bon exemple avec coucher-soleil-alpes.jpg et alt descriptif">
  <defs>
    <style>
      .comp-title { font-family: system-ui, sans-serif; font-size: 14px; fill: #F0EDE8; font-weight: 600; text-anchor: middle; }
      .comp-label { font-family: system-ui, sans-serif; font-size: 11px; fill: #7A7A72; text-anchor: middle; }
      .comp-code { font-family: ui-monospace, monospace; font-size: 10px; fill: #7A7A72; text-anchor: middle; }
      .comp-box { stroke: #F0EDE8; stroke-width: 1.5; fill: none; rx: 4; }
      .comp-bad { stroke: #F0EDE8; stroke-width: 1.5; fill: none; rx: 4; stroke-dasharray: 5,3; }
      .cross-line { stroke: #7A7A72; stroke-width: 2; }
      .check-line { stroke: #F0EDE8; stroke-width: 2; }
      .img-placeholder { stroke: #7A7A72; stroke-width: 1; fill: none; }
    </style>
  </defs>

  <!-- Bad example (left) -->
  <text x="150" y="25" class="comp-title">Mauvais</text>

  <!-- Image placeholder -->
  <rect x="75" y="40" width="150" height="100" class="comp-bad"/>
  <line x1="110" y1="100" x2="125" y2="80" class="img-placeholder"/>
  <line x1="125" y1="80" x2="140" y2="95" class="img-placeholder"/>
  <line x1="140" y1="95" x2="160" y2="70" class="img-placeholder"/>
  <line x1="160" y1="70" x2="190" y2="100" class="img-placeholder"/>
  <circle cx="120" cy="65" r="6" class="img-placeholder"/>

  <!-- Filename bad -->
  <text x="150" y="162" class="comp-code">IMG_4523.jpg</text>
  <text x="150" y="178" class="comp-label">Nom de fichier non descriptif</text>

  <!-- Alt bad -->
  <rect x="85" y="190" width="130" height="28" class="comp-bad"/>
  <text x="150" y="208" class="comp-code">alt=""</text>
  <text x="150" y="232" class="comp-label">Alt vide</text>

  <!-- Cross mark -->
  <line x1="140" y1="250" x2="160" y2="270" class="cross-line"/>
  <line x1="160" y1="250" x2="140" y2="270" class="cross-line"/>

  <!-- Divider -->
  <line x1="300" y1="15" x2="300" y2="285" stroke="#7A7A72" stroke-width="0.5" stroke-dasharray="4,4"/>

  <!-- Good example (right) -->
  <text x="450" y="25" class="comp-title">Bon</text>

  <!-- Image placeholder -->
  <rect x="375" y="40" width="150" height="100" class="comp-box"/>
  <line x1="410" y1="100" x2="425" y2="80" class="img-placeholder" style="stroke:#F0EDE8;"/>
  <line x1="425" y1="80" x2="440" y2="95" class="img-placeholder" style="stroke:#F0EDE8;"/>
  <line x1="440" y1="95" x2="460" y2="70" class="img-placeholder" style="stroke:#F0EDE8;"/>
  <line x1="460" y1="70" x2="490" y2="100" class="img-placeholder" style="stroke:#F0EDE8;"/>
  <circle cx="420" cy="65" r="6" class="img-placeholder" style="stroke:#F0EDE8;"/>

  <!-- Filename good -->
  <text x="450" y="162" class="comp-code">coucher-soleil-alpes.jpg</text>
  <text x="450" y="178" class="comp-label">Nom descriptif avec mots-clés</text>

  <!-- Alt good -->
  <rect x="360" y="190" width="180" height="28" class="comp-box"/>
  <text x="450" y="208" class="comp-code">alt="Coucher de soleil sur les Alpes"</text>
  <text x="450" y="232" class="comp-label">Alt descriptif et pertinent</text>

  <!-- Check mark -->
  <polyline points="440,255 448,265 465,248" class="check-line" fill="none"/>
</svg>

## Alt text et légendes : accessibilité + SEO

Le texte alternatif (attribut `alt`) est le premier levier de référencement pour vos images. Il remplit deux fonctions essentielles : il rend vos photos accessibles aux personnes utilisant un lecteur d'écran, et il indique à Google le contenu de l'image.

**Les règles d'un bon alt text :**

- **Décrivez ce que montre l'image**, pas ce que vous voulez qu'elle signifie. « Portrait en noir et blanc d'une femme regardant par une fenêtre » vaut mieux que « La solitude au quotidien ».
- **Intégrez naturellement vos mots-clés**, sans forcer. Si votre page parle de photographie de portrait en lumière naturelle, un alt comme « Portrait femme lumière naturelle fenêtre » est pertinent. « Portrait photo photographe professionnel meilleur photographe portrait France » est du keyword stuffing que Google pénalise.
- **Restez concis.** Entre 5 et 15 mots. Un alt text de trois lignes est contreproductif — les lecteurs d'écran le liront intégralement, et Google n'accorde pas plus de poids à un texte long.
- **Ne commencez jamais par « Image de » ou « Photo de ».** Le navigateur sait déjà que c'est une image. « Brume matinale sur les crêtes des Alpes » suffit.

**Les légendes** (l'élément `<figcaption>`) sont un complément précieux. Contrairement au alt text qui est invisible pour l'utilisateur voyant, la légende est visible sous l'image. Elle permet d'ajouter du contexte, une date, un lieu, une anecdote. Google indexe les légendes et les utilise pour comprendre le contexte de la page.

**Le nom du fichier** est souvent négligé. Avant même de télécharger vos images, renommez-les. `IMG_4523.jpg` n'apporte aucune information. `coucher-soleil-alpes-automne.jpg` en apporte beaucoup. Utilisez des tirets (pas des underscores), des mots en minuscules, sans accents ni caractères spéciaux.

Un bon réflexe : traitez le trio nom de fichier + alt text + légende comme trois niveaux de description complémentaires. Le nom de fichier donne le sujet, le alt text décrit l'image, la légende ajoute le contexte narratif.

## Performance : formats, tailles, responsive

Une image magnifique qui met 8 secondes à charger ne sera jamais bien référencée. Google intègre les Core Web Vitals dans son algorithme de classement, et le poids des images est le premier facteur de ralentissement d'un site.

**Le format.** Le JPEG reste un standard fiable pour les photographies. Le WebP offre une compression 25 à 35 % supérieure à qualité visuelle équivalente, et il est supporté par tous les navigateurs modernes. L'AVIF pousse la compression encore plus loin, mais son support est moins universel. La stratégie recommandée : servir du WebP par défaut avec un fallback JPEG.

Si vous utilisez un service comme Cloudinary, la conversion de format peut être automatisée. L'image est stockée une seule fois, et le bon format est servi en fonction du navigateur du visiteur.

**La taille.** Ne servez jamais une image de 4000 px de large pour un affichage de 800 px. Utilisez l'attribut `srcset` pour proposer plusieurs tailles, et laissez le navigateur choisir la plus appropriée. En pratique, trois variantes suffisent pour la plupart des usages : 400 px, 800 px et 1200 px de large.

**Le lazy loading.** Les images situées en dessous de la ligne de flottaison n'ont pas besoin d'être chargées immédiatement. L'attribut `loading="lazy"` retarde leur chargement jusqu'à ce que l'utilisateur scrolle vers elles. Résultat : un affichage initial plus rapide et un meilleur score de performance.

**Les dimensions explicites.** Déclarez toujours les attributs `width` et `height` sur vos balises `<img>`. Cela permet au navigateur de réserver l'espace avant le chargement de l'image, évitant les sauts de mise en page (Cumulative Layout Shift) qui dégradent l'expérience utilisateur et le score SEO.

## Données structurées pour les images

Les données structurées (schema.org) permettent d'enrichir la façon dont Google affiche vos images dans les résultats de recherche. Pour un photographe, deux types de balisage sont particulièrement utiles.

**ImageObject.** Ce balisage décrit une image individuelle : son auteur, sa légende, sa date de création, sa licence. Il permet à Google d'afficher des informations contextuelles dans Google Images et d'associer l'image à son créateur.

Voici les propriétés essentielles à renseigner :

- `name` : le titre de l'image
- `description` : une description courte
- `contentUrl` : l'URL de l'image en pleine résolution
- `author` : votre nom et l'URL de votre site
- `datePublished` : la date de publication
- `license` : l'URL de votre licence (tous droits réservés, Creative Commons, etc.)
- `acquireLicensePage` : l'URL de votre page de contact pour les demandes de licence

**Article avec images.** Si vos photos sont intégrées dans un article de blog, le balisage `Article` avec des propriétés `image` correctement renseignées améliore l'affichage dans les résultats de recherche. Google peut alors utiliser vos images comme vignettes pour l'article. Pour approfondir le balisage Article et les bonnes pratiques de [titres SEO](/blog/titres-seo-contenu-utile), un article dédié couvre le sujet en détail.

**Le fil d'Ariane et les métadonnées Open Graph** complètent le dispositif. Les balises Open Graph (`og:image`, `og:image:alt`) contrôlent l'apparence de vos pages lorsqu'elles sont partagées sur les réseaux sociaux. Une image bien choisie et correctement balisée multiplie les clics sur vos partages.

## Checklist publication

Avant de publier une page contenant des photographies, passez en revue cette liste.

**Fichiers images :**
- Les fichiers sont nommés avec des mots descriptifs séparés par des tirets
- Le format est WebP (avec fallback JPEG si nécessaire)
- Le poids de chaque image est inférieur à 200 Ko pour un affichage web standard
- Plusieurs tailles sont disponibles via `srcset` (400, 800, 1200 px)

**Balises HTML :**
- Chaque image a un attribut `alt` descriptif et concis (5-15 mots)
- Les dimensions `width` et `height` sont déclarées
- L'attribut `loading="lazy"` est présent sur les images sous la ligne de flottaison
- Les images sont encapsulées dans `<figure>` avec un `<figcaption>` pertinent

**Données structurées :**
- Le balisage `ImageObject` est en place pour les photos principales
- Les propriétés `author`, `license` et `datePublished` sont renseignées
- Le balisage `Article` inclut une propriété `image` valide
- Les balises Open Graph (`og:image`, `og:image:alt`) sont correctes

**Performance :**
- Le score PageSpeed Insights est supérieur à 90 sur mobile
- Le Largest Contentful Paint (LCP) est inférieur à 2,5 secondes
- Le Cumulative Layout Shift (CLS) est inférieur à 0,1
- Les images sont servies via un CDN (Cloudinary, imgix, ou équivalent)

**Accessibilité :**
- Les textes alternatifs décrivent le contenu visuel de manière utile
- Les contrastes entre légendes et arrière-plan sont suffisants
- La navigation au clavier permet d'accéder aux images et à leurs légendes

Le SEO des images n'est pas un exercice ponctuel. C'est une discipline intégrée à votre flux de publication. Chaque image que vous publiez est une opportunité de visibilité — ne la gâchez pas par un alt text vide ou un fichier de 5 Mo. Un [portfolio bien construit](/blog/portfolio-photo) applique naturellement ces principes.

## Pour aller plus loin

- [Construire un portfolio photo qui montre votre maîtrise](/blog/portfolio-photo) — appliquer les bonnes pratiques SEO à l'ensemble de votre vitrine.
- [Titres SEO et contenu utile : la méthode pour mieux ranker](/blog/titres-seo-contenu-utile) — structurer vos articles pour maximiser leur visibilité.
