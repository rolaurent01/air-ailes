// Croquis interactif : balance des blancs (leçon balance-des-blancs).
// Dessin et contrôles : src/components/croquis/BalanceDesBlancs.astro
//
// --- Dominante de couleur ----------------------------------------------------
// L'écart se mesure en mireds (1 000 000 / kelvins), l'unité des filtres de
// correction : nos yeux perçoivent les écarts de couleur à peu près
// régulièrement sur cette échelle, pas en kelvins.
//     écart = 1e6 / T_lumière − 1e6 / T_appareil
//   Appareil réglé PLUS BAS que la lumière (ex. 3 000 K sous un soleil à 5 500 K) :
//     1e6/3000 > 1e6/5500 → écart négatif → l'appareil « corrige » un orange
//     qui n'existe pas → image bleue.
//   Appareil réglé PLUS HAUT (ex. 5 500 K sous une lampe à 3 000 K) :
//     écart positif → image jaune orangé.
// Le rendu applique des gains rouge / vert / bleu proportionnels à l'écart.

import { enregistrerCroquis } from './activation';
import { curseur, valeurDe, relierCurseurs, relierChoix, creerAnnonce } from './controles';

const SEUIL_JUSTE = 10; // mireds : en dessous, l'œil ne voit plus de dominante gênante
const xK = (k: number): number => 50 + (500 * (k - 1500)) / 8500;
const kelvin = (k: number): string => `${k.toLocaleString('fr-FR')} K`;
const borne = (v: number, min: number, max: number): number => Math.min(max, Math.max(min, v));

const NOMS: Record<string, string> = {
  '1900': "d'une bougie",
  '3000': "d'une lampe à incandescence",
  '5500': 'du soleil',
  '7500': "de l'ombre",
};

/**
 * Gains rouge, vert, bleu de la dominante : orangée si écart > 0 (rouge ↑, bleu ↓),
 * bleue si écart < 0 (bleu ↑, rouge ↓). Le vert baisse un peu dans les deux cas,
 * pour un orangé plutôt qu'un jaune et un bleu plutôt qu'un cyan.
 */
function gains(ecart: number): [number, number, number] {
  return [
    borne(1 + 0.0025 * ecart, 0.35, 1.6),
    borne(1 - 0.0015 * Math.abs(ecart), 0.6, 1),
    borne(1 - 0.0035 * ecart, 0.25, 1.8),
  ];
}

function expliquer(source: number, appareil: number, ecart: number): string {
  const lumiere = `${NOMS[String(source)]} (${kelvin(source)})`; // « d'une bougie (1 900 K) »
  if (Math.abs(ecart) <= SEUIL_JUSTE) {
    return `Couleurs justes : l'appareil est réglé sur ${kelvin(appareil)}, comme la lumière ${lumiere}. Le blanc reste blanc.`;
  }
  if (ecart < 0) {
    return `L'appareil est réglé plus bas (${kelvin(appareil)}) que la lumière ${lumiere} : il compense un orangé qui n'existe pas, et l'image part vers le bleu.`;
  }
  const bougie = source === 1900 && appareil === 2500
    ? " Votre appareil ne descend pas plus bas : la bougie restera orangée, et c'est souvent tant mieux."
    : '';
  return `L'appareil est réglé plus haut (${kelvin(appareil)}) que la lumière ${lumiere} : il compense un bleu qui n'existe pas, et l'image part vers le jaune orangé.${bougie}`;
}

enregistrerCroquis('balance-des-blancs', (racine, signal) => {
  const appareil = curseur(racine, 'appareil');
  const el = <T extends Element>(id: string) => racine.querySelector<T>(`#${id}`)!;
  const matrice = el<SVGFilterElement>('bdbi-dominante').querySelector('feColorMatrix')!;
  const marqueSource = el<SVGGElement>('bdbi-m-source');
  const texteSource = el<SVGTextElement>('bdbi-t-source');
  const marqueAppareil = el<SVGPolygonElement>('bdbi-m-appareil');
  const juste = el<SVGTextElement>('bdbi-juste');
  const icones = [...racine.querySelectorAll<SVGGElement>('[data-source]')];
  const annoncer = creerAnnonce(racine, signal);

  let source = 3000;

  const rendu = (): void => {
    const k = valeurDe(appareil).valeur;
    const ecart = 1e6 / source - 1e6 / k;
    const [r, g, b] = gains(ecart);
    matrice.setAttribute('values', `${r.toFixed(3)} 0 0 0 0  0 ${g.toFixed(3)} 0 0 0  0 0 ${b.toFixed(3)} 0 0  0 0 0 1 0`);

    marqueSource.setAttribute('transform', `translate(${xK(source).toFixed(1)},0)`);
    texteSource.setAttribute('x', borne(xK(source), 70, 530).toFixed(1));
    texteSource.textContent = `Lumière ${kelvin(source)}`;
    marqueAppareil.setAttribute('transform', `translate(${xK(k).toFixed(1)},-6)`);
    juste.style.display = Math.abs(ecart) <= SEUIL_JUSTE ? '' : 'none';
    icones.forEach((icone) => { icone.style.display = icone.dataset.source === String(source) ? '' : 'none'; });

    annoncer(expliquer(source, k, ecart));
  };

  relierChoix(racine, 'source', (v) => { source = Number(v); rendu(); }, signal);
  relierCurseurs([appareil], rendu, signal);
});
