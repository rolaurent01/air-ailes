import Lenis from 'lenis';

let lenisInstance: Lenis | null = null;

/**
 * Initialise Lenis pour le smooth scroll.
 * Respecte prefers-reduced-motion.
 */
export function initSmoothScroll(): Lenis | null {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return null;
  }

  if (lenisInstance) {
    lenisInstance.destroy();
  }

  lenisInstance = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    touchMultiplier: 2,
  });

  function raf(time: number): void {
    lenisInstance?.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return lenisInstance;
}

/**
 * Détruit l'instance Lenis (nettoyage).
 */
export function destroySmoothScroll(): void {
  if (lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = null;
  }
}
