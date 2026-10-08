---
title: "Photo au drone : composer vu du ciel, régler, voler dans les règles"
slug: drone-photo
date: 2026-10-08
misAJour: 2026-10-08
excerpt: "Vue oblique ou zénithale, lumière rasante, réglages d'un petit capteur, sécurité et réglementation française : ce qu'il faut savoir pour réussir ses premières photos au drone."
module: 6
ordre: 3
niveau: intermédiaire
objectif: "composer une image aérienne en vue oblique ou zénithale, régler l'exposition d'un drone, et préparer un vol conforme aux règles françaises de la catégorie ouverte."
cover_svg: /formation/drone-photo.svg
published: true
---

Le drone a changé la photo de paysage en offrant un point de vue qui, il y a vingt ans, demandait un hélicoptère. Vu d'en haut, un champ devient un motif, une route devient une ligne, l'ombre d'un arbre devient un sujet à part entière.

Mais le drone a aussi un piège : la facilité. On décolle, on monte, on photographie tout ce qui est en dessous… et on rentre avec cinquante images qui se ressemblent. Tout ce que vous avez appris dans ce parcours s'applique en l'air : la [composition](/formation/composition-photo), la [lumière](/formation/lumiere-naturelle), l'exposition. Le drone n'est qu'un trépied de 120 mètres de haut.

## Composer vu du ciel

### Oblique ou zénithal : deux photos différentes

La caméra d'un drone s'incline, de l'horizontale jusqu'à la verticale. Ces deux extrêmes donnent deux langages.

