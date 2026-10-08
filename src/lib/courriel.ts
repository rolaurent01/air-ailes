// Liens « Écrire un e-mail » : l'adresse n'est jamais écrite en clair dans la page
// (anti-robots). Le nom et le domaine sont dans data-courriel-nom et
// data-courriel-domaine ; le lien est masqué (hidden) tant que ce script n'a pas tourné.

function activerCourriel(): void {
  document.querySelectorAll<HTMLAnchorElement>('a[data-courriel-nom]').forEach((lien) => {
    lien.href = `mailto:${lien.dataset.courrielNom}@${lien.dataset.courrielDomaine}`;
    lien.hidden = false;
  });
}

document.addEventListener('astro:page-load', activerCourriel);
