---
title: "Mise au point et autofocus : la netteté là où vous la voulez"
slug: mise-au-point-autofocus
date: 2026-10-08
misAJour: 2026-10-08
excerpt: "AF-S ou AF-C, point unique ou zone, suivi des yeux : réglez l'autofocus pour que la netteté tombe sur votre sujet, et reconnaissez les trois sortes de flou."
module: 1
ordre: 5
niveau: débutant
objectif: "choisir le bon mode et la bonne zone d'autofocus selon votre sujet, et reconnaître d'où vient un flou pour le corriger."
cover_svg: /formation/mise-au-point-autofocus.svg
published: true
---

Une photo floue, c'est la déception la plus fréquente quand on débute. Et souvent, l'appareil n'y est pour rien : il a fait la mise au point exactement là où on le lui a demandé… ou là où il a cru bon de la faire. Sur un portrait, il a choisi l'arbre derrière. Sur un enfant qui court, il a fait le point une fois, puis l'enfant a bougé.

L'autofocus n'est pas une magie qui « trouve le sujet ». C'est un outil avec des réglages, et deux d'entre eux suffisent à régler la plupart des problèmes : **quand** l'appareil fait le point (une fois ou en continu) et **où** il le fait (un point précis ou une zone large).

## D'abord, d'où vient le flou ?

Avant de toucher aux réglages, apprenez à diagnostiquer. Il existe trois sortes de flou, et elles ne se corrigent pas de la même façon.

| Ce que vous voyez | Cause | Correction |
|---|---|---|
| **Toute l'image** est floue, avec un léger dédoublement dans une direction | Flou de bougé : l'appareil a bougé pendant la pose | Vitesse plus rapide, stabilisation, appui |
| **Un autre plan** est net (le fond, le premier plan), mais pas le sujet | Erreur de mise au point | Mode et zone d'AF (cette leçon) |
| Le décor est net, mais **le sujet** est traîné | Flou de mouvement du sujet | Vitesse plus rapide (mode S) |

Le réflexe à prendre : agrandissez la photo à 100 % sur l'écran de l'appareil et cherchez **ce qui est net**. Si quelque chose l'est, c'est un problème de mise au point. Si rien ne l'est, c'est un problème de vitesse.

## Quand faire le point : AF-S ou AF-C

### AF-S (One Shot chez Canon) : une fois pour toutes

Vous enfoncez le déclencheur à mi-course, l'appareil fait le point, émet souvent un petit bip, puis **verrouille** cette distance tant que vous gardez le doigt appuyé. Idéal pour tout ce qui ne bouge pas : paysage, architecture, portrait posé, nature morte.

### AF-C (AI Servo chez Canon) : en continu

Tant que vous gardez le déclencheur à mi-course, l'appareil **recalcule** la mise au point en permanence pour suivre le sujet. Indispensable pour tout ce qui bouge vers vous ou s'éloigne : enfant, animal, sportif, vélo.