<div class="svg-illustration" style="max-width: 600px; margin: 2rem auto; display: block;">
<svg viewBox="0 0 600 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="La même scène, une route qui traverse des champs avec un arbre, dessinée deux fois. En vue oblique, on voit l'horizon, la route fuit vers le lointain et donne de la profondeur. En vue zénithale, caméra à la verticale, l'horizon disparaît : la route devient une courbe graphique, les rangs du champ un motif, l'arbre un cercle avec son ombre.">
<style>
  .dro-title { fill: #F0EDE8; font-family: system-ui, sans-serif; font-size: 14px; font-weight: 600; text-anchor: middle; }
  .dro-frame { stroke: #F0EDE8; stroke-width: 1.5; fill: none; }
  .dro-main { stroke: #F0EDE8; stroke-width: 1.2; fill: none; stroke-linejoin: round; stroke-linecap: round; }
  .dro-row { stroke: #7A7A72; stroke-width: 0.8; fill: none; }
  .dro-shadow { fill: #7A7A72; opacity: 0.35; }
  .dro-label { fill: #F0EDE8; font-family: system-ui, sans-serif; font-size: 12px; font-weight: 600; text-anchor: middle; }
  .dro-sub { fill: #7A7A72; font-family: system-ui, sans-serif; font-size: 10px; text-anchor: middle; }
</style>
<text x="300" y="22" class="dro-title">La même scène, deux inclinaisons de caméra</text>
<!-- Vignette 1 : oblique -->
<g transform="translate(20,40)">
  <rect x="0" y="0" width="270" height="180" class="dro-frame"/>
  <path d="M0,46 Q60,40 120,44 T270,42" class="dro-row"/>
  <path d="M0,46 L270,46" class="dro-row" opacity="0.5"/>
  <!-- route en perspective -->
  <path d="M96,180 Q120,110 138,70 Q146,54 150,46" class="dro-main"/>
  <path d="M176,180 Q160,110 150,70 Q148,56 152,46" class="dro-main"/>
  <!-- rangs qui convergent -->
  <path d="M0,170 L120,52 M0,130 L110,52 M0,96 L100,52 M270,170 L170,52 M270,130 L180,52 M270,96 L190,52" class="dro-row"/>
  <!-- arbre -->
  <line x1="214" y1="120" x2="214" y2="100" class="dro-main"/>
  <ellipse cx="214" cy="90" rx="12" ry="14" class="dro-main"/>
</g>
<text x="155" y="244" class="dro-label">Vue oblique</text>
<text x="155" y="260" class="dro-sub">Horizon visible, profondeur, échelle du lieu</text>
<!-- Vignette 2 : zénithale -->
<g transform="translate(310,40)">
  <rect x="0" y="0" width="270" height="180" class="dro-frame"/>
  <path d="M0,20 L270,20 M0,38 L270,38 M0,56 L270,56 M0,74 L120,74 M0,92 L100,92" class="dro-row"/>
  <path d="M180,74 L270,74 M200,92 L270,92 M0,110 L270,110 M0,128 L270,128 M0,146 L270,146 M0,164 L270,164" class="dro-row" opacity="0.7"/>
  <!-- route en S -->
  <path d="M60,180 C60,120 210,120 210,60 C210,30 190,10 180,0" class="dro-main"/>
  <path d="M80,180 C80,134 230,134 230,60 C230,28 212,8 202,0" class="dro-main"/>
  <!-- arbre vu de dessus + ombre -->
  <ellipse cx="128" cy="62" rx="22" ry="10" class="dro-shadow" transform="rotate(20,140,66)"/>
  <circle cx="118" cy="58" r="12" class="dro-main"/>
</g>
<text x="445" y="244" class="dro-label">Vue zénithale (caméra à 90°)</text>
<text x="445" y="260" class="dro-sub">Plus d'horizon : lignes, motifs, ombres</text>
</svg>
</div>

- **La vue oblique** (caméra inclinée, horizon visible) raconte un lieu : on voit où l'on est, la profondeur, l'échelle. C'est la vue des grands paysages, des vallées, des côtes. Les règles habituelles s'appliquent : horizon droit, placé sur un tiers, premier plan qui guide le regard.
- **La vue zénithale** (caméra pointée droit vers le sol) supprime l'horizon et la perspective. L'image devient un plan, presque une peinture abstraite : on y cherche des lignes, des motifs, des contrastes de couleur ou de texture. C'est la vue des champs, des plages, des routes en lacet, des forêts en automne.

### Plus haut n'est pas mieux

L'erreur classique est de monter au maximum. Mais plus vous montez, plus tout devient petit et plat. Les motifs graphiques sont souvent plus forts **entre 30 et 80 mètres**, où les éléments gardent une taille lisible dans le cadre. Montez seulement si le sujet l'exige : une grande boucle de rivière, une mer de nuages, un relief entier.

Changez aussi d'altitude **pendant** la séance. Une même scène photographiée à 20, 50 et 100 mètres donne trois images qui n'ont rien à voir.

### La lumière rasante, encore plus qu'au sol

Vu d'en haut, la lumière de midi écrase tout : ombres courtes sous les objets, relief invisible. Au lever et au coucher du soleil, au contraire, chaque arbre, chaque bosse du terrain projette une longue ombre qui dessine le paysage.

<div class="svg-illustration" style="max-width: 600px; margin: 2rem auto; display: block;">
<svg viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Le même champ avec trois arbres, en vue zénithale. À midi, les ombres sont minuscules, juste sous les arbres : l'image est plate. À l'heure dorée, chaque arbre projette une longue ombre parallèle qui structure l'image.">
<style>
  .omb-title { fill: #F0EDE8; font-family: system-ui, sans-serif; font-size: 14px; font-weight: 600; text-anchor: middle; }
  .omb-frame { stroke: #F0EDE8; stroke-width: 1.5; fill: none; }
  .omb-tree { stroke: #F0EDE8; stroke-width: 1.2; fill: #111111; }
  .omb-row { stroke: #7A7A72; stroke-width: 0.6; opacity: 0.6; }
  .omb-shadow { fill: #7A7A72; opacity: 0.45; }
  .omb-label { fill: #F0EDE8; font-family: system-ui, sans-serif; font-size: 12px; font-weight: 600; text-anchor: middle; }
  .omb-sub { fill: #7A7A72; font-family: system-ui, sans-serif; font-size: 10px; text-anchor: middle; }
</style>
<text x="300" y="22" class="omb-title">Le même champ vu d'en haut, à deux heures</text>
<!-- Vignette 1 : midi -->
<g transform="translate(20,40)">
  <rect x="0" y="0" width="270" height="170" class="omb-frame"/>
  <path d="M0,30 L270,30 M0,55 L270,55 M0,80 L270,80 M0,105 L270,105 M0,130 L270,130 M0,155 L270,155" class="omb-row"/>
  <ellipse cx="72" cy="72" rx="13" ry="11" class="omb-shadow"/>
  <circle cx="70" cy="70" r="12" class="omb-tree"/>
  <ellipse cx="152" cy="112" rx="11" ry="9" class="omb-shadow"/>
  <circle cx="150" cy="110" r="10" class="omb-tree"/>
  <ellipse cx="212" cy="58" rx="12" ry="10" class="omb-shadow"/>
  <circle cx="210" cy="56" r="11" class="omb-tree"/>
</g>
<text x="155" y="236" class="omb-label">Midi</text>
<text x="155" y="252" class="omb-sub">Ombres courtes : le terrain paraît plat</text>
<!-- Vignette 2 : heure dorée -->
<g transform="translate(310,40)">
  <rect x="0" y="0" width="270" height="170" class="omb-frame"/>
  <path d="M0,30 L270,30 M0,55 L270,55 M0,80 L270,80 M0,105 L270,105 M0,130 L270,130 M0,155 L270,155" class="omb-row"/>
  <path d="M70,62 L178,40 L182,52 L70,80 Z" class="omb-shadow"/>
  <circle cx="70" cy="70" r="12" class="omb-tree"/>
  <path d="M150,102 L240,84 L244,94 L150,118 Z" class="omb-shadow"/>
  <circle cx="150" cy="110" r="10" class="omb-tree"/>
  <path d="M210,48 L270,36 L270,46 L210,64 Z" class="omb-shadow"/>
  <circle cx="210" cy="56" r="11" class="omb-tree"/>
</g>
<text x="445" y="236" class="omb-label">Heure dorée</text>
<text x="445" y="252" class="omb-sub">Ombres longues : elles dessinent l'image</text>
</svg>
</div>

## Régler l'appareil photo du drone

La caméra d'un drone grand public a des particularités qu'il faut connaître pour en tirer le meilleur.

- **Un petit capteur.** Il est bien plus petit que celui d'un hybride. Il fait de belles images en bonne lumière, mais le bruit monte vite avec l'ISO. Restez à l'ISO de base (souvent 100) autant que possible.
- **Souvent une ouverture fixe.** Beaucoup de modèles n'ont pas de diaphragme réglable. L'exposition se règle alors uniquement avec la vitesse et l'ISO : le mode manuel est simple à prendre en main.
- **Le RAW, toujours.** Activez le format RAW (souvent en DNG). Le ciel et les ombres d'une scène aérienne demandent presque toujours un rattrapage au développement, et un petit capteur supporte mal les corrections sur un JPEG.
- **La vitesse.** La nacelle stabilisée compense remarquablement les mouvements du drone, mais pas tout, surtout par vent. Contrôlez systématiquement la netteté en agrandissant l'image sur l'écran, et accélérez la vitesse si elle est douce.
- **Le bracketing.** Au lever ou au coucher du soleil, l'écart entre le ciel et le sol dépasse souvent ce que le capteur peut enregistrer. Le mode bracketing automatique (AEB, 3 ou 5 images) vous permettra de fusionner les expositions au développement.
- **L'histogramme à l'écran.** Activez-le dans l'application de pilotage : l'écran du téléphone, en plein soleil, est un très mauvais juge de l'exposition. Les [repères de la leçon sur l'histogramme](/formation/histogramme-photo) s'appliquent tels quels.

## Préparer le vol

Un vol réussi se prépare au sol, avant même de déplier les bras.

- **Vérifiez où vous avez le droit de voler** (voir plus bas). C'est la première étape, pas la dernière.
- **Regardez le vent**, en vous rappelant qu'il est souvent plus fort en altitude qu'au sol. Fiez-vous à la limite indiquée par le fabricant, et gardez de la marge.
- **Chargez toutes les batteries** et gardez-les au chaud par temps froid : le froid réduit leur autonomie. Entamez le retour bien avant l'alerte de batterie faible ; une marge d'un tiers de batterie évite les sueurs froides.
- **Réglez l'altitude de retour automatique** au-dessus de l'obstacle le plus haut des environs (arbres, pylônes, relief).
- **Composez au sol.** Sachez ce que vous voulez photographier avant de décoller : vous gagnerez de précieuses minutes de batterie.

## Ce que dit la réglementation

La réglementation des drones évolue régulièrement. Ce qui suit résume les grandes règles de la **catégorie ouverte** (loisir et usages professionnels simples à faible risque), d'après la page officielle du ministère de la Transition écologique, mise à jour le 3 septembre 2026. **Consultez-la avant votre premier vol, puis régulièrement** : [Exploitation des drones en catégorie ouverte](https://www.ecologie.gouv.fr/politiques-publiques/exploitation-drones-categorie-ouverte).

- **Hauteur maximale : 120 mètres**, et le drone doit rester **en vue directe**, à l'œil nu.
- **Pas de vol de nuit**, sauf dérogation préfectorale.
- **Pas de vol en agglomération dans l'espace public**, et **jamais au-dessus d'un rassemblement de personnes**.
- **Âge minimum : 14 ans**, sauf exceptions prévues par les textes.
- **Au-delà de 250 grammes**, une formation et un examen en ligne sont obligatoires, et le drone doit être enregistré sur le portail [AlphaTango](https://alphatango.aviation-civile.gouv.fr/). Au-delà de 800 grammes, un dispositif de signalement électronique est obligatoire.
- **De nombreuses zones sont interdites** ou soumises à restrictions : abords des aérodromes, parcs nationaux, sites sensibles, zones où la prise de vue aérienne est interdite (ZICAD). Avant chaque vol, consultez la carte officielle sur Géoportail : [Restrictions UAS catégorie ouverte et aéromodélisme](https://www.geoportail.gouv.fr/donnees/restrictions-uas-categorie-ouverte-et-aeromodelisme).

Enfin, une image prise d'en haut reste une image : le respect de la vie privée et le [droit à l'image](/formation/droit-a-limage-photographie) s'appliquent pleinement. Un jardin vu du ciel reste un lieu privé.

<div class="encadre encadre--retenir">
<p class="encadre__label">À retenir</p>

- Vue oblique pour raconter un lieu, vue zénithale pour les lignes et les motifs.
- Plus haut n'est pas mieux : les motifs sont souvent plus forts entre 30 et 80 mètres.
- Vu d'en haut, la lumière rasante du matin et du soir dessine le relief avec les ombres.
- ISO de base, RAW, histogramme affiché, bracketing quand le contraste est fort.
- Avant chaque vol : carte Géoportail des restrictions, météo et vent, batteries chargées.

</div>

## Exercice pratique

<div class="encadre encadre--exercice">

### Exercice au prochain vol : une batterie, un sujet (20 minutes)

Choisissez **un seul sujet** dans une zone autorisée (vérifiée sur la carte Géoportail) : un arbre isolé, un chemin, une parcelle, un rivage. Idéalement dans l'heure qui suit le lever ou précède le coucher du soleil.

1. **Vue oblique à trois hauteurs** : 30, 60 et 100 mètres, en gardant le même sujet dans le cadre.
2. **Vue zénithale à trois hauteurs** : mêmes altitudes, caméra à 90°. Cherchez une composition graphique : une ligne en diagonale, un motif, une ombre.
3. **De retour à la maison**, mettez les six images côte à côte. Laquelle raconte le mieux le lieu ? Laquelle est la plus graphique ? À quelle hauteur le sujet était-il le plus fort ?

Une batterie, un sujet, six images réfléchies : vous apprendrez plus qu'avec cinquante photos prises en survolant tout.

</div>

## Un trépied de 120 mètres

Le drone ne remplace pas l'œil. Il le déplace. Les photos aériennes qui marquent ne sont pas celles qui montrent le plus de territoire, mais celles qui ont trouvé une ligne, une ombre, une lumière que personne ne voit depuis le sol. Préparez votre prochain vol comme une sortie à l'aube : un lieu, une heure, une intention. Et laissez la batterie de rechange au chaud.

## Pour aller plus loin

- [Photo de paysage : netteté, filtres et sortie à l'aube](/formation/paysage-photo)
- [Droit à l'image : ce qu'un photographe doit savoir](/formation/droit-a-limage-photographie)
