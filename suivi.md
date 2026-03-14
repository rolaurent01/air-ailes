# Suivi du projet Air-Ailes

---

## [2026-03-14 14:25] — Setup complet Phase 1A + 1B (étapes 1.1 à 1.6)

**Type :** `feature`
**Phase :** `1-setup`, `1-design`
**Fichiers concernés :** `astro.config.mjs`, `tsconfig.json`, `.gitignore`, `.env.example`, `src/lib/cloudinary.ts`, `src/lib/constants.ts`, `src/types/photo.ts`, `src/styles/global.css`, `src/lib/animations/reveal.ts`, `src/lib/animations/stagger.ts`, `src/lib/animations/text.ts`, `src/lib/animations/smooth-scroll.ts`, `src/components/Header.astro`, `src/components/Footer.astro`, `src/layouts/BaseLayout.astro`, `src/pages/index.astro`

### Description
Initialisation complète du projet Astro avec design system, animations et navigation.

### Détails techniques
- Projet Astro initialisé avec TypeScript strict et adapter Vercel
- Arborescence complète conforme à CONTEXT.md
- Helpers Cloudinary : `getImageUrl`, `getThumbUrl`, `getWebUrl`, `getOriginalUrl` avec transformations dynamiques
- Constantes centralisées dans `constants.ts` (breakpoints, durées, easings, liens nav, réseaux sociaux)
- Types TypeScript : interfaces `Photo`, `Gallery`, `VideoEmbed`, `BlogPost`
- Design system CSS : reset, variables (couleurs, typo, espacements, animations), font Outfit 300/400
- Animations GSAP : reveal au scroll, stagger pour grilles, animation texte lettre/mot, smooth scroll Lenis
- Toutes les animations respectent `prefers-reduced-motion`
- Header fixe avec fond transparent → semi-opaque au scroll, hamburger mobile avec menu plein écran animé en cascade
- Footer minimaliste avec copyright et icônes SVG (Instagram, TikTok)
- BaseLayout avec ClientRouter (View Transitions Astro 5), Lenis, meta tags
- Page d'accueil temporaire : titre "Air-Ailes" animé lettre par lettre, sous-titre fade-up, scroll indicator animé
- Dépendances : `@astrojs/vercel`, `gsap`, `lenis`
- Build vérifié : `npm run build` passe sans erreur

---
