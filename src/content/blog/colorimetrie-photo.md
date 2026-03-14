---
title: "Colorimétrie photo : sRGB, Adobe RGB et profils ICC"
slug: colorimetrie-photo
date: 2026-02-05
excerpt: "Comprenez les espaces couleur et les profils ICC sans vous perdre. Choisissez sRGB ou Adobe RGB selon le web ou l'impression, avec une méthode claire."
cover_cloudinary_id: paysage/dsc01861
tags: ["post-production", "couleur", "avancé"]
published: true
---

La gestion des couleurs est le sujet que la plupart des photographes évitent. Trop technique, trop abstrait, trop de termes barbares. Résultat : des images magnifiques sur l'écran qui deviennent ternes à l'impression, ou des couleurs décalées sur les réseaux sociaux sans qu'on comprenne pourquoi.

Pourtant, il suffit de comprendre trois concepts — espace couleur, profil ICC, conversion — pour maîtriser la chaîne de bout en bout. C'est ce que je vais vous expliquer ici, sans formules mathématiques, avec des choix concrets que vous pourrez appliquer dès votre prochain export.

<svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" style="max-width:600px;margin:2rem auto;display:block;" role="img" aria-label="Diagramme des espaces couleur sRGB et Adobe RGB">
  <defs>
    <linearGradient id="gamutGrad" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#4a6670;stop-opacity:0.3"/>
      <stop offset="50%" style="stop-color:#7a6a50;stop-opacity:0.2"/>
      <stop offset="100%" style="stop-color:#6a4a4a;stop-opacity:0.3"/>
    </linearGradient>
    <linearGradient id="srgbGrad" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#4a6670;stop-opacity:0.15"/>
      <stop offset="50%" style="stop-color:#7a6a50;stop-opacity:0.1"/>
      <stop offset="100%" style="stop-color:#6a4a4a;stop-opacity:0.15"/>
    </linearGradient>
  </defs>
  <!-- Adobe RGB outer shape -->
  <path d="M250 40 L460 320 L40 320 Z" fill="url(#gamutGrad)" stroke="#F0EDE8" stroke-width="1.5" stroke-linejoin="round" rx="8"/>
  <!-- sRGB inner shape -->
  <path d="M250 100 L400 310 L100 310 Z" fill="url(#srgbGrad)" stroke="#F0EDE8" stroke-width="1.5" stroke-dasharray="6 3" stroke-linejoin="round"/>
  <!-- Labels -->
  <text x="250" y="72" text-anchor="middle" fill="#F0EDE8" font-family="system-ui, sans-serif" font-size="13" font-weight="600">Adobe RGB</text>
  <text x="250" y="290" text-anchor="middle" fill="#7A7A72" font-family="system-ui, sans-serif" font-size="13" font-weight="600">sRGB</text>
  <!-- "Votre photo" point -->
  <circle cx="310" cy="230" r="5" fill="#F0EDE8" opacity="0.9"/>
  <line x1="318" y1="226" x2="370" y2="206" stroke="#7A7A72" stroke-width="1" stroke-dasharray="3 2"/>
  <text x="374" y="210" fill="#7A7A72" font-family="system-ui, sans-serif" font-size="11" font-style="italic">Votre photo</text>
  <!-- Zone difference annotation -->
  <path d="M140 160 L120 140" stroke="#7A7A72" stroke-width="0.8"/>
  <text x="50" y="136" fill="#7A7A72" font-family="system-ui, sans-serif" font-size="10">Couleurs hors sRGB</text>
  <text x="50" y="148" fill="#7A7A72" font-family="system-ui, sans-serif" font-size="10">(visibles uniquement en Adobe RGB)</text>
</svg>

## Espaces couleur vs profils ICC

Commençons par la distinction fondamentale que beaucoup confondent.

Un **espace couleur** est un volume de couleurs défini mathématiquement. Imaginez une boîte : toutes les couleurs à l'intérieur existent dans cet espace, celles à l'extérieur n'y sont pas représentables. sRGB est une petite boîte. Adobe RGB est une boîte plus grande. ProPhoto RGB est une boîte encore plus grande.

Un **profil ICC** est un fichier qui décrit comment un appareil précis (écran, imprimante, scanner) reproduit les couleurs. Votre écran a un profil ICC. Votre imprimante aussi. Chaque combinaison papier/encre a le sien. Le profil ICC est la traduction entre les chiffres du fichier image et les couleurs réelles que vous voyez ou que l'imprimante produit.

