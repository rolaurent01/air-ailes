---
title: "Photo de paysage : netteté, filtres et sortie à l'aube"
slug: paysage-photo
date: 2026-10-08
misAJour: 2026-10-08
excerpt: "Hyperfocale, filtres polarisant et ND, pose longue, préparation d'une sortie au lever du soleil : la méthode pour des paysages nets du premier plan à l'horizon, avec un exemple de terrain au col du Galibier."
module: 6
ordre: 2
niveau: intermédiaire
objectif: "obtenir un paysage net du premier plan à l'horizon, choisir et utiliser un filtre polarisant ou ND, et préparer une sortie à l'aube sans rien laisser au hasard."
cover_svg: /formation/paysage-photo.svg
published: true
---

Il y a des matins où l'on se demande pourquoi on fait ça. Le réveil sonne dans le noir, l'air est glacé, et le sac photo pèse une tonne. Puis il suffit d'un instant — la brume qui se déchire sous les premiers rayons — pour que tout prenne son sens.

La photo de paysage tient en deux mots : **préparation** et **présence**. La technique compte, mais elle est simple et se règle une fois pour toutes. Ce qui fait la différence, c'est d'être au bon endroit, au bon moment, avec un plan. Cette leçon vous donne les deux : les réglages qui garantissent une image nette et maîtrisée, et la méthode pour être là quand la lumière se passe.

## Netteté de bout en bout

Un paysage réussi est presque toujours net du premier plan jusqu'à l'horizon. Trois leviers y contribuent : l'ouverture, la stabilité et l'endroit où vous faites la mise au point.

### L'ouverture : f/8 à f/11

Vous l'avez vu dans la leçon sur [la profondeur de champ](/formation/profondeur-de-champ) : fermer le diaphragme augmente la zone nette. Mais pas indéfiniment. Au-delà d'un certain point, un phénomène optique, la **diffraction**, adoucit toute l'image. En pratique, elle commence à se voir vers f/16 sur un capteur plein format et vers f/11 sur un capteur APS-C.

Le repère à retenir : **f/8 à f/11**, c'est la plage où la plupart des objectifs donnent leur meilleure netteté avec une profondeur de champ confortable. Gardez f/16 et au-delà pour les cas où il faut vraiment plus de profondeur.

### La stabilité : trépied et retardateur

À f/11 et ISO 100, la vitesse descend vite, surtout tôt le matin. Le trépied n'est pas un luxe : c'est lui qui vous permet de garder l'ISO au plus bas et de prendre le temps de composer. Déclenchez avec le retardateur de 2 secondes ou une télécommande, pour ne pas faire bouger l'appareil en appuyant.

### La mise au point : l'hyperfocale

C'est ici que beaucoup de paysages sont gâchés. Le réflexe naturel est de faire la mise au point sur les montagnes au loin, « à l'infini ». Résultat : l'arrière-plan est net, mais le rocher du premier plan est flou. Vous avez gaspillé toute la profondeur de champ située au-delà de l'horizon.

La **distance hyperfocale**, c'est la distance de mise au point qui donne la plus grande zone nette possible pour une focale et une ouverture données. Si vous faites le point à cette distance, tout est net **de la moitié de cette distance jusqu'à l'infini**.

