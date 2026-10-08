/**
 * Ordre de la galerie : mélange déterministe des photos.
 *
 * Les photos arrivent par séries (une sortie = plusieurs photos du même jour,
 * souvent même lumière, même lieu, même orientation). Triées par nom de fichier,
 * elles s'empilent en blocs dans les colonnes du masonry.
 *
 * Ce mélange espace au maximum les photos d'une même journée et d'un même
 * voyage, et alterne paysage / portrait. Il est déterministe : le même jeu de
 * photos donne toujours le même ordre, et les nouvelles photos s'intercalent
 * d'elles-mêmes sans rien régler à la main.
 */

export interface MixablePhoto {
  date?: Date;
  orientation?: string;
  display_order: number;
}

/** Deux photos à moins de TRIP_GAP_DAYS jours d'écart font partie du même voyage. */
const TRIP_GAP_DAYS = 3;
const DAY_MS = 24 * 60 * 60 * 1000;

function dayKey(photo: MixablePhoto, fallback: number): string {
  return photo.date ? photo.date.toISOString().slice(0, 10) : `undated-${fallback}`;
}

export function mixGallery<T extends { data: MixablePhoto }>(photos: T[]): T[] {
  if (photos.length < 3) return [...photos];

  const byOrder = [...photos].sort((a, b) => a.data.display_order - b.data.display_order);

  // Journée de prise de vue de chaque photo
  const day = new Map<T, string>();
  byOrder.forEach((p, i) => day.set(p, dayKey(p.data, i)));

  // Voyages : journées consécutives à moins de TRIP_GAP_DAYS jours d'écart
  const trip = new Map<T, number>();
  const dated = byOrder.filter((p) => p.data.date)
    .sort((a, b) => a.data.date!.getTime() - b.data.date!.getTime());
  let tripId = 0;
  dated.forEach((p, i) => {
    if (i > 0 && p.data.date!.getTime() - dated[i - 1].data.date!.getTime() > TRIP_GAP_DAYS * DAY_MS) tripId++;
    trip.set(p, tripId);
  });
  byOrder.filter((p) => !p.data.date).forEach((p) => trip.set(p, ++tripId));

  const remainingDay = new Map<string, number>();
  const remainingTrip = new Map<number, number>();
  for (const p of byOrder) {
    remainingDay.set(day.get(p)!, (remainingDay.get(day.get(p)!) ?? 0) + 1);
    remainingTrip.set(trip.get(p)!, (remainingTrip.get(trip.get(p)!) ?? 0) + 1);
  }

  const orientationTotal = new Map<string, number>();
  for (const p of byOrder) {
    const o = p.data.orientation ?? 'landscape';
    orientationTotal.set(o, (orientationTotal.get(o) ?? 0) + 1);
  }
  const orientationPlaced = new Map<string, number>();
  const columnLength = Math.ceil(photos.length / 3);

  const place = (p: T): void => {
    result.push(p);
    remainingDay.set(day.get(p)!, remainingDay.get(day.get(p)!)! - 1);
    remainingTrip.set(trip.get(p)!, remainingTrip.get(trip.get(p)!)! - 1);
    const o = p.data.orientation ?? 'landscape';
    orientationPlaced.set(o, (orientationPlaced.get(o) ?? 0) + 1);
  };

  // La première photo reste celle choisie en tête (display_order le plus bas)
  const result: T[] = [];
  place(byOrder[0]);
  const pool = byOrder.slice(1);

  while (pool.length > 0) {
    let best = 0;
    let bestScore = -Infinity;

    pool.forEach((candidate, i) => {
      let score = 0;

      // Écarter les photos d'une même journée, puis d'un même voyage
      for (let back = 1; back <= Math.min(8, result.length); back++) {
        const previous = result[result.length - back];
        if (day.get(previous) === day.get(candidate)) score -= 400 / back;
        if (trip.get(previous) === trip.get(candidate)) score -= 60 / back;
      }

      // Voisines de gauche dans le masonry 3 colonnes (rempli colonne par colonne)
      for (const offset of [columnLength, columnLength * 2]) {
        for (let j = result.length - offset - 2; j <= result.length - offset + 2; j++) {
          if (j >= 0 && day.get(result[j]) === day.get(candidate)) score -= 150;
        }
      }

      // Répartir paysages et portraits au prorata, pour éviter une fin de galerie toute en paysages
      const orientation = candidate.data.orientation ?? 'landscape';
      const expected = ((result.length + 1) * orientationTotal.get(orientation)!) / photos.length;
      score += (expected - (orientationPlaced.get(orientation) ?? 0)) * 60;
      const last = result[result.length - 1];
      const beforeLast = result[result.length - 2];
      if (last.data.orientation === orientation && beforeLast?.data.orientation === orientation) score -= 80;

      // Puiser d'abord dans les grosses séries, pour ne pas les retrouver groupées à la fin
      score += remainingDay.get(day.get(candidate)!)! * 12 + remainingTrip.get(trip.get(candidate)!)! * 2;

      if (score > bestScore) {
        bestScore = score;
        best = i;
      }
    });

    place(pool.splice(best, 1)[0]);
  }

  return result;
}