La relation entre les deux : un espace couleur est une référence théorique. Un profil ICC est une réalité physique. Quand vous exportez en « sRGB », vous dites : « les couleurs de cette image sont définies dans l'espace sRGB ». Quand vous calibrez votre écran, le logiciel crée un profil ICC qui décrit les capacités réelles de votre dalle.

### Pourquoi ça compte en pratique

Si votre image contient des couleurs qui existent dans Adobe RGB mais pas dans sRGB, et que vous exportez en sRGB, ces couleurs seront « compressées » ou « écrêtées » pour rentrer dans la petite boîte. Les verts saturés et les cyans profonds sont les premières victimes. À l'inverse, si vous exportez en Adobe RGB pour le web, la plupart des navigateurs interpréteront les couleurs comme du sRGB, et votre image paraîtra désaturée.

C'est exactement pour ça qu'il faut choisir le bon espace au bon moment.

## sRGB : le standard web

Le sRGB a été créé en 1996 par HP et Microsoft pour standardiser l'affichage couleur sur écran. Trente ans plus tard, c'est toujours le standard universel du web.

**Pourquoi sRGB pour le web :**

- 99 % des écrans grand public affichent le sRGB (ou très proche)
- Tous les navigateurs interprètent le sRGB nativement
- Les réseaux sociaux (Instagram, Facebook, etc.) convertissent tout en sRGB à l'upload
- Les labos d'impression photo grand public travaillent en sRGB

Le sRGB couvre environ 35 % des couleurs visibles par l'oeil humain. Ça semble peu, mais pour l'immense majorité des photos — portraits, paysages, reportage, rue — c'est largement suffisant. Vos images ne « manquent » pas de couleurs en sRGB, sauf dans des cas très spécifiques.

**Les limites du sRGB :**

Le sRGB est étroit dans les verts saturés, les cyans et les bleus profonds. Si vous photographiez des forêts tropicales, des oiseaux exotiques ou des tissus aux couleurs vives, certaines nuances seront légèrement compressées lors de la conversion. Dans la pratique, cette perte est rarement visible à l'oeil sur un écran sRGB standard — c'est un paradoxe, mais l'écran qui affiche l'image ne peut de toute façon pas montrer ces couleurs manquantes.

## Adobe RGB : quand et pourquoi

L'espace Adobe RGB couvre environ 50 % des couleurs visibles, soit significativement plus que le sRGB, surtout dans les verts et les cyans.

**Quand utiliser Adobe RGB :**

- Vous préparez un tirage fine art sur une imprimante à large gamut (Epson, Canon imagePROGRAF)
- Le labo d'impression spécifie explicitement qu'il accepte l'Adobe RGB
- Vous travaillez pour un magazine imprimé en offset haute qualité
- Vous souhaitez conserver le maximum de latitude pour un post-traitement poussé

**Quand ne PAS utiliser Adobe RGB :**

- Pour toute diffusion web ou réseaux sociaux
- Pour un labo en ligne grand public (type CEWE, Photobox)
- Si votre écran n'est pas calibré et ne couvre pas au moins 90 % de l'Adobe RGB
- Si vous n'êtes pas sûr — dans le doute, restez en sRGB

