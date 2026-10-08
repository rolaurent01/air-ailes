// Croquis interactif : profondeur de champ (leçon profondeur-de-champ).
// Dessin et curseurs : src/components/croquis/ProfondeurDeChamp.astro

import { enregistrerCroquis } from './activation';
import { curseur, valeurDe, relierCurseurs, creerAnnonce, nombre } from './controles';

// --- Optique (distances en mm) -------------------------------------------
// Objectif de 50 mm sur plein format, cercle de confusion c = 0,03 mm.
//   Hyperfocale       H = f² / (N·c) + f
//   Limite proche     Dp = s·(H − f) / (H + s − 2f)
//   Limite lointaine  Dl = s·(H − f) / (H − s)   (infinie si s ≥ H)
//   Flou d'un objet à la distance d, mise au point à s (diamètre sur le capteur) :
//                     b = f² / (N·(s − f)) × |d − s| / d
const FOCALE = 50;
const CERCLE = 0.03;
const LARGEUR_CAPTEUR = 36;
const LARGEUR_SCENE = 560; // largeur du cadre de la scène dans le SVG
const ARRIERE_PLAN = 30000; // les arbres sont à 30 m

function zoneNette(N: number, s: number): { proche: number; loin: number } {
  const H = (FOCALE * FOCALE) / (N * CERCLE) + FOCALE;
  const proche = (s * (H - FOCALE)) / (H + s - 2 * FOCALE);
  const loin = s < H ? (s * (H - FOCALE)) / (H - s) : Infinity;
  return { proche, loin };
}

function flou(N: number, s: number, d: number): number {
  return ((FOCALE * FOCALE) / (N * (s - FOCALE))) * (Math.abs(d - s) / d);
}

// --- Dessin ----------------------------------------------------------------
/** Position sur l'axe du schéma : échelle compressée, l'infini tient à droite. */
const xDistance = (mm: number): number => (mm === Infinity ? 575 : 60 + (515 * (mm / 1000)) / (mm / 1000 + 3));

/** Flou du capteur → écart-type du filtre SVG (0 = net, pas de filtre). */
function ecartType(b: number): number {
  if (b <= CERCLE) return 0;
  const diametre = (b / LARGEUR_CAPTEUR) * LARGEUR_SCENE;
  return Math.min(12, diametre / 2.5);
}

function qualifier(b: number): string {
  if (b <= CERCLE) return 'net';
  if (b <= 0.1) return 'presque net';
  if (b <= 0.4) return 'flou';
  return 'très flou';
}

function distanceTexte(mm: number): string {
  if (mm === Infinity) return "l'infini";
  const m = mm / 1000;
  if (m < 1) return `${nombre(Math.round(m * 100))} cm`;
  return `${nombre(m, m < 10 ? 2 : m < 100 ? 1 : 0)} m`;
}

function profondeurTexte(mm: number): string {
  if (mm === Infinity) return "jusqu'à l'infini";
  if (mm < 1000) return `soit ${nombre(Math.round(mm / 10))} cm`;
  const m = mm / 1000;
  return `soit ${(m < 10 ? Math.round(m * 10) / 10 : Math.round(m)).toLocaleString('fr-FR')} m`;
}

enregistrerCroquis('profondeur-de-champ', (racine, signal) => {
  const ouverture = curseur(racine, 'ouverture');
  const distance = curseur(racine, 'distance');
  const annoncer = creerAnnonce(racine, signal);
  const el = <T extends Element>(id: string) => racine.querySelector<T>(`#${id}`)!;

  const arriere = el<SVGGElement>('pdci-arriere');
  const avant = el<SVGGElement>('pdci-avant');
  const flouArriere = el<SVGFilterElement>('pdci-flou-arriere').querySelector('feGaussianBlur')!;
  const flouAvant = el<SVGFilterElement>('pdci-flou-avant').querySelector('feGaussianBlur')!;
  const zone = el<SVGRectElement>('pdci-zone');
  const zoneG = el<SVGLineElement>('pdci-zone-g');
  const zoneD = el<SVGLineElement>('pdci-zone-d');
  const zoneTexte = el<SVGTextElement>('pdci-zone-texte');
  const marqueAvant = el<SVGGElement>('pdci-m-avant');
  const marqueSujet = el<SVGCircleElement>('pdci-m-sujet');

  const appliquerFlou = (groupe: SVGGElement, filtre: Element, id: string, sigma: number): void => {
    if (sigma === 0) {
      groupe.removeAttribute('filter');
    } else {
      filtre.setAttribute('stdDeviation', sigma.toFixed(2));
      groupe.setAttribute('filter', `url(#${id})`);
    }
  };

  const rendu = (): void => {
    const N = valeurDe(ouverture).valeur;
    const s = valeurDe(distance).valeur * 1000;
    const premierPlan = s / 2; // les herbes sont à mi-chemin entre vous et le sujet

    const { proche, loin } = zoneNette(N, s);
    const bArriere = flou(N, s, ARRIERE_PLAN);
    const bAvant = flou(N, s, premierPlan);

    appliquerFlou(arriere, flouArriere, 'pdci-flou-arriere', ecartType(bArriere));
    appliquerFlou(avant, flouAvant, 'pdci-flou-avant', ecartType(bAvant));

    const x1 = xDistance(proche);
    const x2 = xDistance(loin);
    zone.setAttribute('x', x1.toFixed(1));
    zone.setAttribute('width', Math.max(1, x2 - x1).toFixed(1));
    zoneG.setAttribute('x1', x1.toFixed(1));
    zoneG.setAttribute('x2', x1.toFixed(1));
    zoneD.setAttribute('x1', x2.toFixed(1));
    zoneD.setAttribute('x2', x2.toFixed(1));
    zoneD.style.display = loin === Infinity ? 'none' : '';
    zoneTexte.setAttribute('x', Math.min(540, Math.max(80, (x1 + x2) / 2)).toFixed(1));
    marqueSujet.setAttribute('cx', xDistance(s).toFixed(1));
    marqueAvant.setAttribute('transform', `translate(${xDistance(premierPlan).toFixed(1)},0)`);

    const zoneTxt = loin === Infinity
      ? `zone nette de ${distanceTexte(proche)} jusqu'à l'infini.`
      : `zone nette de ${distanceTexte(proche)} à ${distanceTexte(loin)}, ${profondeurTexte(loin - proche)}.`;
    const plans = `Premier plan ${qualifier(bAvant)}, arrière-plan ${qualifier(bArriere)}.`;
    annoncer(`${valeurDe(ouverture).affichage}, sujet à ${valeurDe(distance).affichage} : ${zoneTxt} ${plans}`);
  };

  relierCurseurs([ouverture, distance], rendu, signal);
});
