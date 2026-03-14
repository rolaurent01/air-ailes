---
title: "Apprendre le flash : TTL, manuel et nombre-guide"
slug: flash-debutant
date: 2026-03-15
excerpt: "Comprenez le flash sans jargon : TTL vs manuel, nombre-guide, distance et qualité de lumière. Exercices pour progresser en une soirée."
cover_svg: /blog/flash-debutant.svg
tags: ["technique", "flash", "portrait"]
published: true
---

Le flash est l'accessoire le plus mal compris de la photographie. Beaucoup de photographes l'évitent, convaincus qu'il produit une lumière plate et disgracieuse — et ils ont raison, tant qu'il est utilisé en direct sur le boîtier. Mais un flash maîtrisé, orienté intelligemment, devient un outil de création lumineuse d'une puissance extraordinaire. Il transforme une pièce sombre en studio improvisé, un portrait banal en image sculptée.

Cet article vous donne les bases solides pour comprendre le flash, le régler avec confiance, et produire vos premières images éclairées au flash dès ce soir.

## TTL vs manuel : quoi choisir

Votre flash propose deux modes fondamentaux. Comprendre la différence vous évitera des heures de frustration.

### Le mode TTL (Through The Lens)

En TTL, le flash est automatique. Voici ce qui se passe en une fraction de seconde quand vous déclenchez :

1. Le flash envoie un **pré-éclair** imperceptible à l'œil.
2. Le boîtier mesure la lumière réfléchie par la scène à travers l'objectif (d'où le nom « Through The Lens »).
3. Le processeur calcule la puissance nécessaire pour exposer correctement le sujet.
4. Le flash se déclenche à la puissance calculée, simultanément avec l'ouverture de l'obturateur.

**Avantages du TTL** : rapidité, adaptabilité. Si votre sujet se déplace ou si vous changez de cadrage, le flash ajuste automatiquement sa puissance. C'est idéal en reportage, en événementiel, en street photography au flash — partout où la situation change vite.

**Limites du TTL** : le système peut être trompé. Un mur blanc derrière le sujet ? Le flash sous-expose (il croit que la scène est trop claire). Un fond noir ? Il surexpose. Un sujet décentré ? Le pré-éclair mesure le fond, pas le sujet. Le TTL est intelligent, mais il ne sait pas ce que vous voulez photographier.

**Correction d'exposition flash** : c'est votre meilleur allié en TTL. La plupart des boîtiers permettent de corriger l'exposition flash de -3 à +3 EV indépendamment de l'exposition ambiante. Si votre sujet est surexposé, descendez à -0.7 ou -1 EV. Si les visages sont trop sombres, montez à +0.3 ou +0.7 EV.

### Le mode manuel

En manuel, vous fixez la puissance du flash : 1/1 (pleine puissance), 1/2, 1/4, 1/8, 1/16, 1/32, 1/64, 1/128. Chaque palier divise la quantité de lumière par deux — c'est exactement un stop.

**Avantages du manuel** : constance absolue. Si votre sujet est à 2 mètres et que vous réglez le flash à 1/8, chaque image aura exactement la même exposition flash. C'est parfait en studio, en portrait posé, en photo de produit — partout où les conditions sont stables.

**Limites du manuel** : si la distance change, l'exposition change. Vous devez ajuster la puissance ou le diaphragme à chaque modification de distance. C'est lent en situation dynamique.

### Résumé pratique

- **Situation dynamique, conditions changeantes** → TTL + correction d'exposition flash.
- **Situation contrôlée, résultat reproductible** → Manuel.
- **En apprentissage** → commencez en TTL pour comprendre le flash, puis passez en manuel pour affiner votre contrôle.

## Le nombre-guide en clair

Le nombre-guide (NG) est la spécification qui définit la puissance de votre flash. C'est un chiffre que tout le monde cite et que peu de gens comprennent vraiment.

La formule est simple :

**NG = Distance (m) × Ouverture (f/)**

Un flash de NG 40 (à ISO 100) signifie qu'à pleine puissance, il peut éclairer correctement un sujet à **5 mètres à f/8** (5 × 8 = 40), ou à **10 mètres à f/4** (10 × 4 = 40), ou à **2.5 mètres à f/16** (2.5 × 16 = 40).

**En pratique, la formule sert à deux choses** :