<svg viewBox="0 0 500 220" xmlns="http://www.w3.org/2000/svg" style="max-width:600px;margin:2rem auto;display:block;" role="img" aria-label="Table de décision : quel espace couleur choisir">
  <style>
    .table-head { fill: #F0EDE8; font-family: system-ui, sans-serif; font-size: 13px; font-weight: 600; }
    .table-cell { fill: #7A7A72; font-family: system-ui, sans-serif; font-size: 12px; }
    .table-line { stroke: #F0EDE8; stroke-width: 0.8; opacity: 0.4; }
    .table-accent { fill: #F0EDE8; font-family: system-ui, sans-serif; font-size: 12px; font-weight: 500; }
  </style>
  <!-- Header row -->
  <line x1="20" y1="38" x2="480" y2="38" class="table-line"/>
  <text x="140" y="28" text-anchor="middle" class="table-head">Usage</text>
  <text x="350" y="28" text-anchor="middle" class="table-head">Espace couleur</text>
  <!-- Row 1 -->
  <line x1="20" y1="75" x2="480" y2="75" class="table-line"/>
  <text x="40" y="62" class="table-cell">Web / réseaux sociaux</text>
  <text x="350" y="62" text-anchor="middle" class="table-accent">sRGB</text>
  <!-- Row 2 -->
  <line x1="20" y1="112" x2="480" y2="112" class="table-line"/>
  <text x="40" y="99" class="table-cell">Impression labo grand public</text>
  <text x="350" y="99" text-anchor="middle" class="table-accent">sRGB</text>
  <!-- Row 3 -->
  <line x1="20" y1="149" x2="480" y2="149" class="table-line"/>
  <text x="40" y="136" class="table-cell">Impression fine art / pro</text>
  <text x="350" y="136" text-anchor="middle" class="table-accent">Adobe RGB + profil ICC</text>
  <!-- Row 4 -->
  <line x1="20" y1="186" x2="480" y2="186" class="table-line"/>
  <text x="40" y="173" class="table-cell">Archivage / post-traitement futur</text>
  <text x="350" y="173" text-anchor="middle" class="table-accent">ProPhoto RGB (interne)</text>
  <!-- Vertical separator -->
  <line x1="250" y1="12" x2="250" y2="186" class="table-line"/>
</svg>

### Le piège de l'Adobe RGB mal géré

Voici le scénario classique : un photographe lit qu'Adobe RGB « a plus de couleurs » et configure son boîtier et Lightroom en Adobe RGB. Il exporte ses images pour le web sans conversion. Résultat : les couleurs sont éteintes sur les écrans de tout le monde. Le navigateur interprète les valeurs Adobe RGB comme du sRGB, et la correspondance est fausse.

La règle d'or : **exportez toujours dans l'espace couleur de la destination finale**. Web = sRGB. Impression fine art = ce que le labo demande. En interne, dans Lightroom, travaillez en ProPhoto RGB (c'est le réglage par défaut et il ne faut surtout pas y toucher).

## Méthode simple pour éviter les mauvaises surprises

Voici la méthode que je recommande à mes élèves. Elle couvre 95 % des situations :

### 1. Dans le boîtier

Configurez l'espace couleur sur sRGB. « Mais je perds des couleurs ! » Non. Si vous shootez en RAW, l'espace couleur du boîtier n'affecte que l'aperçu JPEG intégré et l'affichage sur l'écran arrière. Le fichier RAW contient toutes les couleurs captées par le capteur, indépendamment de ce réglage.

Si vous shootez en JPEG uniquement, alors oui, le choix compte. Dans ce cas, restez en sRGB sauf si vous maîtrisez parfaitement la chaîne Adobe RGB jusqu'à la sortie.

### 2. Dans Lightroom

Ne touchez à rien. Lightroom travaille en interne dans un espace très large (ProPhoto RGB, voire Melissa RGB dans les dernières versions). Tous vos ajustements se font dans cet espace étendu — aucune couleur n'est perdue pendant le développement.

### 3. À l'export

C'est **le seul moment** où le choix de l'espace couleur compte vraiment :

- **Export web** → sRGB, JPEG, qualité 80-85 %
- **Export impression labo** → sRGB (sauf si le labo indique autre chose), JPEG qualité 100 % ou TIFF
- **Export impression fine art** → Adobe RGB ou profil ICC du papier, TIFF 16 bits

### 4. Calibrez votre écran

Tout ce qui précède ne sert à rien si votre écran affiche n'importe quoi. Une sonde de calibration (X-Rite i1Display ou Datacolor Spyder) coûte entre 100 et 200 euros et transforme votre flux de travail. Calibrez une fois par mois, votre écran dérive avec le temps.

### 5. Soft proof avant impression

Avant d'envoyer un fichier au labo, activez le Soft Proof dans Lightroom (touche S dans le module Développement). Chargez le profil ICC du papier que vous allez utiliser — la plupart des labos fournissent ces profils en téléchargement. Le soft proof simule à l'écran ce que l'impression donnera. Si les couleurs bougent, créez une copie virtuelle et ajustez spécifiquement pour l'impression. J'en parle en détail dans [mon article sur l'impression photo](/blog/impression-photo).

---

La gestion des couleurs n'est pas un sujet sexy, mais c'est le lien invisible entre votre vision et ce que les autres voient. Maîtrisez ces bases — espace couleur, profil ICC, export adapté — et vos images arriveront à destination exactement comme vous les avez voulues. Ni plus ternes, ni plus saturées, ni décalées. Juste fidèles.

## Pour aller plus loin

- [Réussir ses impressions photo sans mauvaises surprises](/blog/impression-photo)
- [Développer ses photos dans Lightroom : workflow en 7 étapes](/blog/lightroom-developpement)
