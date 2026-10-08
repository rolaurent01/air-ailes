// ---------------------------------------------------------------------------
// Croquis interactifs de la formation : amélioration progressive.
//
// Dans la leçon (Markdown), le croquis statique porte data-croquis="<nom>".
// Le gabarit de leçon rend la version interactive dans un
// <template data-croquis-modele="<nom>"> (jamais affiché par le navigateur).
// À chaque affichage de page, ce script remplace le statique par la version
// interactive, puis lance la fonction d'initialisation du croquis.
// Sans JavaScript, rien ne se passe : le croquis statique reste en place.
// ---------------------------------------------------------------------------

export type InitCroquis = (racine: HTMLElement, signal: AbortSignal) => void;

const croquis = new Map<string, InitCroquis>();
let controleur: AbortController | null = null;

/** Chaque croquis s'enregistre ici avec sa fonction d'initialisation. */
export function enregistrerCroquis(nom: string, init: InitCroquis): void {
  croquis.set(nom, init);
}

function activer(): void {
  // Nettoie les écouteurs de la page précédente (view transitions)
  controleur?.abort();
  controleur = new AbortController();
  const { signal } = controleur;

  document.querySelectorAll<HTMLElement>('[data-croquis]').forEach((statique) => {
    const nom = statique.dataset.croquis ?? '';
    const init = croquis.get(nom);
    const modele = document.querySelector<HTMLTemplateElement>(`template[data-croquis-modele="${nom}"]`);
    if (!init || !modele) return;

    const fragment = modele.content.cloneNode(true) as DocumentFragment;
    const racine = fragment.querySelector<HTMLElement>('[data-croquis-racine]');
    if (!racine) return;

    statique.replaceWith(fragment);
    init(racine, signal);
  });
}

document.addEventListener('astro:page-load', activer);
document.addEventListener('astro:before-swap', () => controleur?.abort());