1. **Calculer la portée** : à quelle distance maximale votre flash est-il efficace ? Si vous travaillez à f/5.6 avec un NG 40, la portée est 40 ÷ 5.6 ≈ 7 mètres. Au-delà, le flash n'aura plus d'effet visible.

2. **Choisir l'ouverture** : si votre sujet est à 3 mètres et que vous voulez une exposition correcte, l'ouverture optimale est 40 ÷ 3 ≈ f/13. En pratique, vous arrondirez à f/11 ou f/16.

**Attention** : le nombre-guide est donné à ISO 100 et en éclairage direct. Quand vous faites rebondir le flash sur un plafond, vous perdez 1 à 2 stops de puissance (la lumière parcourt plus de distance et le plafond absorbe une partie). Quand vous montez les ISO, la portée effective augmente : à ISO 400, la portée est doublée par rapport à ISO 100.

## Distance et chute de lumière (loi en 1/r²)

C'est le concept physique le plus important en éclairage artificiel, et il est souvent mal compris.

La lumière d'un flash (ou de toute source ponctuelle) obéit à la **loi de l'inverse du carré de la distance**. En termes simples : quand la distance double, l'intensité lumineuse est divisée par quatre. Pas par deux — par **quatre**.

<svg role="img" aria-label="Diagramme illustrant la loi de l'inverse du carré : une source de lumière éclaire un sujet avec une intensité qui diminue de façon quadratique à 1 mètre, 2 mètres et 4 mètres" viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" style="max-width:600px;margin:2rem auto;display:block;">
  <!-- Title -->
  <text x="300" y="24" text-anchor="middle" fill="#F0EDE8" font-size="14" font-weight="bold">Loi de l'inverse du carré (1/r²)</text>
  <!-- Flash source -->
  <g transform="translate(50, 130)">
    <!-- Flash body -->
    <rect x="-8" y="-20" width="16" height="28" rx="2" fill="none" stroke="#F0EDE8" stroke-width="1.5"/>
    <rect x="-12" y="-32" width="24" height="14" rx="2" fill="none" stroke="#F0EDE8" stroke-width="1.5"/>
    <!-- Lightning symbol -->
    <polyline points="-3,-28 1,-24 -2,-24 3,-20" fill="none" stroke="#F0EDE8" stroke-width="1.2"/>
    <text x="0" y="26" text-anchor="middle" fill="#7A7A72" font-size="10">Flash</text>
  </g>
  <!-- Light rays -->
  <line x1="70" y1="120" x2="540" y2="60" stroke="#F0EDE8" stroke-width="0.4" opacity="0.3"/>
  <line x1="70" y1="130" x2="540" y2="130" stroke="#F0EDE8" stroke-width="0.4" opacity="0.3"/>
  <line x1="70" y1="140" x2="540" y2="200" stroke="#F0EDE8" stroke-width="0.4" opacity="0.3"/>
  <!-- 1m mark -->
  <g transform="translate(170, 80)">
    <!-- Concentric circles - bright -->
    <circle cx="0" cy="50" r="30" fill="none" stroke="#F0EDE8" stroke-width="1.2" opacity="0.9"/>
    <circle cx="0" cy="50" r="22" fill="none" stroke="#F0EDE8" stroke-width="0.8" opacity="0.7"/>
    <circle cx="0" cy="50" r="14" fill="none" stroke="#F0EDE8" stroke-width="0.6" opacity="0.5"/>
    <circle cx="0" cy="50" r="6" fill="#F0EDE8" opacity="0.3"/>
    <!-- Person silhouette -->
    <circle cx="0" cy="38" r="6" fill="none" stroke="#F0EDE8" stroke-width="1.2"/>
    <line x1="0" y1="44" x2="0" y2="62" stroke="#F0EDE8" stroke-width="1.2"/>
    <line x1="-8" y1="52" x2="8" y2="52" stroke="#F0EDE8" stroke-width="1.2"/>
    <line x1="0" y1="62" x2="-6" y2="74" stroke="#F0EDE8" stroke-width="1.2"/>
    <line x1="0" y1="62" x2="6" y2="74" stroke="#F0EDE8" stroke-width="1.2"/>
  </g>
  <text x="170" y="176" text-anchor="middle" fill="#F0EDE8" font-size="13" font-weight="bold">×1</text>
  <text x="170" y="192" text-anchor="middle" fill="#7A7A72" font-size="11">1 m</text>
  <!-- 2m mark -->
  <g transform="translate(320, 80)">
    <!-- Concentric circles - dimmer -->
    <circle cx="0" cy="50" r="30" fill="none" stroke="#F0EDE8" stroke-width="0.8" opacity="0.5"/>
    <circle cx="0" cy="50" r="22" fill="none" stroke="#F0EDE8" stroke-width="0.6" opacity="0.35"/>
    <circle cx="0" cy="50" r="14" fill="none" stroke="#F0EDE8" stroke-width="0.4" opacity="0.2"/>
    <!-- Person silhouette -->
    <circle cx="0" cy="38" r="6" fill="none" stroke="#F0EDE8" stroke-width="1"/>
    <line x1="0" y1="44" x2="0" y2="62" stroke="#F0EDE8" stroke-width="1"/>
    <line x1="-8" y1="52" x2="8" y2="52" stroke="#F0EDE8" stroke-width="1"/>
    <line x1="0" y1="62" x2="-6" y2="74" stroke="#F0EDE8" stroke-width="1"/>
    <line x1="0" y1="62" x2="6" y2="74" stroke="#F0EDE8" stroke-width="1"/>
  </g>
  <text x="320" y="176" text-anchor="middle" fill="#F0EDE8" font-size="13" font-weight="bold">÷4</text>
  <text x="320" y="192" text-anchor="middle" fill="#7A7A72" font-size="11">2 m</text>
  <!-- 4m mark -->
  <g transform="translate(470, 80)">
    <!-- Concentric circles - very dim -->
    <circle cx="0" cy="50" r="30" fill="none" stroke="#F0EDE8" stroke-width="0.5" opacity="0.2"/>
    <circle cx="0" cy="50" r="22" fill="none" stroke="#F0EDE8" stroke-width="0.4" opacity="0.12"/>
    <!-- Person silhouette -->
    <circle cx="0" cy="38" r="6" fill="none" stroke="#F0EDE8" stroke-width="0.8" opacity="0.6"/>
    <line x1="0" y1="44" x2="0" y2="62" stroke="#F0EDE8" stroke-width="0.8" opacity="0.6"/>
    <line x1="-8" y1="52" x2="8" y2="52" stroke="#F0EDE8" stroke-width="0.8" opacity="0.6"/>
    <line x1="0" y1="62" x2="-6" y2="74" stroke="#F0EDE8" stroke-width="0.8" opacity="0.6"/>
    <line x1="0" y1="62" x2="6" y2="74" stroke="#F0EDE8" stroke-width="0.8" opacity="0.6"/>
  </g>
  <text x="470" y="176" text-anchor="middle" fill="#F0EDE8" font-size="13" font-weight="bold">÷16</text>
  <text x="470" y="192" text-anchor="middle" fill="#7A7A72" font-size="11">4 m</text>
  <!-- Distance axis -->
  <line x1="100" y1="210" x2="540" y2="210" stroke="#7A7A72" stroke-width="0.8"/>
  <polygon points="536,207 544,210 536,213" fill="#7A7A72"/>
  <text x="550" y="214" fill="#7A7A72" font-size="10">d</text>
  <!-- Explanation -->
  <text x="300" y="242" text-anchor="middle" fill="#7A7A72" font-size="11">Distance ×2 → Lumière ÷4</text>
  <text x="300" y="260" text-anchor="middle" fill="#7A7A72" font-size="11">Distance ×4 → Lumière ÷16</text>
