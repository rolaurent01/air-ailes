// ---------------------------------------------------------------------------
// Aides communes aux croquis interactifs : curseurs et annonce du résultat.
// Le markup correspond aux composants Curseur.astro et CroquisInteractif.astro.
// ---------------------------------------------------------------------------

export interface EtatCurseur {
  valeur: number;
  affichage: string;
}

function lire(input: HTMLInputElement): EtatCurseur {
  const valeurs = JSON.parse(input.dataset.valeurs ?? '[]') as number[];
  const affichages = JSON.parse(input.dataset.affichages ?? '[]') as string[];
  const i = Number(input.value);
  return { valeur: valeurs[i], affichage: affichages[i] };
}

/** Le curseur nommé à l'intérieur du croquis (attribut data-curseur="<nom>"). */
export function curseur(racine: HTMLElement, nom: string): HTMLInputElement {
  const input = racine.querySelector<HTMLInputElement>(`input[data-curseur="${nom}"]`);
  if (!input) throw new Error(`Curseur « ${nom} » introuvable`);
  return input;
}

export function valeurDe(input: HTMLInputElement): EtatCurseur {
  return lire(input);
}

/**
 * Relie des curseurs à une fonction de rendu. Met à jour la valeur affichée et
 * aria-valuetext (le lecteur d'écran annonce « f/2.8 », pas « 4 »), puis
 * redessine au plus une fois par image (requestAnimationFrame) pour rester fluide.
 */
export function relierCurseurs(inputs: HTMLInputElement[], rendu: () => void, signal: AbortSignal): void {
  let demande = 0;
  const planifier = (): void => {
    if (demande) return;
    demande = requestAnimationFrame(() => {
      demande = 0;
      rendu();
    });
  };

  const majAffichage = (input: HTMLInputElement): void => {
    const { affichage } = lire(input);
    input.setAttribute('aria-valuetext', affichage);
    const sortie = input.closest('.curseur')?.querySelector('[data-curseur-valeur]');
    if (sortie) sortie.textContent = affichage;
  };

  inputs.forEach((input) => {
    majAffichage(input);
    input.addEventListener('input', () => {
      majAffichage(input);
      planifier();
    }, { signal });
  });

  signal.addEventListener('abort', () => cancelAnimationFrame(demande));
  rendu();
}

/**
 * Relie un groupe de boutons à choix unique (composant Choix.astro).
 * Retourne une fonction qui donne la valeur sélectionnée.
 */
export function relierChoix(
  racine: HTMLElement,
  nom: string,
  surChangement: (valeur: string) => void,
  signal: AbortSignal,
): () => string {
  const groupe = racine.querySelector<HTMLElement>(`[data-choix="${nom}"]`);
  if (!groupe) throw new Error(`Choix « ${nom} » introuvable`);
  const boutons = [...groupe.querySelectorAll<HTMLButtonElement>('button[data-valeur]')];
  let valeur = boutons.find((b) => b.classList.contains('active'))?.dataset.valeur ?? boutons[0].dataset.valeur ?? '';

  boutons.forEach((bouton) => {
    bouton.addEventListener('click', () => {
      valeur = bouton.dataset.valeur ?? '';
      boutons.forEach((b) => {
        b.classList.toggle('active', b === bouton);
        b.setAttribute('aria-pressed', String(b === bouton));
      });
      surChangement(valeur);
    }, { signal });
  });

  return () => valeur;
}

/** Positionne un curseur sur le cran le plus proche d'une valeur (utilisé par les modes priorité). */
export function placerCurseur(input: HTMLInputElement, cible: number, distance: (a: number, b: number) => number): void {
  const valeurs = JSON.parse(input.dataset.valeurs ?? '[]') as number[];
  let meilleur = 0;
  valeurs.forEach((v, i) => {
    if (distance(v, cible) < distance(valeurs[meilleur], cible)) meilleur = i;
  });
  input.value = String(meilleur);
  const affichages = JSON.parse(input.dataset.affichages ?? '[]') as string[];
  input.setAttribute('aria-valuetext', affichages[meilleur]);
  const sortie = input.closest('.curseur')?.querySelector('[data-curseur-valeur]');
  if (sortie) sortie.textContent = affichages[meilleur];
}

/**
 * Affiche le résultat en clair tout de suite, et l'annonce aux lecteurs d'écran
 * après une courte pause (sinon chaque cran du curseur serait lu à voix haute).
 */
export function creerAnnonce(racine: HTMLElement, signal: AbortSignal): (texte: string) => void {
  const visible = racine.querySelector<HTMLElement>('[data-croquis-resultat]');
  const vocal = racine.querySelector<HTMLElement>('[data-croquis-annonce]');
  let minuteur = 0;
  let premier = true;
  signal.addEventListener('abort', () => clearTimeout(minuteur));

  return (texte: string) => {
    if (visible) visible.textContent = texte;
    // Pas d'annonce vocale au chargement : seulement après une action du lecteur
    if (premier) {
      premier = false;
      return;
    }
    clearTimeout(minuteur);
    minuteur = window.setTimeout(() => {
      if (vocal) vocal.textContent = texte;
    }, 600);
  };
}

/** Format français d'un nombre (virgule décimale). */
export const nombre = (n: number, decimales = 0): string =>
  n.toLocaleString('fr-FR', { minimumFractionDigits: decimales, maximumFractionDigits: decimales });
