// Lancé juste après `astro build` (voir package.json).
//
// Astro génère les redirections 301 de astro.config pour Vercel sous la forme
// « ^/blog/slug$ » : l'adresse avec barre finale (« /blog/slug/ »), qui était
// l'adresse canonique de l'ancien site, n'était donc pas redirigée (404).
// On élargit chaque règle /blog pour accepter les deux formes.

import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const CONFIG = '.vercel/output/config.json';

if (!existsSync(CONFIG)) {
  console.log(`[redirections] ${CONFIG} absent, rien à faire.`);
  process.exit(0);
}

const config = JSON.parse(readFileSync(CONFIG, 'utf8'));
let modifiees = 0;

for (const route of config.routes ?? []) {
  if (route.status === 301 && typeof route.src === 'string' && route.src.startsWith('^/blog') && route.src.endsWith('$') && !route.src.endsWith('/?$')) {
    route.src = `${route.src.slice(0, -1)}/?$`;
    modifiees++;
  }
}

writeFileSync(CONFIG, JSON.stringify(config, null, 2));
console.log(`[redirections] ${modifiees} redirection(s) /blog acceptent aussi la barre finale.`);