</svg>

### Conséquences pratiques

**La chute est brutale à courte distance.** Entre 1 m et 2 m, vous perdez 2 stops. C'est la différence entre une image bien exposée et une image nettement sous-exposée. Cela signifie que dans un groupe de personnes, la première rangée est correctement éclairée tandis que la deuxième est déjà sombre.

**La chute est douce à longue distance.** Entre 8 m et 10 m, la différence est minime (~0.6 stop). En pratique, cela signifie que si vous éclairez un groupe large, reculez pour uniformiser l'éclairage. Plus la source est loin, plus la lumière est homogène sur le sujet.

**L'astuce du portraitiste** : rapprochez le flash du sujet pour obtenir une chute rapide et un fond naturellement sombre. Le sujet à 1 m est bien éclairé, le mur à 3 m reçoit 9 fois moins de lumière et disparaît dans l'ombre. C'est un moyen simple de créer un fond noir sans fond noir physique.

## Deux setups faciles : mur/plafond + réflecteur

Passons à la pratique. Voici deux configurations que vous pouvez mettre en place en cinq minutes, avec un seul flash cobra monté sur le boîtier.

### Setup 1 : Flash rebondi au plafond

C'est la technique la plus simple et la plus efficace pour améliorer instantanément la qualité de vos photos au flash en intérieur.

