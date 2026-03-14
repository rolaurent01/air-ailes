---
title: "Balance des blancs : obtenir des couleurs justes en toute lumière"
slug: balance-des-blancs
date: 2026-02-08
excerpt: "Comprenez la balance des blancs et évitez les dominantes jaune ou bleu. WB auto vs Kelvin vs préréglages, avec exercices rapides."
cover_cloudinary_id: paysage/dsc01861
tags: ["technique", "couleur", "débutant"]
published: true
---

Vous avez déjà remarqué qu'une photo en intérieur tire sur le jaune, ou qu'un portrait à l'ombre a une teinte bleutée ? Ce n'est pas un problème d'exposition — c'est la **balance des blancs**. Chaque source de lumière a une couleur, et votre boîtier doit savoir laquelle pour restituer des couleurs fidèles.

Bonne nouvelle : c'est l'un des réglages les plus simples à comprendre et à corriger. Surtout si vous shootez en RAW.

<div class="svg-illustration" style="max-width: 600px; margin: 2rem auto; display: block;">
<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Échelle de température de couleur en Kelvin, de 2000K chaud ambré à 10000K froid bleuté, avec les préréglages bougie, tungstène, soleil, nuageux, ombre et ciel bleu">
<style>
  .wb-label { fill: #F0EDE8; font-family: system-ui, sans-serif; font-size: 12px; text-anchor: middle; font-weight: 600; }
  .wb-sub { fill: #7A7A72; font-family: system-ui, sans-serif; font-size: 10px; text-anchor: middle; }
  .wb-title { fill: #F0EDE8; font-family: system-ui, sans-serif; font-size: 14px; text-anchor: middle; font-weight: 600; }
  .wb-tick { stroke: #F0EDE8; stroke-width: 1; }
  .wb-marker { fill: none; stroke-width: 1.5; }
  .wb-kelvin { fill: #7A7A72; font-family: system-ui, sans-serif; font-size: 9px; text-anchor: middle; }
</style>
<defs>
  <linearGradient id="tempGrad" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#FF8C1A"/>
    <stop offset="15%" stop-color="#FFB347"/>
    <stop offset="30%" stop-color="#FFD699"/>
    <stop offset="45%" stop-color="#FFF2CC"/>
    <stop offset="55%" stop-color="#F5F5F5"/>
    <stop offset="70%" stop-color="#CCE0F5"/>
    <stop offset="85%" stop-color="#99C2EB"/>
    <stop offset="100%" stop-color="#5B8DB8"/>
  </linearGradient>
</defs>
<!-- Title -->
<text x="300" y="30" class="wb-title">Température de couleur (Kelvin)</text>
<!-- Gradient bar -->
<rect x="50" y="60" width="500" height="20" rx="10" fill="url(#tempGrad)"/>
<!-- Warm/Cool labels -->
<text x="50" y="55" class="wb-sub">Chaud</text>
<text x="550" y="55" class="wb-sub">Froid</text>
<!-- Tick marks and presets -->
<!-- Bougie ~1800K -->
<line x1="80" y1="80" x2="80" y2="100" class="wb-tick"/>
<circle cx="80" cy="108" r="5" class="wb-marker" stroke="#FF8C1A"/>
<text x="80" y="128" class="wb-label">Bougie</text>
<text x="80" y="142" class="wb-kelvin">~1800 K</text>
<!-- Tungstène ~2800K -->
<line x1="155" y1="80" x2="155" y2="100" class="wb-tick"/>
<circle cx="155" cy="108" r="5" class="wb-marker" stroke="#FFB347"/>
<text x="155" y="128" class="wb-label">Tungstène</text>
<text x="155" y="142" class="wb-kelvin">~2800 K</text>
<!-- Fluorescent ~4000K -->
<line x1="240" y1="80" x2="240" y2="100" class="wb-tick"/>
<circle cx="240" cy="108" r="5" class="wb-marker" stroke="#E8E0C0"/>
<text x="240" y="128" class="wb-label">Fluorescent</text>
<text x="240" y="142" class="wb-kelvin">~4000 K</text>
<!-- Soleil ~5500K -->
<line x1="330" y1="80" x2="330" y2="100" class="wb-tick"/>
<circle cx="330" cy="108" r="5" class="wb-marker" stroke="#F0EDE8"/>
<text x="330" y="128" class="wb-label">Soleil</text>
<text x="330" y="142" class="wb-kelvin">~5500 K</text>
<!-- Nuageux ~6500K -->
<line x1="405" y1="80" x2="405" y2="100" class="wb-tick"/>
<circle cx="405" cy="108" r="5" class="wb-marker" stroke="#B8CCE0"/>
<text x="405" y="128" class="wb-label">Nuageux</text>
<text x="405" y="142" class="wb-kelvin">~6500 K</text>
<!-- Ombre ~7500K -->
<line x1="470" y1="80" x2="470" y2="100" class="wb-tick"/>
<circle cx="470" cy="108" r="5" class="wb-marker" stroke="#8FAEC8"/>
<text x="470" y="128" class="wb-label">Ombre</text>
<text x="470" y="142" class="wb-kelvin">~7500 K</text>
<!-- Ciel bleu ~10000K -->
<line x1="535" y1="80" x2="535" y2="100" class="wb-tick"/>
<circle cx="535" cy="108" r="5" class="wb-marker" stroke="#5B8DB8"/>
<text x="535" y="128" class="wb-label">Ciel bleu</text>
<text x="535" y="142" class="wb-kelvin">~10000 K</text>
<!-- Explanation -->
<text x="300" y="185" class="wb-sub">La balance des blancs compense la couleur de la lumière ambiante.</text>
<text x="300" y="200" class="wb-sub">Régler 5500 K sous soleil = couleurs neutres.</text>
<text x="300" y="215" class="wb-sub">Régler 3000 K sous tungstène = couleurs neutres.</text>
<!-- Scale markers -->
<text x="50" y="100" class="wb-kelvin">2000 K</text>
<text x="550" y="100" class="wb-kelvin">10000 K</text>
<!-- Bottom note -->
<line x1="100" y1="245" x2="500" y2="245" style="stroke:#7A7A72;stroke-width:0.5;opacity:0.3"/>
<text x="300" y="268" class="wb-sub" font-style="italic">Astuce : un Kelvin trop bas → image bleutée · un Kelvin trop haut → image orangée</text>
</svg>
</div>

## WB auto, préréglages, Kelvin

### La balance des blancs automatique (AWB)

C'est le mode par défaut. Votre boîtier analyse la scène et devine la température de couleur. Honnêtement, les AWB modernes sont très bons — dans 80 % des cas, le résultat est correct.

Mais l'AWB a ses limites :
- Elle « corrige » parfois une ambiance que vous vouliez garder (la chaleur dorée de l'heure dorée, par exemple)
- Elle peut hésiter en lumière mixte (intérieur avec fenêtre + plafonniers)
- Elle varie d'une image à l'autre, ce qui complique la cohérence en série

Pour du reportage ou du street, l'AWB est souvent le choix le plus pragmatique. Vous corrigerez en post si nécessaire.

### Les préréglages

Tous les boîtiers proposent des préréglages : Soleil, Nuageux, Ombre, Tungstène, Fluorescent, Flash. Chacun correspond à une température Kelvin fixe.

L'avantage des préréglages : la constance. Si vous photographiez sous un ciel nuageux pendant une heure, régler « Nuageux » vous donnera la même balance sur toutes vos images. Pas de surprise.

L'inconvénient : la lumière réelle ne correspond pas toujours exactement au préréglage. Un « nuageux » peut aller de 6000 K à 7500 K selon l'épaisseur des nuages.

### Le mode Kelvin (K)

C'est le réglage le plus précis. Vous entrez directement la température en Kelvin — typiquement entre 2500 et 10000. Avantage : contrôle total. Vous pouvez ajuster par incréments de 100 K pour obtenir exactement la teinte souhaitée.

En pratique, le mode Kelvin est le favori des photographes de studio et de mariage, qui ont besoin d'une balance constante et précise tout au long d'une séance.

Quelques valeurs de départ utiles :
- Intérieur tungstène classique : **2800–3200 K**
- Bureau / fluorescent : **3800–4200 K**
- Extérieur soleil direct : **5200–5600 K**
- Extérieur nuageux : **6000–6500 K**
- Ombre ouverte : **7000–7500 K**

### La balance des blancs personnalisée

C'est la méthode la plus rigoureuse. Vous photographiez une charte grise ou blanche sous l'éclairage de votre scène, puis vous indiquez au boîtier de l'utiliser comme référence. Le boîtier calcule la correction exacte.

Indispensable en studio produit et en reproduction d'œuvres d'art. Moins courant en photo courante, mais c'est bon à savoir.

## Quand corriger à la prise de vue vs en RAW

### Si vous shootez en RAW

La balance des blancs en RAW est **entièrement modifiable en post-production**, sans aucune perte de qualité. Le fichier RAW stocke les données brutes du capteur — la balance des blancs n'est qu'une métadonnée appliquée au moment du développement.

Concrètement, ça veut dire que vous pouvez shooter en AWB, puis ajuster au degré Kelvin près dans Lightroom ou Capture One. C'est exactement la même qualité que si vous aviez réglé la bonne valeur sur le terrain.

Alors pourquoi se soucier de la balance des blancs à la prise de vue ? Deux raisons :
1. **L'aperçu sur l'écran arrière** : si la balance est très fausse, vous ne pouvez pas évaluer correctement les couleurs et l'exposition sur le terrain.
2. **Le gain de temps en post** : si vous shootez 500 images d'un événement, avoir une balance correcte dès le départ vous évite 500 corrections manuelles.

### Si vous shootez en JPEG

Là, c'est différent. Le JPEG « cuit » la balance des blancs dans l'image. La corriger après coup dégrade la qualité. Vous pouvez ajuster légèrement, mais un JPEG shooté en tungstène avec la balance sur « Soleil » sera très orange, et le corriger créera des artefacts.

Si vous shootez en JPEG, réglez la balance correctement à la prise de vue. Point.

### La créativité avant la technique

N'oubliez pas : la balance des blancs « juste » n'est pas toujours la meilleure. Une photo de coucher de soleil avec une balance neutre perd toute sa magie. Un portrait en lumière de bougie corrigé à 5500 K perd sa chaleur intime.

Parfois, la « mauvaise » balance est la bonne. L'essentiel, c'est que le choix soit conscient — pas un accident.

## Exercices : mêmes couleurs, lumières différentes

### Exercice 1 : la charte maison

Prenez un objet blanc (feuille de papier, mug blanc) et photographiez-le dans quatre situations :
1. En plein soleil extérieur
2. À l'ombre d'un bâtiment
3. Sous un éclairage tungstène (lampe de salon classique)
4. Sous un néon ou LED domestique

Pour chaque situation, faites trois photos : AWB, préréglage correspondant, et Kelvin ajusté manuellement. Comparez les résultats. Vous verrez rapidement dans quels cas l'AWB se débrouille et dans quels cas il faut intervenir.

### Exercice 2 : la série cohérente

Choisissez une scène d'intérieur avec un éclairage stable (salon, cuisine). Photographiez le même sujet dix fois avec l'AWB. Puis dix fois avec un Kelvin fixe (estimez la température, ajustez, puis gardez cette valeur).

Importez les deux séries dans Lightroom. Affichez-les en grille. Vous remarquerez que la série AWB a de légères variations de teinte d'une image à l'autre, tandis que la série Kelvin fixe est parfaitement uniforme. Pour un usage ponctuel, ça ne compte pas. Pour un book, un reportage ou un feed Instagram, la cohérence fait toute la différence.

### Exercice 3 : jouer avec l'ambiance

Photographiez la même scène à trois balances volontairement « fausses » :
1. Kelvin très bas (3000 K) → dominante bleue froide
2. Kelvin neutre (5500 K) → rendu naturel
3. Kelvin très haut (8000 K) → dominante chaude dorée

Regardez comment l'ambiance change radicalement. Certaines scènes gagnent en émotion avec une légère dominante froide (scènes mélancoliques, urbaines). D'autres prennent vie avec une teinte chaude (portraits, couchers de soleil, cuisine). Cet exercice développe votre sensibilité chromatique et vous aide à choisir consciemment vos couleurs.

## L'essentiel en trois phrases

La balance des blancs compense la couleur de la lumière ambiante pour que le blanc apparaisse blanc. En RAW, c'est un réglage 100 % réversible — shootez en AWB et corrigez en post si besoin. En JPEG, réglez correctement dès la prise de vue, car la marge de correction est limitée.

## Pour aller plus loin

- [Comprendre le format RAW vs JPEG](/blog/raw-vs-jpeg)
- [Développer ses photos dans Lightroom](/blog/lightroom-developpement)
