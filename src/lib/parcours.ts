import { getCollection, type CollectionEntry } from 'astro:content';

// ---------------------------------------------------------------------------
// Parcours de formation : source unique de l'ordre pédagogique.
// Sommaire, pages module, précédent/suivant, fil d'Ariane et « Où j'en suis »
// en découlent tous. Chaque leçon se place via `module` et `ordre` dans son
// frontmatter.
// ---------------------------------------------------------------------------

export type Lecon = CollectionEntry<'formation'>;
export type Niveau = Lecon['data']['niveau'];

export interface Module {
  numero: number;
  slug: string;
  titre: string;
  intro: string;
}

export const MODULES: Module[] = [
  {
    numero: 0,
    slug: 'commencer-ici',
    titre: 'Commencer ici',
    intro: 'Comment suivre la formation, par où entrer, et le matériel dont vous avez vraiment besoin.',
  },
  {
    numero: 1,
    slug: 'comprendre-son-appareil',
    titre: 'Comprendre son appareil',
    intro: "Sortir du mode auto : exposition, netteté, couleur et format de fichier, un réglage après l'autre.",
  },
  {
    numero: 2,
    slug: 'composer',
    titre: 'Composer',
    intro: "Organiser ce qu'il y a dans le cadre pour que l'œil aille là où vous le voulez.",
  },
  {
    numero: 3,
    slug: 'la-lumiere',
    titre: 'La lumière',
    intro: 'Lire la lumière naturelle, travailler quand elle manque, puis en ajouter avec un flash.',
  },
  {
    numero: 4,
    slug: 'developper',
    titre: 'Développer',
    intro: "Passer du fichier brut à l'image finale, avec des couleurs justes.",
  },
  {
    numero: 5,
    slug: 'imprimer-et-partager',
    titre: 'Imprimer et partager',
    intro: 'Tirer, montrer et publier vos images sans mauvaise surprise.',
  },
  {
    numero: 6,
    slug: 'specialites',
    titre: 'Spécialités',
    intro: 'Appliquer tout le parcours à la macro, au paysage et au drone.',
  },
];

export const NIVEAUX: { valeur: Niveau; libelle: string }[] = [
  { valeur: 'débutant', libelle: 'Débutant' },
  { valeur: 'intermédiaire', libelle: 'Intermédiaire' },
  { valeur: 'avancé', libelle: 'Avancé' },
];

/** Les deux portes d'entrée du parcours (sommaire et page d'accueil) */
export const PORTES = [
  {
    titre: 'Je débute',
    texte: "Vous n'avez jamais quitté le mode automatique, ou vous partez de zéro. On commence par le commencement.",
    module: 0,
    croquis: '/formation/commencer-ici.svg',
  },
  {
    titre: "J'ai les bases",
    texte: 'Vous savez régler ouverture, vitesse et ISO. Passez directement à la composition.',
    module: 2,
    croquis: '/formation/composition-photo.svg',
  },
] as const;

export const URL_SOMMAIRE = '/formation';
export const URL_FIN = '/formation/fin-du-parcours';

export const urlLecon = (slug: string): string => `/formation/${slug}`;
export const urlModule = (module: Module): string => `/formation/module/${module.slug}`;

export function getModule(numero: number): Module {
  const module = MODULES.find((m) => m.numero === numero);
  if (!module) throw new Error(`Module ${numero} inconnu (voir MODULES dans src/lib/parcours.ts)`);
  return module;
}

export function libelleNiveau(niveau: Niveau): string {
  return NIVEAUX.find((n) => n.valeur === niveau)?.libelle ?? niveau;
}

/** Toutes les leçons publiées, dans l'ordre pédagogique. Le build échoue si l'ordre est ambigu. */
export async function getParcours(): Promise<Lecon[]> {
  const lecons = await getCollection('formation', (l) => l.data.published);

  const vues = new Map<string, string>();
  for (const lecon of lecons) {
    getModule(lecon.data.module);
    const cle = `${lecon.data.module}.${lecon.data.ordre}`;
    const doublon = vues.get(cle);
    if (doublon) {
      throw new Error(`Deux leçons à la même place (${cle}) : ${doublon} et ${lecon.data.slug}`);
    }
    vues.set(cle, lecon.data.slug);
  }

  return lecons.sort((a, b) => a.data.module - b.data.module || a.data.ordre - b.data.ordre);
}

export const leconsDuModule = (parcours: Lecon[], numero: number): Lecon[] =>
  parcours.filter((l) => l.data.module === numero);

/** Numéro affiché d'une leçon : sa position dans son module (1, 2, 3…) */
export function numeroDansModule(parcours: Lecon[], lecon: Lecon): number {
  return leconsDuModule(parcours, lecon.data.module).indexOf(lecon) + 1;
}

/** Temps de lecture en minutes, calculé sur le texte seul (croquis SVG et balises exclus) */
export function tempsDeLecture(lecon: Lecon): number {
  const texte = (lecon.body ?? '')
    .replace(/<svg[\s\S]*?<\/svg>/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\]\([^)]*\)/g, ' ')
    .replace(/[#*_>|`\-]/g, ' ');
  const mots = texte.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(mots / 200));
}

export function formaterDate(date: Date): string {
  return date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });
}
