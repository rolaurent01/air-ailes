// Croquis interactif : profondeur de champ (leçon profondeur-de-champ).
// Dessin et curseurs : src/components/croquis/ProfondeurDeChamp.astro

import { enregistrerCroquis } from './activation';
import { curseur, valeurDe, relierCurseurs, creerAnnonce, nombre } from './controles';
import { zoneNette, flou, ecartType, qualifierFlou, appliquerFlou } from './optique';

// Formules optiques partagées : src/lib/croquis/optique.ts
const LARGEUR_SCENE = 560; // largeur du cadre de la scène dans le SVG
const ARRIERE_PLAN = 30000; // les arbres sont à 30 m

// --- Dessin ----------------------------------------------------------------
/** Position sur l'axe du schéma : échelle compressée, l'infini tient à droite. */
const xDistance = (mm: number): number => (mm === Infinity ? 575 : 60 + (515 * (mm / 1000)) / (mm / 1000 + 3));

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

  const rendu = (): void => {
    const N = valeurDe(ouverture).valeur;
    const s = valeurDe(distance).valeur * 1000;
    const premierPlan = s / 2; // les herbes sont à mi-chemin entre vous et le sujet

    const { proche, loin } = zoneNette(N, s);
    const bArriere = flou(N, s, ARRIERE_PLAN);
    const bAvant = flou(N, s, premierPlan);

    appliquerFlou(arriere, flouArriere, 'pdci-flou-arriere', ecartType(bArriere, LARGEUR_SCENE));
    appliquerFlou(avant, flouAvant, 'pdci-flou-avant', ecartType(bAvant, LARGEUR_SCENE));

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
    const plans = `Premier plan ${qualifierFlou(bAvant)}, arrière-plan ${qualifierFlou(bArriere)}.`;
    annoncer(`${valeurDe(ouverture).affichage}, sujet à ${valeurDe(distance).affichage} : ${zoneTxt} ${plans}`);
  };

  relierCurseurs([ouverture, distance], rendu, signal);
});