**Comment faire** : orientez la tête de votre flash vers le plafond à 45-75° vers l'arrière. Le flash éclaire le plafond, qui devient une grande source de lumière diffuse éclairant le sujet par au-dessus. La lumière est douce, les ombres sont légères, le rendu est naturel.

**Conditions** : le plafond doit être blanc ou très clair (un plafond coloré teintera toute votre image), et pas trop haut (au-delà de 4 mètres, vous perdez trop de puissance). La technique fonctionne aussi sur un mur latéral : orientez le flash vers le mur le plus proche pour créer un éclairage latéral doux, très flatteur pour les portraits.

**Réglages** : en TTL, commencez à 0 EV et ajustez selon le résultat. En manuel, démarrez à 1/4 de puissance et augmentez ou diminuez par paliers.

**Variante mur** : orientez le flash vers le mur situé à 45° de votre sujet. Vous obtenez un éclairage latéral qui modèle les volumes du visage — c'est proche d'un éclairage studio classique de type Rembrandt, mais réalisé avec un seul flash cobra et un mur blanc.

<svg role="img" aria-label="Schéma de deux setups flash : rebond au plafond avec trajet lumineux et setup réflecteur avec direction de la lumière de remplissage" viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" style="max-width:600px;margin:2rem auto;display:block;">
  <!-- Title -->
  <text x="300" y="24" text-anchor="middle" fill="#F0EDE8" font-size="14" font-weight="bold">Deux setups simples avec un flash cobra</text>
  <!-- Setup 1: Bounce -->
  <g transform="translate(20, 50)">
    <text x="130" y="14" text-anchor="middle" fill="#F0EDE8" font-size="12" font-weight="bold">Setup 1 : Rebond plafond</text>
    <!-- Room outline -->
    <line x1="10" y1="40" x2="250" y2="40" stroke="#7A7A72" stroke-width="1.5"/>
    <text x="130" y="36" text-anchor="middle" fill="#7A7A72" font-size="9">Plafond</text>
    <line x1="10" y1="40" x2="10" y2="230" stroke="#7A7A72" stroke-width="0.5" stroke-dasharray="3,3"/>
    <line x1="250" y1="40" x2="250" y2="230" stroke="#7A7A72" stroke-width="0.5" stroke-dasharray="3,3"/>
    <!-- Floor -->
    <line x1="10" y1="230" x2="250" y2="230" stroke="#7A7A72" stroke-width="0.8"/>
    <!-- Camera + flash -->
    <g transform="translate(60, 170)">
      <rect x="0" y="0" width="30" height="22" rx="3" fill="none" stroke="#F0EDE8" stroke-width="1.2"/>
      <circle cx="15" cy="11" r="7" fill="none" stroke="#F0EDE8" stroke-width="1"/>
      <!-- Flash head tilted up -->
      <rect x="8" y="-22" width="14" height="18" rx="2" fill="none" stroke="#F0EDE8" stroke-width="1.2" transform="rotate(-20, 15, -13)"/>
    </g>
    <!-- Flash ray up to ceiling -->
    <line x1="75" y1="148" x2="130" y2="44" stroke="#F0EDE8" stroke-width="1" stroke-dasharray="5,3"/>
    <polygon points="128,48 132,40 126,46" fill="#F0EDE8"/>
    <!-- Bounce point -->
    <circle cx="130" cy="42" r="3" fill="#F0EDE8" opacity="0.4"/>
    <!-- Scattered rays down -->
    <line x1="120" y1="44" x2="160" y2="180" stroke="#F0EDE8" stroke-width="0.6" opacity="0.5"/>
    <line x1="130" y1="44" x2="170" y2="180" stroke="#F0EDE8" stroke-width="0.6" opacity="0.5"/>
    <line x1="140" y1="44" x2="180" y2="180" stroke="#F0EDE8" stroke-width="0.6" opacity="0.5"/>
    <line x1="130" y1="44" x2="190" y2="170" stroke="#F0EDE8" stroke-width="0.6" opacity="0.4"/>
    <line x1="120" y1="44" x2="150" y2="185" stroke="#F0EDE8" stroke-width="0.6" opacity="0.4"/>
    <!-- Subject -->
    <g transform="translate(170, 170)">
      <circle cx="0" cy="-20" r="8" fill="none" stroke="#F0EDE8" stroke-width="1.2"/>
      <line x1="0" y1="-12" x2="0" y2="16" stroke="#F0EDE8" stroke-width="1.2"/>
      <line x1="-12" y1="0" x2="12" y2="0" stroke="#F0EDE8" stroke-width="1.2"/>
      <line x1="0" y1="16" x2="-8" y2="34" stroke="#F0EDE8" stroke-width="1.2"/>
      <line x1="0" y1="16" x2="8" y2="34" stroke="#F0EDE8" stroke-width="1.2"/>
    </g>
    <!-- Labels -->
    <text x="130" y="252" text-anchor="middle" fill="#7A7A72" font-size="10" font-style="italic">Lumière douce, ombres légères</text>
  </g>
  <!-- Setup 2: Reflector -->
  <g transform="translate(310, 50)">
    <text x="130" y="14" text-anchor="middle" fill="#F0EDE8" font-size="12" font-weight="bold">Setup 2 : Flash + réflecteur</text>
    <!-- Flash on the left, elevated -->
    <g transform="translate(30, 80)">
      <rect x="0" y="0" width="14" height="20" rx="2" fill="none" stroke="#F0EDE8" stroke-width="1.2"/>
      <rect x="-2" y="-12" width="18" height="14" rx="2" fill="none" stroke="#F0EDE8" stroke-width="1.2"/>
      <polyline points="4,-8 8,-4 5,-4 10,0" fill="none" stroke="#F0EDE8" stroke-width="0.8"/>
      <text x="7" y="36" text-anchor="middle" fill="#7A7A72" font-size="9">Flash</text>
    </g>
    <!-- Main light rays from flash to subject -->
    <line x1="48" y1="82" x2="120" y2="130" stroke="#F0EDE8" stroke-width="0.8" stroke-dasharray="5,3"/>
    <line x1="48" y1="88" x2="120" y2="140" stroke="#F0EDE8" stroke-width="0.8" stroke-dasharray="5,3"/>
    <line x1="48" y1="94" x2="120" y2="150" stroke="#F0EDE8" stroke-width="0.8" stroke-dasharray="5,3"/>
    <polygon points="117,132 123,128 119,135" fill="#F0EDE8"/>
    <!-- Subject in center -->
    <g transform="translate(130, 120)">
      <circle cx="0" cy="-20" r="8" fill="none" stroke="#F0EDE8" stroke-width="1.2"/>
      <line x1="0" y1="-12" x2="0" y2="16" stroke="#F0EDE8" stroke-width="1.2"/>
      <line x1="-12" y1="0" x2="12" y2="0" stroke="#F0EDE8" stroke-width="1.2"/>
      <line x1="0" y1="16" x2="-8" y2="34" stroke="#F0EDE8" stroke-width="1.2"/>
      <line x1="0" y1="16" x2="8" y2="34" stroke="#F0EDE8" stroke-width="1.2"/>
    </g>
    <!-- Reflector on the right -->
    <g transform="translate(210, 90)">
      <line x1="0" y1="0" x2="0" y2="70" stroke="#F0EDE8" stroke-width="2"/>
      <text x="12" y="38" fill="#7A7A72" font-size="9">Réflecteur</text>
    </g>
    <!-- Fill light rays from reflector back to subject -->
    <line x1="208" y1="110" x2="145" y2="130" stroke="#F0EDE8" stroke-width="0.5" opacity="0.5"/>
    <line x1="208" y1="120" x2="145" y2="140" stroke="#F0EDE8" stroke-width="0.5" opacity="0.5"/>
    <line x1="208" y1="130" x2="145" y2="148" stroke="#F0EDE8" stroke-width="0.5" opacity="0.5"/>
    <text x="188" y="180" text-anchor="middle" fill="#7A7A72" font-size="9">Fill (lumière</text>
    <text x="188" y="192" text-anchor="middle" fill="#7A7A72" font-size="9">de remplissage)</text>
    <!-- Camera below -->
    <g transform="translate(100, 200)">
      <rect x="0" y="0" width="30" height="22" rx="3" fill="none" stroke="#F0EDE8" stroke-width="1.2"/>
      <circle cx="15" cy="11" r="7" fill="none" stroke="#F0EDE8" stroke-width="1"/>
      <text x="15" y="38" text-anchor="middle" fill="#7A7A72" font-size="9">Appareil</text>
    </g>
    <text x="130" y="260" text-anchor="middle" fill="#7A7A72" font-size="10" font-style="italic">Lumière modelée, ombres atténuées</text>
  </g>