<div class="svg-illustration" style="max-width: 600px; margin: 2rem auto; display: block;">
<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Le même paysage avec un rocher au premier plan, à 24 mm et f/8. Mise au point sur l'infini : zone nette de 2,4 m à l'infini, le rocher à 1,2 m est flou. Mise au point à l'hyperfocale, 2,4 m : zone nette de 1,2 m à l'infini, le rocher est net.">
<style>
  .hyp-title { fill: #F0EDE8; font-family: system-ui, sans-serif; font-size: 14px; font-weight: 600; text-anchor: middle; }
  .hyp-frame { stroke: #F0EDE8; stroke-width: 1.5; fill: none; }
  .hyp-sharp { stroke: #F0EDE8; stroke-width: 1.2; fill: none; stroke-linejoin: round; }
  .hyp-mid { stroke: #7A7A72; stroke-width: 1; fill: none; }
  .hyp-soft { stroke: #7A7A72; stroke-width: 4; fill: none; opacity: 0.3; stroke-linejoin: round; }
  .hyp-soft-in { stroke: #7A7A72; stroke-width: 1; fill: none; stroke-dasharray: 2,3; }
  .hyp-axis { stroke: #7A7A72; stroke-width: 0.8; }
  .hyp-zone { stroke: #F0EDE8; stroke-width: 3; }
  .hyp-focus { fill: #F0EDE8; }
  .hyp-tick { fill: #7A7A72; font-family: system-ui, sans-serif; font-size: 9px; text-anchor: middle; }
  .hyp-label { fill: #F0EDE8; font-family: system-ui, sans-serif; font-size: 12px; font-weight: 600; text-anchor: middle; }
  .hyp-sub { fill: #7A7A72; font-family: system-ui, sans-serif; font-size: 10px; text-anchor: middle; }
</style>
<text x="300" y="22" class="hyp-title">Le même paysage à 24 mm et f/8</text>
<!-- Vignette 1 : infini -->
<g transform="translate(20,40)">
  <rect x="0" y="0" width="270" height="160" class="hyp-frame"/>
  <path d="M0,72 L46,40 L80,62 L128,22 L168,58 L206,34 L270,66" class="hyp-sharp"/>
  <path d="M0,96 Q135,88 270,96" class="hyp-mid"/>
  <path d="M30,108 Q140,104 250,110" class="hyp-mid" opacity="0.6"/>
  <path d="M18,160 L30,124 L58,112 L92,120 L110,160" class="hyp-soft"/>
  <path d="M18,160 L30,124 L58,112 L92,120 L110,160" class="hyp-soft-in"/>
</g>
<g transform="translate(20,212)">
  <line x1="0" y1="10" x2="270" y2="10" class="hyp-axis"/>
  <line x1="150" y1="10" x2="270" y2="10" class="hyp-zone"/>
  <circle cx="266" cy="10" r="3.5" class="hyp-focus"/>
  <text x="40" y="26" class="hyp-tick">0,5 m</text>
  <text x="95" y="26" class="hyp-tick">1,2 m</text>
  <text x="150" y="26" class="hyp-tick">2,4 m</text>
  <text x="205" y="26" class="hyp-tick">10 m</text>
  <text x="262" y="26" class="hyp-tick">∞</text>
</g>
<text x="155" y="270" class="hyp-label">Point sur l'infini</text>
<text x="155" y="286" class="hyp-sub">Net de 2,4 m à l'infini : le rocher est flou</text>
<!-- Vignette 2 : hyperfocale -->
<g transform="translate(310,40)">
  <rect x="0" y="0" width="270" height="160" class="hyp-frame"/>
  <path d="M0,72 L46,40 L80,62 L128,22 L168,58 L206,34 L270,66" class="hyp-sharp"/>
  <path d="M0,96 Q135,88 270,96" class="hyp-mid"/>
  <path d="M30,108 Q140,104 250,110" class="hyp-mid" opacity="0.6"/>
  <path d="M18,160 L30,124 L58,112 L92,120 L110,160" class="hyp-sharp"/>
  <path d="M40,140 L52,134 M66,128 L80,132" class="hyp-mid"/>
</g>
<g transform="translate(310,212)">
  <line x1="0" y1="10" x2="270" y2="10" class="hyp-axis"/>
  <line x1="95" y1="10" x2="270" y2="10" class="hyp-zone"/>
  <circle cx="150" cy="10" r="3.5" class="hyp-focus"/>
  <text x="40" y="26" class="hyp-tick">0,5 m</text>
  <text x="95" y="26" class="hyp-tick">1,2 m</text>
  <text x="150" y="26" class="hyp-tick">2,4 m</text>
  <text x="205" y="26" class="hyp-tick">10 m</text>
  <text x="262" y="26" class="hyp-tick">∞</text>
</g>
<text x="445" y="270" class="hyp-label">Point à l'hyperfocale (2,4 m)</text>
<text x="445" y="286" class="hyp-sub">Net de 1,2 m à l'infini : le rocher est net</text>
<text x="300" y="312" class="hyp-sub">Barre blanche : zone nette · point : distance de mise au point</text>
</svg>
</div>

Quelques repères pour un capteur **plein format** (cercle de confusion de 0,03 mm) :

| Focale | f/8 | f/11 | f/16 |
|---|---|---|---|
| 16 mm | 1,1 m | 0,8 m | 0,55 m |
| 24 mm | 2,4 m | 1,8 m | 1,2 m |
| 35 mm | 5,1 m | 3,7 m | 2,6 m |
| 50 mm | 10,5 m | 7,6 m | 5,3 m |

Sur un capteur **APS-C**, multipliez ces distances par 1,5 environ. Pour d'autres combinaisons, une application de calcul de profondeur de champ fait le travail en deux secondes.

Trois conseils de terrain :

- **Pas de mètre ruban ?** Faites le point sur un objet situé à peu près à la bonne distance (un caillou, une touffe d'herbe), puis repassez en mise au point manuelle pour qu'elle ne bouge plus.
- **Dans le doute, faites le point un peu au-delà** de l'hyperfocale plutôt qu'en deçà : un premier plan légèrement doux se remarque moins qu'un horizon flou.
- **Pour un grand tirage**, ces valeurs sont un peu optimistes. Prenez la ligne f/16 du tableau en travaillant à f/11, ou passez à l'assemblage de plusieurs mises au point (*focus stacking*, vu dans la leçon sur la profondeur de champ).

## Les filtres : polarisant et densité neutre

Deux filtres méritent une place dans le sac du photographe de paysage. Ce sont les seuls dont l'effet ne peut pas être reproduit correctement au développement.

### Le polarisant circulaire (CPL)

Il élimine une partie de la lumière réfléchie. Concrètement, en le tournant sur l'objectif, vous :

- **assombrissez un ciel bleu** et faites ressortir les nuages ;
- **supprimez les reflets** à la surface de l'eau (on voit les galets au fond d'un lac) et sur les feuillages mouillés ;
- **saturez les couleurs** de la végétation, que la brillance délavait.

Son effet est maximal quand le soleil est à **90° de l'axe de visée** (sur le côté), et presque nul quand vous visez vers le soleil ou dos à lui. Il absorbe environ **1 à 2 IL** de lumière.

Deux pièges : avec un grand-angle très large (en dessous de 24 mm environ), le ciel peut s'assombrir de façon inégale, avec une bande plus foncée ; et en panorama, l'effet change d'une image à l'autre. Dans ces cas, réduisez l'effet ou retirez le filtre.

### Le filtre ND (densité neutre)

C'est un verre gris neutre qui réduit la lumière sans changer les couleurs. Il sert à **allonger le temps de pose** en plein jour : l'eau devient soyeuse, les nuages s'étirent, les passants disparaissent.

| Filtre | Réduction | Temps multiplié par | 1/125 s devient |
|---|---|---|---|
| ND8 (densité 0,9) | 3 IL | 8 | 1/15 s |
| ND64 (densité 1,8) | 6 IL | 64 | 1/2 s |
| ND1000 (densité 3,0) | 10 IL | 1 000 | 8 s |

<div class="svg-illustration" style="max-width: 600px; margin: 2rem auto; display: block;">
<svg viewBox="0 0 600 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Le même lac de montagne dessiné deux fois. À 1/125 s, l'eau ridée ne reflète rien et les nuages sont nets. À 8 secondes avec un filtre ND1000, l'eau devient un miroir lisse qui reflète la montagne et les nuages s'étirent en traînées.">
<style>
  .nd-title { fill: #F0EDE8; font-family: system-ui, sans-serif; font-size: 14px; font-weight: 600; text-anchor: middle; }
  .nd-frame { stroke: #F0EDE8; stroke-width: 1.5; fill: none; }
  .nd-mount { stroke: #F0EDE8; stroke-width: 1.2; fill: none; stroke-linejoin: round; }
  .nd-reflect { stroke: #7A7A72; stroke-width: 1; fill: none; stroke-linejoin: round; opacity: 0.7; }
  .nd-ripple { stroke: #7A7A72; stroke-width: 1; fill: none; }
  .nd-cloud { stroke: #7A7A72; stroke-width: 1; fill: none; }
  .nd-streak { stroke: #7A7A72; stroke-width: 1; opacity: 0.6; stroke-linecap: round; }
  .nd-shore { stroke: #7A7A72; stroke-width: 0.8; }
  .nd-label { fill: #F0EDE8; font-family: system-ui, sans-serif; font-size: 12px; font-weight: 600; text-anchor: middle; }
  .nd-sub { fill: #7A7A72; font-family: system-ui, sans-serif; font-size: 10px; text-anchor: middle; }
</style>
<text x="300" y="22" class="nd-title">Le même lac, deux temps de pose</text>
<!-- Vignette 1 : 1/125 s -->
<g transform="translate(20,40)">
  <rect x="0" y="0" width="270" height="180" class="nd-frame"/>
  <path d="M36,30 Q42,18 56,22 Q64,12 78,20 Q90,16 92,28 Z" class="nd-cloud"/>
  <path d="M170,22 Q176,12 190,16 Q200,8 212,16 Q224,14 224,26 Z" class="nd-cloud"/>
  <path d="M0,96 L50,60 L84,80 L130,40 L172,76 L210,54 L270,92" class="nd-mount"/>
  <line x1="0" y1="98" x2="270" y2="98" class="nd-shore"/>
  <path d="M10,112 q8,-4 16,0 t16,0 M60,116 q8,-4 16,0 t16,0 M130,110 q8,-4 16,0 t16,0 M200,114 q8,-4 16,0 t16,0" class="nd-ripple"/>
  <path d="M30,132 q8,-4 16,0 t16,0 M100,136 q8,-4 16,0 t16,0 M170,130 q8,-4 16,0 t16,0 M230,138 q6,-4 12,0 t12,0" class="nd-ripple"/>
  <path d="M8,156 q8,-4 16,0 t16,0 M80,160 q8,-4 16,0 t16,0 M150,154 q8,-4 16,0 t16,0 M210,162 q8,-4 16,0 t16,0" class="nd-ripple"/>
</g>
<text x="155" y="244" class="nd-label">1/125 s, sans filtre</text>
<text x="155" y="260" class="nd-sub">Eau ridée, nuages nets, aucun reflet</text>
<!-- Vignette 2 : 8 s ND1000 -->
<g transform="translate(310,40)">
  <rect x="0" y="0" width="270" height="180" class="nd-frame"/>
  <line x1="20" y1="20" x2="120" y2="22" class="nd-streak"/>
  <line x1="40" y1="28" x2="150" y2="30" class="nd-streak"/>
  <line x1="150" y1="16" x2="250" y2="18" class="nd-streak"/>
  <line x1="170" y1="25" x2="260" y2="27" class="nd-streak"/>
  <path d="M0,96 L50,60 L84,80 L130,40 L172,76 L210,54 L270,92" class="nd-mount"/>
  <line x1="0" y1="98" x2="270" y2="98" class="nd-shore"/>
  <path d="M0,100 L50,136 L84,116 L130,156 L172,120 L210,142 L270,104" class="nd-reflect"/>
</g>
<text x="445" y="244" class="nd-label">8 s avec un ND1000, sur trépied</text>
<text x="445" y="260" class="nd-sub">Eau en miroir, nuages étirés en traînées</text>
</svg>
</div>

## La pose longue, pas à pas

Avec un ND, l'appareil ne voit presque plus rien à travers le viseur, et l'autofocus abandonne. Il faut donc tout préparer **avant** de visser le filtre :

1. **Trépied stable, appareil de niveau.** Désactivez la stabilisation si le fabricant le recommande pour l'usage sur trépied.
2. **Composez et faites la mise au point sans le filtre**, puis passez en mise au point manuelle pour la verrouiller.
3. **Mesurez l'exposition sans le filtre**, en mode M : par exemple f/11, 1/125 s, ISO 100.
4. **Vissez le filtre et calculez la nouvelle vitesse** avec le tableau (ou une application) : avec un ND1000, 1/125 s devient 8 s.
5. **Sur un reflex, fermez l'oculaire du viseur** (cache fourni avec la courroie) : en pose longue, la lumière qui entre par là peut voiler l'image.
6. **Déclenchez au retardateur ou à la télécommande.** Au-delà de 30 secondes, passez en mode Pose B (*Bulb*) avec une télécommande.
7. **Contrôlez l'histogramme**, puis ajustez d'un tiers ou d'un IL si besoin.

Si la réduction du bruit en pose longue est activée, l'appareil prend une seconde image noire de même durée après la vôtre. Une pose de 2 minutes immobilise donc l'appareil 4 minutes : ne l'éteignez pas pendant ce temps.

## Préparer une sortie à l'aube

La lumière du matin est souvent la plus belle de la journée : air plus pur, brumes de vallée, ciel qui change de minute en minute. Mais elle ne pardonne pas l'improvisation. On ne trouve pas un point de vue dans le noir, et la meilleure lumière dure parfois moins d'un quart d'heure.

<div class="svg-illustration" style="max-width: 600px; margin: 2rem auto; display: block;">
<svg viewBox="0 0 600 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Frise de l'aube : nuit, aube nautique, aube civile (l'heure bleue), lever du soleil, heure dorée, puis lumière dure. Le repère conseille d'être installé au début de l'aube civile, environ 45 minutes avant le lever.">
<style>
  .aub-title { fill: #F0EDE8; font-family: system-ui, sans-serif; font-size: 14px; font-weight: 600; text-anchor: middle; }
  .aub-bar { stroke: #7A7A72; stroke-width: 1; fill: none; }
  .aub-seg { stroke: #7A7A72; stroke-width: 0.8; }
  .aub-fill { fill: #F0EDE8; }
  .aub-label { fill: #F0EDE8; font-family: system-ui, sans-serif; font-size: 11px; font-weight: 600; text-anchor: middle; }
  .aub-sub { fill: #7A7A72; font-family: system-ui, sans-serif; font-size: 10px; text-anchor: middle; }
  .aub-mark { stroke: #F0EDE8; stroke-width: 1; fill: none; }
  .aub-sun { stroke: #F0EDE8; stroke-width: 1.2; fill: #111111; }
</style>
<text x="300" y="22" class="aub-title">L'aube, minute par minute</text>
<!-- Barre -->
<rect x="20" y="90" width="560" height="26" class="aub-bar"/>
<rect x="20" y="90" width="110" height="26" class="aub-fill" opacity="0.02"/>
<rect x="130" y="90" width="100" height="26" class="aub-fill" opacity="0.05"/>
<rect x="230" y="90" width="130" height="26" class="aub-fill" opacity="0.1"/>
<rect x="360" y="90" width="120" height="26" class="aub-fill" opacity="0.2"/>
<rect x="480" y="90" width="100" height="26" class="aub-fill" opacity="0.32"/>
<line x1="130" y1="90" x2="130" y2="116" class="aub-seg"/>
<line x1="230" y1="90" x2="230" y2="116" class="aub-seg"/>
<line x1="360" y1="84" x2="360" y2="122" class="aub-mark"/>
<line x1="480" y1="90" x2="480" y2="116" class="aub-seg"/>
<!-- Soleil au lever -->
<path d="M346,84 A14,14 0 0 1 374,84" class="aub-sun"/>
<text x="360" y="64" class="aub-label">Lever du soleil</text>
<!-- Étiquettes -->
<text x="75" y="138" class="aub-label">Nuit</text>
<text x="180" y="138" class="aub-label">Aube nautique</text>
<text x="180" y="152" class="aub-sub">le ciel bleuit à l'est</text>
<text x="295" y="138" class="aub-label">Aube civile</text>
<text x="295" y="152" class="aub-sub">l'heure bleue</text>
<text x="420" y="138" class="aub-label">Heure dorée</text>
<text x="420" y="152" class="aub-sub">rasante, chaude</text>
<text x="530" y="138" class="aub-label">Lumière dure</text>
<text x="530" y="152" class="aub-sub">on range</text>
<!-- Repère arrivée -->
<path d="M230,44 L230,86" class="aub-mark" stroke-dasharray="3,3"/>
<polyline points="225,79 230,87 235,79" class="aub-mark"/>
<text x="222" y="54" class="aub-label" style="text-anchor: end">Installé et cadré</text>
<text x="222" y="68" class="aub-sub" style="text-anchor: end">environ 45 min avant le lever</text>
</svg>
</div>

### Trois à un jour avant

- **La météo, en détail.** Pas seulement « soleil » ou « nuages » : regardez la nébulosité par étage (des nuages hauts et fins s'embrasent au lever, une couche basse et épaisse bouche tout), le vent et l'humidité. En montagne, consultez aussi les bulletins spécialisés.
- **Les conditions d'une mer de nuages.** Elle se forme souvent par **inversion de température** : après une nuit claire et calme, l'air froid et humide s'accumule au fond des vallées et forme une couche de brume ou de nuages bas, surmontée d'un air plus sec et plus doux. Il faut alors être **au-dessus** de la couche.
- **L'orientation du soleil.** Le soleil ne se lève plein est qu'aux équinoxes : nettement au nord-est en été, au sud-est en hiver. Une application de photographie (PhotoPills, The Photographer's Ephemeris) ou un simple calcul d'azimut vous dit exactement où il apparaîtra par rapport à votre point de vue.
- **Le repérage.** Sur une carte topographique, choisissez le point de vue et l'itinéraire. Si vous pouvez, allez-y de jour la veille : vous saurez où poser le trépied, et vous ne chercherez pas le sentier à la frontale.

### La veille au soir

- Batteries chargées, cartes mémoire vides, filtres et chiffon dans le sac.
- Notez l'heure du lever du soleil et du début de l'aube civile.
- Préparez les réglages : ISO 100, RAW, mode M ou A, retardateur de 2 secondes, stabilisation selon l'usage du trépied.
- Prévenez quelqu'un de votre itinéraire et de votre heure de retour, surtout en montagne.

### Le matin même

- **Soyez installé au début de l'heure bleue**, soit environ 45 minutes avant le lever. Le ciel change plus vite qu'on ne le croit.
- **Gardez les batteries de rechange au chaud**, dans une poche intérieure : le froid réduit fortement leur autonomie.
- **Composez pendant l'heure bleue**, quand vous avez encore le temps. Au moment où le soleil perce, vous n'aurez plus qu'à déclencher.
- **Surveillez l'histogramme** : un ciel de lever est très contrasté. Prenez des séries de trois images à −1, 0 et +1 IL (le *bracketing*) si la dynamique dépasse votre capteur.
- **Restez jusqu'au bout de l'heure dorée.** Et quand la lumière devient blanche et dure, rangez sans regret.

## Exemple de terrain : un lever de soleil au col du Galibier

Ce jour-là, je visais le col du Galibier. La météo annonçait une mer de nuages possible, et quand la nature offre ce genre de spectacle, il faut être là pour le capter. Réveil à 4 heures.

La montée commence dans le noir complet. Lampe frontale, sentier humide, souffle court. Le silence est total, à peine troublé par le crissement des graviers. À mesure que l'altitude grimpe, la température chute ; les doigts s'engourdissent, mais l'excitation monte. Arrivé au point de vue choisi la veille sur la carte, je pose le trépied et j'attends. Le ciel commence à peine à bleuir à l'est. La vallée en contrebas est noyée dans une brume épaisse, laiteuse, qui ondule lentement entre les crêtes.

Puis tout s'accélère. Le soleil perce l'horizon et la brume s'embrase. Pendant dix minutes, peut-être moins, la lumière est irréelle — dorée, rasante, sculptant chaque relief. Je déclenche en variant les cadrages et les focales. Quand la lumière devient plus dure, plus blanche, je range le matériel. La magie est passée.

### Ce que ce matin-là montre

- **La préparation fait la photo.** La prévision de mer de nuages, le point de vue choisi la veille sur la carte, le départ dans la nuit : sans ces trois décisions prises à l'avance, il n'y aurait rien eu à photographier.
- **Il faut être en place avant la lumière.** Arriver pendant que le ciel bleuit, c'est avoir le temps de poser le trépied et de composer. Arriver au lever, c'est rater les dix minutes qui comptent.
- **La meilleure lumière est brève.** Dix minutes, peut-être moins. C'est pour ça qu'on compose avant et qu'on varie les cadrages et les focales pendant : grand-angle pour l'ampleur de la mer de nuages, téléobjectif pour isoler une crête qui émerge de la brume.
- **Savoir s'arrêter.** Quand la lumière devient blanche, l'image perd son relief. Inutile d'insister.

### Repères de réglage pour ce type de scène

Ce sont des points de départ généraux, à adapter à votre matériel et à la scène : trépied, ISO 100, RAW, f/8 à f/11, mise au point à l'hyperfocale au grand-angle ou sur la crête principale au téléobjectif. Exposez pour préserver les hautes lumières de la brume éclairée, et faites du bracketing si le contraste entre le ciel et la vallée encore dans l'ombre est trop fort.

Et acceptez que parfois, ça ne marche pas. Ce matin-là, la nature a été généreuse. La prochaine fois, peut-être pas. C'est ce qui rend chaque image précieuse.

<div class="encadre encadre--retenir">
<p class="encadre__label">À retenir</p>

- f/8 à f/11, ISO 100, trépied et retardateur : la base d'un paysage net.
- Faites la mise au point à l'hyperfocale, pas sur l'infini : tout est net de la moitié de cette distance jusqu'à l'horizon.
- Le polarisant agit surtout à 90° du soleil ; le ND allonge la pose (ND1000 : 1/125 s devient 8 s).
- En pose longue, mise au point et mesure se font **avant** de visser le filtre.
- À l'aube : météo et repérage la veille, installé environ 45 minutes avant le lever, batteries au chaud.

</div>

## Exercices

<div class="encadre encadre--exercice">

### Exercice de ce soir : l'hyperfocale en 30 minutes

Trouvez une scène avec un premier plan proche (un banc, un muret, une touffe d'herbe à environ 1 m) et un arrière-plan lointain. Appareil sur trépied ou bien calé, mode A, f/8, ISO 100.

1. Faites une photo avec la mise au point **sur l'arrière-plan**.
2. Cherchez votre focale et votre ouverture dans le tableau (ou une application), faites le point à la **distance hyperfocale**, et refaites la photo.
3. Refaites les deux à f/16, puis à f/22.

Sur l'ordinateur, agrandissez le premier plan et l'arrière-plan à 100 %. Vous verrez la différence de mise au point, et l'effet de la diffraction à f/22.

</div>

<div class="encadre encadre--exercice">

### Exercice du week-end : une sortie à l'aube préparée

Choisissez un point de vue à moins d'une heure de chez vous, orienté vers l'est ou vers un relief que le soleil levant éclairera.

1. **J-2 :** vérifiez la météo par étage de nuages et l'orientation du lever.
2. **J-1 :** repérez l'accès de jour si possible ; préparez le sac et les réglages ; notez l'heure de l'aube civile.
3. **Jour J :** soyez installé 45 minutes avant le lever. Faites une image toutes les cinq minutes avec le même cadrage, de l'heure bleue jusqu'à la lumière dure.

Mettez les images côte à côte : c'est la meilleure leçon de lumière qui soit, et vous saurez quelle minute vous préférez.

</div>

## Être là

On peut apprendre l'hyperfocale en un soir et la pose longue en un week-end. Ce qui prend plus de temps, c'est l'habitude de se lever, de partir dans le noir et d'attendre. C'est pourtant là que se font les paysages dont on se souvient. Regardez la météo de ce week-end, choisissez un point de vue, et mettez le réveil.

## Pour aller plus loin

- [Profondeur de champ : maîtriser le flou et la netteté](/formation/profondeur-de-champ)
- [La lumière naturelle : lire sa qualité, sa direction et sa couleur](/formation/lumiere-naturelle)
- [Photo au drone : composer vu du ciel](/formation/drone-photo)
