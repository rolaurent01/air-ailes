// Croquis interactif : triangle d'exposition (leçon triangle-exposition).
// Dessin et contrôles : src/components/croquis/TriangleExposition.astro
//
// --- Exposition ------------------------------------------------------------
// IL (indice de lumination, EV) des réglages, ramené à ISO 100 :
//     IL_réglages = log2(N² / t) − log2(ISO / 100)
// N = nombre d'ouverture, t = temps de pose en secondes.
// Écart = IL_scène − IL_réglages.
//   écart > 0 : la scène est plus lumineuse que ce que les réglages attendent → surexposition
//   écart < 0 : sous-exposition
// Vérification (règle « f/16 au soleil ») : plein soleil IL 15, f/16, 1/125 s, ISO 100
//     log2(256 × 125) − 0 = 14,97 → écart ≈ 0. Avec ISO 200 : écart = +1 (surexposé d'un IL).
// Les curseurs utilisent les valeurs exactes (puissances de 2 par tiers) ;
// les libellés sont les valeurs arrondies affichées par les appareils.

import { enregistrerCroquis } from './activation';
import { curseur, valeurDe, relierCurseurs, relierChoix, placerCurseur, creerAnnonce, nombre } from './controles';
import { flou, ecartType, qualifierFlou, appliquerFlou } from './optique';

const LARGEUR_SCENE = 560;
const DISTANCE_SUJET = 3000; // mm : la personne (et le cycliste) sont à 3 m
const DISTANCE_FOND = 30000; // mm : les bâtiments sont à 30 m
// Cycliste à ~20 km/h (5,6 m/s) à 3 m avec un 50 mm : 5,6 × 50 / 3 ≈ 93 mm/s sur le capteur,
// soit 93 / 36 × 560 ≈ 1 450 unités du dessin par seconde.
const VITESSE_IMAGE_CYCLISTE = 1450;

const log2 = Math.log2;
export const ilReglages = (N: number, t: number, iso: number): number => log2((N * N) / t) - log2(iso / 100);

/** Arrondi au tiers d'IL, affiché comme sur un appareil : +0,3 / +0,7 / +1… */
function formatIL(ecart: number): string {
  const tiers = Math.round(ecart * 3) / 3;
  if (Math.abs(tiers) < 0.01) return '0 IL';
  const signe = tiers > 0 ? '+' : '−';
  return `${signe}${nombre(Math.abs(tiers), Number.isInteger(Math.abs(tiers)) ? 0 : 1)} IL`;
}

function qualifierExposition(ecart: number): string {
  const tiers = Math.round(ecart * 3) / 3;
  if (Math.abs(tiers) < 0.01) return 'exposition correcte';
  if (tiers > 0) return tiers <= 2 / 3 + 0.01 ? 'légèrement surexposée' : 'surexposée';
  return tiers >= -2 / 3 - 0.01 ? 'légèrement sous-exposée' : 'sous-exposée';
}

function qualifierMouvement(longueur: number): string {
  if (longueur < 2) return 'Cycliste figé';
  if (longueur < 6) return 'Cycliste légèrement flou';
  if (longueur < 20) return 'Cycliste flou de mouvement';
  return 'Cycliste traîné';
}

function qualifierBruit(iso: number): string {
  if (iso <= 200) return 'bruit très faible';
  if (iso <= 800) return 'bruit faible';
  if (iso <= 3200) return 'bruit visible';
  return 'bruit fort';
}

