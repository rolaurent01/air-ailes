// ---------------------------------------------------------------------------
// Formules optiques partagées par les croquis interactifs (distances en mm).
// Objectif de 50 mm sur plein format, cercle de confusion c = 0,03 mm.
//
//   Hyperfocale       H = f² / (N·c) + f
//   Limite proche     Dp = s·(H − f) / (H + s − 2f)
//   Limite lointaine  Dl = s·(H − f) / (H − s)   (infinie si s ≥ H)
//   Flou d'un objet à la distance d, mise au point à s (diamètre sur le capteur) :
//                     b = f² / (N·(s − f)) × |d − s| / d
// ---------------------------------------------------------------------------

export const FOCALE = 50;
export const CERCLE = 0.03;
const LARGEUR_CAPTEUR = 36;

export function zoneNette(N: number, s: number): { proche: number; loin: number } {
  const H = (FOCALE * FOCALE) / (N * CERCLE) + FOCALE;
  const proche = (s * (H - FOCALE)) / (H + s - 2 * FOCALE);
  const loin = s < H ? (s * (H - FOCALE)) / (H - s) : Infinity;
  return { proche, loin };
}

export function flou(N: number, s: number, d: number): number {
  return ((FOCALE * FOCALE) / (N * (s - FOCALE))) * (Math.abs(d - s) / d);
}

/**
 * Flou sur le capteur → écart-type d'un filtre SVG feGaussianBlur, pour une
 * scène dessinée sur `largeurScene` unités. 0 = net (on retire alors le filtre).
 */
export function ecartType(b: number, largeurScene: number): number {
  if (b <= CERCLE) return 0;
  const diametre = (b / LARGEUR_CAPTEUR) * largeurScene;
  return Math.min(12, diametre / 2.5);
}

export function qualifierFlou(b: number): string {
  if (b <= CERCLE) return 'net';
  if (b <= 0.1) return 'presque net';
  if (b <= 0.4) return 'flou';
  return 'très flou';
}

/** Applique un flou à un groupe SVG, ou retire le filtre si l'écart-type est nul. */
export function appliquerFlou(groupe: SVGGElement, filtre: Element, id: string, ecart: number | string): void {
  if (ecart === 0 || ecart === '0') {
    groupe.removeAttribute('filter');
  } else {
    filtre.setAttribute('stdDeviation', typeof ecart === 'number' ? ecart.toFixed(2) : ecart);
    groupe.setAttribute('filter', `url(#${id})`);
  }
}
