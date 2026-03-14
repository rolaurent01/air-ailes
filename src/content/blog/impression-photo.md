---
title: "Réussir ses impressions photo sans mauvaises surprises"
slug: impression-photo
date: 2026-02-12
excerpt: "Préparez vos tirages : profil ICC, soft proofing, résolution et contrôles avant envoi. La méthode pour que vos prints ressemblent à votre écran."
cover_cloudinary_id: paysage/dsc01861
tags: ["post-production", "impression", "avancé"]
published: true
---

Vous avez passé des heures à développer une image dans Lightroom. Les couleurs sont parfaites, le contraste ciselé, le rendu exactement comme vous le vouliez. Vous envoyez le fichier au labo. Le tirage arrive. Et là, déception : les couleurs sont éteintes, les ombres bouchées, le rendu global est terne. Ce n'est pas la faute du labo. C'est un problème de préparation.

L'impression photo obéit à des règles physiques radicalement différentes de l'affichage écran. Un écran émet de la lumière ; un tirage la réfléchit. Un écran affiche des millions de nuances ; un papier, même excellent, en reproduit moins. Ce n'est pas une limitation — c'est une réalité qu'il faut intégrer dans votre workflow.

Voici comment préparer vos fichiers pour que vos tirages ressemblent enfin à ce que vous voyez à l'écran.

