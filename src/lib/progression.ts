// ---------------------------------------------------------------------------
// Suivi de progression de la formation, mémorisé dans le navigateur.
// Pas de compte : une simple liste de leçons faites dans localStorage.
// Si le stockage est indisponible (navigation privée, cookies bloqués…),
// tout fonctionne normalement, simplement sans mémoire.
//
// Marquage HTML :
//   data-progression-case="<slug>"    case à cocher « J'ai fait l'exercice »
//   data-progression-slug="<slug>"    élément qui reçoit la classe is-fait
//   data-progression-compte           reçoit le nombre de leçons faites
// ---------------------------------------------------------------------------

const CLE = 'air-ailes:formation:faites';

function lire(): Set<string> {
  try {
    const brut = window.localStorage.getItem(CLE);
    const liste: unknown = brut ? JSON.parse(brut) : [];
    return new Set(Array.isArray(liste) ? liste.filter((s): s is string => typeof s === 'string') : []);
  } catch {
    return new Set();
  }
}

function ecrire(faites: Set<string>): void {
  try {
    window.localStorage.setItem(CLE, JSON.stringify([...faites]));
  } catch {
    // Stockage indisponible : la case reste cochée pour cette visite seulement.
  }
}

function afficher(faites: Set<string>): void {
  document.querySelectorAll<HTMLElement>('[data-progression-slug]').forEach((el) => {
    el.classList.toggle('is-fait', faites.has(el.dataset.progressionSlug ?? ''));
  });
  document.querySelectorAll<HTMLInputElement>('[data-progression-case]').forEach((input) => {
    input.checked = faites.has(input.dataset.progressionCase ?? '');
  });
  document.querySelectorAll<HTMLElement>('[data-progression-compte]').forEach((el) => {
    const slugs = (el.dataset.progressionCompte ?? '').split(',').filter(Boolean);
    el.textContent = String(slugs.filter((s) => faites.has(s)).length);
  });
}

export function initProgression(): void {
  const faites = lire();
  afficher(faites);

  document.querySelectorAll<HTMLInputElement>('[data-progression-case]').forEach((input) => {
    input.addEventListener('change', () => {
      const slug = input.dataset.progressionCase;
      if (!slug) return;
      if (input.checked) faites.add(slug);
      else faites.delete(slug);
      ecrire(faites);
      afficher(faites);
    });
  });
}
