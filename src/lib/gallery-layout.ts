/**
 * Mise en page de la galerie : découpe en rangées, sans changer l'ordre.
 *
 * L'ordre vient de gallery-mix.ts. Ici, les photos sont regroupées en rangées
 * successives (lecture de gauche à droite, de haut en bas). Dans une rangée,
 * toutes les photos ont la même hauteur et remplissent la largeur : chaque
 * photo prend une largeur proportionnelle à son format, donc un paysage (3:2)
 * est 2,25 fois plus large qu'un portrait (2:3). Aucune photo n'est recadrée.
 *
 * Le rythme est volontairement irrégulier :
 *  - les rangées visent tour à tour des « poids » différents (somme des formats),
 *    ce qui donne des hauteurs de rangée différentes ;
 *  - une photo en paysage marquée `grid_size: wide` occupe une rangée seule ;
 *  - un portrait marqué `grid_size: wide` forme une mosaïque : le portrait en
 *    grand, et les deux paysages suivants empilés à côté.
 * La découpe est déterministe : les mêmes photos donnent toujours la même page.
 */

export interface PhotoMiseEnPage {
  orientation?: string;
  grid_size?: string;
}

export interface Rangee<T> {
  type: 'rangee' | 'mosaique';
  photos: T[];
  /** Somme des formats (largeur / hauteur) des photos de la rangée */
  somme: number;
}

export const format = (p: PhotoMiseEnPage): number => (p.orientation === 'portrait' ? 2 / 3 : 3 / 2);

const estPaysage = (p: PhotoMiseEnPage): boolean => p.orientation !== 'portrait';
const estMiseEnAvant = (p: PhotoMiseEnPage): boolean => p.grid_size === 'wide';

/** Poids visés tour à tour : ~2,2 (rangée haute) à ~3,7 (rangée basse). */
const CIBLES = [2.2, 3.0, 3.7, 2.5, 3.2, 2.0, 2.9];
const MAX_PAR_RANGEE = 3;

export function composerRangees<T extends { data: PhotoMiseEnPage }>(photos: T[]): Rangee<T>[] {
  const rangees: Rangee<T>[] = [];
  let i = 0;
  let tour = 0;

  const somme = (liste: T[]): number => liste.reduce((s, p) => s + format(p.data), 0);

  while (i < photos.length) {
    const p = photos[i];

    // Paysage mis en avant : une rangée à lui seul
    if (estMiseEnAvant(p.data) && estPaysage(p.data)) {
      rangees.push({ type: 'rangee', photos: [p], somme: format(p.data) });
      i++;
      continue;
    }

    // Portrait mis en avant suivi de deux paysages ordinaires : mosaïque
    const suivantes = photos.slice(i + 1, i + 3);
    if (
      estMiseEnAvant(p.data) && !estPaysage(p.data) && suivantes.length === 2 &&
      suivantes.every((s) => estPaysage(s.data) && !estMiseEnAvant(s.data))
    ) {
      rangees.push({ type: 'mosaique', photos: [p, ...suivantes], somme: 0 });
      i += 3;
      continue;
    }

    // Rangée ordinaire : on ajoute des photos tant qu'on se rapproche du poids visé
    const cible = CIBLES[tour++ % CIBLES.length];
    const rangee: T[] = [];
    let s = 0;
    while (i < photos.length && rangee.length < MAX_PAR_RANGEE) {
      const q = photos[i];
      const r = format(q.data);
      const qEstVedette = estMiseEnAvant(q.data) && (estPaysage(q.data) || rangee.length > 0);
      // Une photo mise en avant commence toujours sa propre rangée
      if (rangee.length > 0 && qEstVedette) break;
      // Jamais un portrait seul (trop haut) : on complète, sinon on s'arrête au plus près du poids visé
      const portraitSeul = rangee.length === 1 && !estPaysage(rangee[0].data);
      if (rangee.length > 0 && !portraitSeul && Math.abs(s + r - cible) >= Math.abs(s - cible)) break;
      rangee.push(q);
      s += r;
      i++;
      if (estMiseEnAvant(q.data)) break;
    }
    rangees.push({ type: 'rangee', photos: rangee, somme: s });
  }

  // Une photo ordinaire restée seule (souvent juste avant une photo mise en avant) rejoint
  // la rangée voisine : seules les photos mises en avant ont droit à une rangée pour elles.
  // L'ordre ne change pas, puisque les rangées sont voisines.
  const accueille = (r: Rangee<T> | undefined): r is Rangee<T> =>
    !!r && r.type === 'rangee' && r.photos.length < MAX_PAR_RANGEE && !r.photos.some((p) => estMiseEnAvant(p.data));
  for (let k = 0; k < rangees.length; k++) {
    const r = rangees[k];
    if (r.type !== 'rangee' || r.photos.length !== 1 || estMiseEnAvant(r.photos[0].data)) continue;
    const avant = rangees[k - 1];
    const apres = rangees[k + 1];
    if (accueille(avant)) {
      avant.photos.push(r.photos[0]);
      avant.somme = somme(avant.photos);
    } else if (accueille(apres)) {
      apres.photos.unshift(r.photos[0]);
      apres.somme = somme(apres.photos);
    } else {
      continue;
    }
    rangees.splice(k, 1);
    k--;
  }

  return rangees;
}