<svg viewBox="0 0 600 140" xmlns="http://www.w3.org/2000/svg" style="max-width:600px;margin:2rem auto;display:block;" role="img" aria-label="Workflow de préparation à l'impression">
  <style>
    .wf-box { fill: none; stroke: #F0EDE8; stroke-width: 1.2; rx: 12; }
    .wf-label { fill: #F0EDE8; font-family: system-ui, sans-serif; font-size: 10px; text-anchor: middle; }
    .wf-sub { fill: #7A7A72; font-family: system-ui, sans-serif; font-size: 8.5px; text-anchor: middle; }
    .wf-icon { stroke: #F0EDE8; stroke-width: 1.1; fill: none; stroke-linecap: round; stroke-linejoin: round; }
    .wf-arrow { stroke: #7A7A72; stroke-width: 1; fill: none; marker-end: url(#wfArrow); }
    .wf-badge { fill: none; stroke: #7A7A72; stroke-width: 0.8; rx: 4; }
    .wf-badge-text { fill: #7A7A72; font-family: system-ui, sans-serif; font-size: 7px; text-anchor: middle; }
  </style>
  <defs>
    <marker id="wfArrow" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
      <polygon points="0 0, 6 2, 0 4" fill="#7A7A72"/>
    </marker>
  </defs>
  <!-- Step 1: Écran -->
  <g>
    <rect x="10" y="25" width="90" height="70" class="wf-box"/>
    <path d="M35 45 L75 45 L75 68 L35 68 Z M48 68 L48 75 L62 75 L62 68" class="wf-icon"/>
    <text x="55" y="92" class="wf-label">Écran</text>
  </g>
  <line x1="100" y1="60" x2="126" y2="60" class="wf-arrow"/>
  <!-- Step 2: Soft Proof -->
  <g>
    <rect x="126" y="25" width="100" height="70" class="wf-box"/>
    <!-- Eye icon -->
    <path d="M156 55 C164 44, 184 44, 192 55 C184 66, 164 66, 156 55 Z" class="wf-icon"/>
    <circle cx="174" cy="55" r="4" class="wf-icon"/>
    <text x="176" y="92" class="wf-label">Soft Proof</text>
    <!-- ICC badge -->
    <rect x="155" y="15" width="42" height="16" class="wf-badge"/>
    <text x="176" y="26" class="wf-badge-text">Profil ICC</text>
    <line x1="176" y1="31" x2="176" y2="40" stroke="#7A7A72" stroke-width="0.6" stroke-dasharray="2 1"/>
  </g>
  <line x1="226" y1="60" x2="252" y2="60" class="wf-arrow"/>
  <!-- Step 3: Ajustements -->
  <g>
    <rect x="252" y="25" width="100" height="70" class="wf-box"/>
    <path d="M282 48 L282 68 M292 42 L292 68 M302 52 L302 68" class="wf-icon"/>
    <circle cx="282" cy="45" r="3" class="wf-icon"/>
    <circle cx="292" cy="39" r="3" class="wf-icon"/>
    <circle cx="302" cy="49" r="3" class="wf-icon"/>
    <text x="302" y="92" class="wf-label">Ajustements</text>
  </g>
  <line x1="352" y1="60" x2="378" y2="60" class="wf-arrow"/>
  <!-- Step 4: Export -->
  <g>
    <rect x="378" y="25" width="90" height="70" class="wf-box"/>
    <path d="M408 45 L436 45 L436 70 L408 70 Z" class="wf-icon"/>
    <path d="M416 55 L428 55 M416 60 L424 60 M416 65 L426 65" class="wf-icon"/>
    <text x="423" y="92" class="wf-label">Export</text>
  </g>
  <line x1="468" y1="60" x2="494" y2="60" class="wf-arrow"/>
  <!-- Step 5: Impression -->
  <g>
    <rect x="494" y="25" width="96" height="70" class="wf-box"/>
    <path d="M522 45 L554 45 L554 60 L522 60 Z" class="wf-icon"/>
    <path d="M526 60 L526 72 L550 72 L550 60" class="wf-icon"/>
    <path d="M530 45 L530 38 L546 38 L546 45" class="wf-icon"/>
    <text x="542" y="92" class="wf-label">Impression</text>
  </g>
</svg>

## Ce que simule le soft proof

Le Soft Proof (épreuvage écran) est la fonctionnalité la plus importante pour quiconque imprime ses photos. Son rôle : simuler à l'écran le rendu final sur un papier donné, avec une imprimante donnée.

Dans Lightroom, activez-le avec la touche **S** dans le module Développement. Un bandeau apparaît en haut : « Soft Proofing ». Vous pouvez alors charger un profil ICC — celui du papier et de l'imprimante que vous allez utiliser.

### Ce qui change sous vos yeux

En activant le soft proof, vous verrez probablement :

- **Les couleurs se désaturent légèrement** — c'est normal. Le gamut d'un papier est toujours inférieur à celui d'un écran. Les verts vifs et les bleus électriques sont les premiers touchés.
- **Les ombres se bouchent** — le noir d'un écran (qui émet zéro lumière) est bien plus profond que le noir d'un papier (qui réfléchit toujours un peu de lumière ambiante). Le « Dmax » du papier est sa densité maximale, et elle est toujours inférieure au noir écran.
- **Le contraste global diminue** — conséquence directe des deux points précédents. La plage dynamique d'un tirage est inférieure à celle d'un écran.

### Intention de rendu

Lightroom vous propose deux intentions de rendu :

- **Perceptuelle** : compresse l'ensemble du gamut pour que les rapports entre couleurs soient préservés. Les couleurs hors gamut sont ramenées à l'intérieur, et les couleurs intérieures sont légèrement ajustées pour maintenir la cohérence globale. C'est le choix que je recommande pour la plupart des photos.
- **Relative** : ne modifie que les couleurs hors gamut, en les ramenant au point le plus proche dans le gamut cible. Les couleurs déjà dans le gamut restent inchangées. Bon pour les images qui n'ont pas de couleurs très saturées.

Cochez « Simuler papier et encre » pour voir l'effet du blanc du papier (qui n'est jamais blanc pur — surtout les papiers fine art, souvent légèrement crème) et du point noir réel.

## Profils ICC papier et imprimante

Un profil ICC est un fichier (extension .icc ou .icm) qui décrit comment une combinaison précise imprimante + papier + encre reproduit les couleurs. Sans ce profil, Lightroom ne peut pas savoir que le « bleu 100 » de votre fichier deviendra tel bleu précis sur ce papier précis.

### Où trouver les profils ICC

- **Labos en ligne** : la plupart fournissent leurs profils ICC sur leur site. Cherchez dans la section « Préparation des fichiers » ou « Aide technique ». Téléchargez le profil correspondant au papier que vous avez choisi.
- **Papetiers** : Hahnemühle, Canson Infinity, Ilford fournissent des profils ICC pour les principales imprimantes (Epson, Canon). Rendez-vous sur leur site, choisissez votre modèle d'imprimante et téléchargez le profil du papier.
- **Profils personnalisés** : si vous imprimez vous-même, le top est de créer vos propres profils avec une sonde (X-Rite i1Studio, par exemple). Vous imprimez une mire de couleurs, la mesurez avec la sonde, et le logiciel génère un profil sur mesure. C'est le plus précis possible.

### Installation des profils ICC

- **macOS** : placez le fichier .icc dans `/Bibliothèque/ColorSync/Profiles/` ou double-cliquez dessus
- **Windows** : clic droit sur le fichier → « Installer le profil »

Une fois installé, le profil apparaît dans la liste déroulante du Soft Proof de Lightroom et dans les paramètres d'impression.

## Réglages de résolution et netteté

### Résolution : le bon chiffre

La résolution standard pour l'impression est **300 dpi** (points par pouce). C'est la densité à laquelle l'oeil humain, à distance de lecture normale (~30 cm), ne distingue plus les pixels individuels.

En pratique :

- **Tirage 20×30 cm à 300 dpi** → besoin d'environ 3500 × 2400 pixels, soit ~8 Mpx. Tout capteur moderne le fait sans problème.
- **Tirage 60×90 cm à 300 dpi** → besoin de ~10 600 × 7 100 pixels, soit ~75 Mpx. Peu de capteurs y arrivent nativement. Mais un tirage de cette taille se regarde à 1-2 mètres de distance, donc 200 dpi suffisent (ce qui ramène le besoin à ~33 Mpx).

**La règle** : pour un tirage vu de près (livre, encadrement de bureau), visez 300 dpi. Pour un grand tirage mural vu de loin, 150-200 dpi suffisent. En dessous de 150 dpi, les pixels deviennent visibles et l'image perd en finesse.

### Netteté de sortie

La netteté est le dernier réglage avant export, et il dépend du support :

- **Papier brillant/lustré** : netteté modérée. Ce type de papier restitue bien les détails fins, une accentuation excessive crée des halos visibles.
- **Papier mat/fine art** : netteté élevée. Les papiers mats « absorbent » la netteté — l'encre diffuse légèrement dans les fibres. Il faut compenser en accentuant davantage. Le résultat paraîtra trop net à l'écran mais sera parfait à l'impression.

Dans Lightroom, à l'export, cochez « Netteté de sortie » et choisissez « Mat » ou « Brillant » avec un niveau « Élevé » pour le fine art, « Standard » pour le labo classique.

### Le suréchantillonnage

Si votre fichier est trop petit pour le tirage voulu, Lightroom peut agrandir l'image à l'export (résolution supérieure aux pixels natifs). Les algorithmes modernes font un travail correct jusqu'à 150-200 % d'agrandissement. Au-delà, envisagez un logiciel spécialisé comme Topaz Gigapixel ou la fonction « Super Resolution » d'Adobe Camera Raw.

## Checklist avant envoi au labo

Voici la liste que je parcours systématiquement avant chaque envoi de fichier en impression. Imprimez-la (ironie), collez-la à côté de votre écran, et ne sautez aucune étape.

**1. Écran calibré ?**
Vérifiez la date de votre dernière calibration. Si elle remonte à plus de 4-6 semaines, recalibrez. Un écran non calibré rend tout le reste inutile.

**2. Soft proof activé ?**
Chargez le profil ICC du papier choisi. Vérifiez visuellement que le rendu simulé est acceptable. Si les couleurs bougent trop, créez une copie virtuelle et ajustez (débouchez les ombres, augmentez légèrement la saturation, remontez la luminosité).

**3. Espace couleur correct ?**
sRGB pour les labos grand public. Adobe RGB ou profil ICC spécifique pour le fine art. Si le labo ne précise rien, envoyez du sRGB — c'est le choix le plus sûr. Consultez [mon guide sur la colorimétrie](/blog/colorimetrie-photo) pour approfondir ce sujet.

**4. Format et compression ?**
TIFF 16 bits pour la meilleure qualité (fichiers lourds). JPEG qualité 100 % comme alternative acceptable. Ne jamais envoyer de JPEG compressé en dessous de 95 % pour l'impression.

**5. Résolution suffisante ?**
Calculez : taille du tirage en pouces × 300 = pixels nécessaires par côté. Un tirage 30×45 cm = 12×18 pouces = 3600×5400 pixels minimum. Vérifiez que votre fichier atteint ou dépasse ces valeurs.

**6. Netteté de sortie ?**
Appliquez la netteté de sortie correspondant au type de papier. Ne l'oubliez pas — c'est l'erreur la plus fréquente chez les débutants en impression.

**7. Recadrage et marges ?**
Vérifiez que le ratio de votre image correspond au ratio du tirage. Un capteur 3:2 cadre naturellement pour du 20×30 cm, mais pas pour du 20×20 ou du 30×40. Ajustez le recadrage ou ajoutez des marges blanches.

**8. Tirage test ?**
Pour un tirage important (grande taille, exposition, vente), commandez d'abord un tirage test en petit format. C'est un investissement minime qui évite les mauvaises surprises sur un tirage à 80 euros.

---

L'impression est l'aboutissement du travail photographique. C'est le moment où l'image quitte l'écran pour exister physiquement, dans un format qu'on peut toucher, encadrer, offrir. Préparer correctement ses fichiers n'est pas une corvée technique — c'est le dernier geste créatif avant que l'image rencontre le papier. Faites-le bien, et vos tirages vous donneront cette satisfaction unique que le numérique seul ne procure pas.

## Pour aller plus loin

- [Colorimétrie photo : sRGB, Adobe RGB et profils ICC](/blog/colorimetrie-photo)
- [Développer ses photos dans Lightroom : workflow en 7 étapes](/blog/lightroom-developpement)