enregistrerCroquis('triangle-exposition', (racine, signal) => {
  const ouverture = curseur(racine, 'ouverture');
  const vitesse = curseur(racine, 'vitesse');
  const iso = curseur(racine, 'iso');
  const annoncer = creerAnnonce(racine, signal);
  const el = <T extends Element>(id: string) => racine.querySelector<T>(`#${id}`)!;

  const expo = el<SVGFilterElement>('tri-expo');
  const fonctions = [...expo.querySelectorAll('feFuncR, feFuncG, feFuncB')];
  const fond = el<SVGGElement>('tri-fond');
  const flouFond = el<SVGFilterElement>('tri-flou-fond').querySelector('feGaussianBlur')!;
  const velo = el<SVGGElement>('tri-velo');
  const flouBouge = el<SVGFilterElement>('tri-flou-bouge').querySelector('feGaussianBlur')!;
  const bruit = el<SVGRectElement>('tri-bruit-calque');
  const aiguille = el<SVGPolygonElement>('tri-aiguille');

  let scene = 15;
  let mode = 'M';
  const distanceLog = (a: number, b: number): number => Math.abs(log2(a) - log2(b));

  /** En priorité ouverture ou vitesse, l'appareil recalcule l'autre réglage pour un écart nul. */
  const appliquerMode = (): void => {
    const N = valeurDe(ouverture).valeur;
    const t = valeurDe(vitesse).valeur;
    const s = valeurDe(iso).valeur;
    const ilCible = scene + log2(s / 100); // IL que doit valoir log2(N²/t)
    if (mode === 'A') placerCurseur(vitesse, (N * N) / 2 ** ilCible, distanceLog);
    if (mode === 'S') placerCurseur(ouverture, Math.sqrt(t * 2 ** ilCible), distanceLog);

    vitesse.disabled = mode === 'A';
    ouverture.disabled = mode === 'S';
    vitesse.closest('.curseur')?.classList.toggle('is-auto', mode === 'A');
    ouverture.closest('.curseur')?.classList.toggle('is-auto', mode === 'S');
  };

  const rendu = (): void => {
    appliquerMode();
    const N = valeurDe(ouverture).valeur;
    const t = valeurDe(vitesse).valeur;
    const s = valeurDe(iso).valeur;
    const ecart = scene - ilReglages(N, t, s);

    // Luminosité : chaque IL double ou divise la lumière
    const pente = (2 ** Math.max(-4, Math.min(4, ecart))).toFixed(3);
    fonctions.forEach((f) => f.setAttribute('slope', pente));

    // Aiguille de la cellule : 60 unités par IL, bloquée un peu au-delà de ±3
    const x = 300 + 60 * Math.max(-3.3, Math.min(3.3, ecart));
    aiguille.setAttribute('transform', `translate(${(x - 300).toFixed(1)},0)`);

    // Flou de mouvement du cycliste (horizontal)
    const longueur = t * VITESSE_IMAGE_CYCLISTE;
    appliquerFlou(velo, flouBouge, 'tri-flou-bouge', longueur < 1 ? 0 : `${Math.min(40, longueur / 3).toFixed(2)} 0`);

    // Bruit : invisible à ISO 100, de plus en plus marqué jusqu'à ISO 12 800
    bruit.setAttribute('opacity', (Math.min(1, log2(s / 100) / 7) * 0.55).toFixed(3));

    // Flou d'arrière-plan selon l'ouverture
    const bFond = flou(N, DISTANCE_SUJET, DISTANCE_FOND);
    appliquerFlou(fond, flouFond, 'tri-flou-fond', ecartType(bFond, LARGEUR_SCENE));

    const sceneTxt = racine.querySelector('[data-choix="scene"] .active')?.textContent?.trim() ?? '';
    const reglages = `${valeurDe(ouverture).affichage}, ${valeurDe(vitesse).affichage}, ${valeurDe(iso).affichage}`;
    annoncer(
      `${sceneTxt} (IL ${scene}), ${reglages} : ${qualifierExposition(ecart)} (${formatIL(ecart)}). ` +
      `${qualifierMouvement(longueur)}, ${qualifierBruit(s)}, arrière-plan ${qualifierFlou(bFond)}.`,
    );
  };

  relierChoix(racine, 'scene', (v) => { scene = Number(v); rendu(); }, signal);
  relierChoix(racine, 'mode', (v) => { mode = v; rendu(); }, signal);
  relierCurseurs([ouverture, vitesse, iso], rendu, signal);
});