</svg>

### Setup 2 : Flash déporté + réflecteur

Ce setup est un pas vers l'éclairage studio, mais il ne nécessite qu'un flash, un petit trépied ou un support, et un réflecteur (même un carton blanc fait l'affaire).

**Comment faire** : placez le flash à 45° du sujet, légèrement au-dessus de la hauteur des yeux, avec un diffuseur (ou simplement sans modifier). Placez un réflecteur blanc de l'autre côté du sujet pour renvoyer une partie de la lumière vers les ombres.

Le flash crée la lumière principale — modelée, directionnelle, qui sculpte les volumes. Le réflecteur crée la lumière de remplissage (fill) — plus douce, qui éclaircit les ombres sans les éliminer complètement. Le ratio entre les deux détermine le contraste du portrait.

**Réglages** : en manuel, commencez à 1/8 de puissance. Ajustez en chimping (vérification sur l'écran). Le réflecteur ne se règle pas en puissance — vous contrôlez son effet en le rapprochant ou en l'éloignant du sujet.

**Sans réflecteur** : remplacez-le par un mur clair. Placez le sujet à 1 mètre d'un mur blanc et le flash de l'autre côté. Le mur joue naturellement le rôle de réflecteur.

### La vitesse de synchronisation

Un point technique crucial : chaque boîtier a une **vitesse de synchronisation maximale** (sync speed), généralement 1/200 s ou 1/250 s. Au-delà de cette vitesse, l'obturateur ne s'ouvre pas entièrement au moment de l'éclair et une bande noire apparaît sur l'image.

En pratique, en intérieur, ce n'est jamais un problème — vous êtes rarement au-delà de 1/200 s. En extérieur (flash de fill au soleil), il faut activer le mode **HSS** (High Speed Sync) pour dépasser cette limite, au prix d'une perte de puissance significative.

### La balance flash/ambiance

La clé d'un éclairage au flash naturel est l'équilibre entre la lumière du flash et la lumière ambiante. Voici la méthode :

1. **Réglez l'exposition ambiante** d'abord, sans flash. Sous-exposez de 1 à 2 stops par rapport à ce que le posemètre indique — vous voulez que l'ambiance soit présente mais que le flash soit la source dominante.
2. **Allumez le flash** et ajustez sa puissance jusqu'à obtenir une exposition correcte sur le sujet.
3. **Affinez** : si l'ambiance est trop sombre, ouvrez le diaphragme ou ralentissez la vitesse (cela affecte l'ambiance sans changer l'exposition flash). Si le flash est trop dur, diffusez-le ou faites-le rebondir.

Cette séparation entre « exposition ambiance » et « exposition flash » est la compétence fondamentale du photographe au flash. Maîtrisez-la et vous ne craindrez plus aucune situation d'éclairage.

---

**Exercice de ce soir** : prenez votre flash, un mur blanc et un sujet patient (un ami, un membre de la famille, ou même une peluche). Commencez en flash direct sur le sujet — observez les ombres dures. Puis orientez le flash vers le plafond. Comparez. Ensuite, orientez-le vers le mur latéral. Comparez encore. En dix minutes et trois séries de photos, vous aurez compris l'essentiel de la direction de lumière au flash.

## Pour aller plus loin

- [Maîtriser le triangle d'exposition](/blog/triangle-exposition) — les fondamentaux qui sous-tendent le réglage du flash comme de la lumière ambiante.
- [Réussir ses photos en basse lumière](/blog/photo-basse-lumiere) — quand le flash n'est pas une option, les techniques pour photographier sans lumière artificielle.