<div class="svg-illustration" style="max-width: 600px; margin: 2rem auto; display: block;">
<svg viewBox="0 0 600 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Un sujet marche vers l'appareil. En AF-S, le plan de netteté reste à la première distance et le sujet sort de la zone nette. En AF-C, le plan de netteté suit le sujet à chaque pas.">
<style>
  .afc-title { fill: #F0EDE8; font-family: system-ui, sans-serif; font-size: 14px; font-weight: 600; text-anchor: middle; }
  .afc-label { fill: #F0EDE8; font-family: system-ui, sans-serif; font-size: 12px; font-weight: 600; }
  .afc-sub { fill: #7A7A72; font-family: system-ui, sans-serif; font-size: 10px; }
  .afc-cam { stroke: #F0EDE8; stroke-width: 1.2; fill: none; stroke-linejoin: round; }
  .afc-ground { stroke: #7A7A72; stroke-width: 0.8; }
  .afc-plane { stroke: #F0EDE8; stroke-width: 1.2; stroke-dasharray: 4,3; }
  .afc-person { stroke: #F0EDE8; stroke-width: 1.2; fill: none; stroke-linecap: round; }
  .afc-ghost { stroke: #7A7A72; stroke-width: 1; fill: none; stroke-linecap: round; opacity: 0.6; }
  .afc-ok { fill: #F0EDE8; font-family: system-ui, sans-serif; font-size: 10px; text-anchor: middle; }
  .afc-ko { fill: #7A7A72; font-family: system-ui, sans-serif; font-size: 10px; text-anchor: middle; }
</style>
<text x="300" y="22" class="afc-title">Un sujet qui avance vers vous</text>
<!-- Ligne AF-S -->
<text x="20" y="62" class="afc-label">AF-S</text>
<text x="20" y="76" class="afc-sub">le point est verrouillé</text>
<line x1="150" y1="120" x2="580" y2="120" class="afc-ground"/>
<rect x="152" y="96" width="26" height="18" rx="2" class="afc-cam"/>
<circle cx="182" cy="105" r="6" class="afc-cam"/>
<line x1="500" y1="60" x2="500" y2="120" class="afc-plane"/>
<!-- personne à 3 positions -->
<g class="afc-person"><circle cx="500" cy="80" r="5"/><line x1="500" y1="85" x2="500" y2="104"/><line x1="500" y1="104" x2="495" y2="119"/><line x1="500" y1="104" x2="505" y2="119"/><line x1="500" y1="91" x2="493" y2="99"/><line x1="500" y1="91" x2="507" y2="99"/></g>
<g class="afc-ghost"><circle cx="410" cy="80" r="5"/><line x1="410" y1="85" x2="410" y2="104"/><line x1="410" y1="104" x2="405" y2="119"/><line x1="410" y1="104" x2="415" y2="119"/></g>
<g class="afc-ghost"><circle cx="320" cy="80" r="5"/><line x1="320" y1="85" x2="320" y2="104"/><line x1="320" y1="104" x2="315" y2="119"/><line x1="320" y1="104" x2="325" y2="119"/></g>
<text x="500" y="138" class="afc-ok">net</text>
<text x="410" y="138" class="afc-ko">flou</text>
<text x="320" y="138" class="afc-ko">flou</text>
<!-- Ligne AF-C -->
<text x="20" y="192" class="afc-label">AF-C</text>
<text x="20" y="206" class="afc-sub">le point suit le sujet</text>
<line x1="150" y1="250" x2="580" y2="250" class="afc-ground"/>
<rect x="152" y="226" width="26" height="18" rx="2" class="afc-cam"/>
<circle cx="182" cy="235" r="6" class="afc-cam"/>
<line x1="500" y1="190" x2="500" y2="250" class="afc-plane" opacity="0.35"/>
<line x1="410" y1="190" x2="410" y2="250" class="afc-plane" opacity="0.65"/>
<line x1="320" y1="190" x2="320" y2="250" class="afc-plane"/>
<g class="afc-person"><circle cx="500" cy="210" r="5"/><line x1="500" y1="215" x2="500" y2="234"/><line x1="500" y1="234" x2="495" y2="249"/><line x1="500" y1="234" x2="505" y2="249"/></g>
<g class="afc-person"><circle cx="410" cy="210" r="5"/><line x1="410" y1="215" x2="410" y2="234"/><line x1="410" y1="234" x2="405" y2="249"/><line x1="410" y1="234" x2="415" y2="249"/></g>
<g class="afc-person"><circle cx="320" cy="210" r="5"/><line x1="320" y1="215" x2="320" y2="234"/><line x1="320" y1="234" x2="315" y2="249"/><line x1="320" y1="234" x2="325" y2="249"/></g>
<text x="500" y="268" class="afc-ok">net</text>
<text x="410" y="268" class="afc-ok">net</text>
<text x="320" y="268" class="afc-ok">net</text>
<text x="590" y="286" class="afc-sub" text-anchor="end">pointillés : plan de netteté</text>
</svg>
</div>

### AF-A (AI Focus) : à éviter quand on apprend

Ce mode hybride laisse l'appareil choisir entre AF-S et AF-C selon qu'il détecte du mouvement ou non. Pratique en théorie, imprévisible en pratique : vous ne savez jamais quel comportement vous allez obtenir. Choisissez vous-même.

### MF : la mise au point manuelle

La bague de l'objectif, à l'ancienne. Elle reste la meilleure solution dans trois cas où l'autofocus hésite : la macro, la nuit (et les étoiles), et à travers une vitre ou un grillage. Activez la **loupe de mise au point** (agrandissement de l'image à l'écran) et le **focus peaking** (surlignage coloré des zones nettes) si votre appareil les propose.

## Où faire le point : le choix de la zone

C'est ici que se jouent la plupart des photos ratées. En zone automatique, l'appareil choisit lui-même le sujet — en général ce qui est le plus proche, le plus contrasté ou le plus grand. Pas forcément ce que vous vouliez.

<div class="svg-illustration" style="max-width: 600px; margin: 2rem auto; display: block;">
<svg viewBox="0 0 600 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Le même portrait dessiné deux fois. En zone automatique, l'appareil fait le point sur l'arbre du fond, le visage est flou. En point unique placé sur l'œil, le visage est net et l'arbre flou.">
<style>
  .afz-title { fill: #F0EDE8; font-family: system-ui, sans-serif; font-size: 14px; font-weight: 600; text-anchor: middle; }
  .afz-frame { stroke: #F0EDE8; stroke-width: 1.5; fill: none; }
  .afz-sharp { stroke: #F0EDE8; stroke-width: 1.2; fill: none; stroke-linecap: round; }
  .afz-soft { stroke: #7A7A72; stroke-width: 3; fill: none; stroke-linecap: round; opacity: 0.35; }
  .afz-soft-in { stroke: #7A7A72; stroke-width: 1; fill: none; stroke-dasharray: 2,3; opacity: 0.7; }
  .afz-box { stroke: #F0EDE8; stroke-width: 1; fill: none; }
  .afz-boxes { stroke: #7A7A72; stroke-width: 0.8; fill: none; }
  .afz-label { fill: #F0EDE8; font-family: system-ui, sans-serif; font-size: 12px; font-weight: 600; text-anchor: middle; }
  .afz-sub { fill: #7A7A72; font-family: system-ui, sans-serif; font-size: 10px; text-anchor: middle; }
</style>
<text x="300" y="22" class="afz-title">Le même portrait, deux zones d'autofocus</text>
<!-- Vignette 1 : zone auto -->
<g transform="translate(20,40)">
  <rect x="0" y="0" width="270" height="180" class="afz-frame"/>
  <!-- arbre net -->
  <line x1="200" y1="180" x2="200" y2="70" class="afz-sharp"/>
  <ellipse cx="200" cy="55" rx="34" ry="36" class="afz-sharp"/>
  <path d="M200,110 L182,92 M200,95 L216,80" class="afz-sharp"/>
  <!-- personne floue -->
  <ellipse cx="100" cy="78" rx="26" ry="32" class="afz-soft"/>
  <ellipse cx="100" cy="78" rx="26" ry="32" class="afz-soft-in"/>
  <path d="M48,180 Q52,124 100,118 Q148,124 152,180" class="afz-soft"/>
  <path d="M48,180 Q52,124 100,118 Q148,124 152,180" class="afz-soft-in"/>
  <!-- collimateurs choisis par l'appareil -->
  <rect x="178" y="34" width="14" height="14" class="afz-box"/>
  <rect x="198" y="34" width="14" height="14" class="afz-box"/>
  <rect x="188" y="54" width="14" height="14" class="afz-box"/>
</g>
<text x="155" y="244" class="afz-label">Zone automatique</text>
<text x="155" y="260" class="afz-sub">L'appareil choisit l'arbre, plus contrasté</text>
<!-- Vignette 2 : point unique -->
<g transform="translate(310,40)">
  <rect x="0" y="0" width="270" height="180" class="afz-frame"/>
  <!-- arbre flou -->
  <line x1="200" y1="180" x2="200" y2="70" class="afz-soft"/>
  <ellipse cx="200" cy="55" rx="34" ry="36" class="afz-soft"/>
  <ellipse cx="200" cy="55" rx="34" ry="36" class="afz-soft-in"/>
  <!-- personne nette -->
  <ellipse cx="100" cy="78" rx="26" ry="32" class="afz-sharp"/>
  <path d="M88,74 L95,74 M106,74 L113,74" class="afz-sharp"/>
  <path d="M94,92 Q100,96 106,92" class="afz-sharp"/>
  <path d="M48,180 Q52,124 100,118 Q148,124 152,180" class="afz-sharp"/>
  <!-- point unique sur l'œil -->
  <rect x="85" y="67" width="14" height="14" class="afz-box"/>
</g>
<text x="445" y="244" class="afz-label">Point unique sur l'œil</text>
<text x="445" y="260" class="afz-sub">Vous choisissez : le visage est net</text>
</svg>
</div>

Les principales options, du plus précis au plus automatique :

- **Point unique (ou collimateur unique)** : un seul petit carré, que vous déplacez avec le joystick ou les flèches. Vous décidez exactement où tombe la netteté. Le meilleur choix pour apprendre, et pour tout sujet immobile.
- **Zone** : un groupe de points. L'appareil choisit à l'intérieur de la zone que vous avez placée. Utile pour un sujet en mouvement un peu imprévisible (oiseau en vol, sportif).
- **Suivi (tracking)** : vous désignez le sujet, l'appareil le suit dans tout le cadre. Excellent en AF-C sur les boîtiers récents.
- **Détection des yeux, visages, animaux** : sur les hybrides récents, l'appareil reconnaît un œil humain ou animal et fait le point dessus. Activez-la pour le portrait : c'est l'avancée la plus utile de ces dernières années.

### Pourquoi l'œil ?

En portrait, la règle est simple : **l'œil le plus proche de l'objectif doit être net.** C'est là que le regard du spectateur va en premier. Un nez net et des yeux flous donnent une photo ratée, même si l'ensemble a l'air correct en petit format.

À grande ouverture, la marge est minuscule. Avec un 50 mm à f/1.8, sur un capteur plein format, à 1,5 m du sujet, la zone nette ne fait qu'une **dizaine de centimètres** de profondeur. De quoi avoir l'œil net et l'oreille floue.

## Deux techniques à connaître

### Mémoriser puis recadrer

Placez le point central sur le sujet, enfoncez à mi-course pour faire le point (en AF-S), puis, sans relâcher, recadrez et déclenchez. Simple et efficace avec un sujet immobile et une ouverture moyenne.

Sa limite : à très grande ouverture et de près, le simple fait de pivoter l'appareil décale le plan de netteté de quelques centimètres. Dans ce cas, déplacez plutôt le collimateur sur le sujet.

### Le déclenchement par l'arrière (back-button focus)

Dans les menus, on peut retirer la mise au point du déclencheur et la confier à un bouton à l'arrière de l'appareil (souvent marqué AF-ON). Le pouce fait le point, l'index déclenche. Avantage : vous restez en AF-C en permanence, et il suffit de lâcher le pouce pour « figer » la mise au point comme en AF-S. Beaucoup de photographes animaliers et de sport ne reviennent jamais en arrière. Essayez-le une semaine avant de décider.

<div class="encadre encadre--retenir">
<p class="encadre__label">À retenir</p>

- Avant de corriger un flou, agrandissez à 100 % et cherchez ce qui est net : rien de net, c'est la vitesse ; un autre plan net, c'est la mise au point.
- **AF-S** pour ce qui ne bouge pas, **AF-C** pour ce qui bouge. Évitez AF-A.
- Pour apprendre, travaillez en **point unique** : c'est vous qui décidez où tombe la netteté.
- En portrait, faites le point sur l'œil le plus proche, ou activez la détection des yeux.
- Plus l'ouverture est grande et le sujet proche, plus la mise au point doit être précise.

</div>

## Exercices

<div class="encadre encadre--exercice">

### Exercice de ce soir : trois objets, trois distances (15 minutes)

Alignez trois objets sur une table, en diagonale par rapport à l'appareil : un à 50 cm, un à 1 m, un à 2 m. Passez en mode A, à l'ouverture la plus grande de votre objectif, en AF-S et en point unique.

1. Faites trois photos, en plaçant à chaque fois le collimateur sur un objet différent.
2. Refaites-les en zone automatique, sans rien choisir.
3. Comparez sur l'ordinateur : en zone automatique, quel objet l'appareil a-t-il choisi ? Était-ce celui que vous auriez choisi ?

</div>

<div class="encadre encadre--exercice">

### Exercice du week-end : suivre un sujet qui avance (20 minutes)

Demandez à quelqu'un de marcher vers vous depuis une dizaine de mètres, ou photographiez votre chien qui vient vers vous. Mode S à 1/500 s, rafale.

1. Une première série en **AF-S** : faites le point au départ, puis déclenchez en continu sans relâcher.
2. Une seconde série en **AF-C**, avec suivi ou détection des yeux si votre appareil le propose.

Comptez les photos nettes dans chaque série. La différence suffit généralement à convaincre pour toujours.

</div>

## La netteté, une décision

Une photo nette n'est pas une photo où « tout est net ». C'est une photo où la netteté est **là où vous l'avez décidée**. L'autofocus est un assistant remarquable, à condition de lui dire quoi regarder.

Ce soir, passez en point unique. Ce sera peut-être un peu plus lent au début. Mais chaque photo nette sera une photo que vous aurez choisie.

## Pour aller plus loin

- [Profondeur de champ : maîtriser le flou et la netteté](/formation/profondeur-de-champ)
- [Balance des blancs : obtenir des couleurs justes en toute lumière](/formation/balance-des-blancs)
