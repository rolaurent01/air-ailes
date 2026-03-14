import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ANIMATION_DURATION_DEFAULT,
  ANIMATION_STAGGER_DELAY,
  ANIMATION_EASING,
} from '../constants';

gsap.registerPlugin(ScrollTrigger);

interface StaggerOptions {
  duration?: number;
  staggerDelay?: number;
  distance?: number;
}

/**
 * Anime un groupe d'éléments avec un décalage (stagger).
 * Idéal pour les grilles de photos et les textes en cascade.
 * Respecte prefers-reduced-motion.
 */
export function stagger(elements: HTMLElement[], options: StaggerOptions = {}): void {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.set(elements, { opacity: 1 });
    return;
  }

  if (elements.length === 0) return;

  const {
    duration = ANIMATION_DURATION_DEFAULT,
    staggerDelay = ANIMATION_STAGGER_DELAY,
    distance = 40,
  } = options;

  gsap.fromTo(
    elements,
    { opacity: 0, y: distance },
    {
      opacity: 1,
      y: 0,
      duration,
      stagger: staggerDelay,
      ease: ANIMATION_EASING,
      scrollTrigger: {
        trigger: elements[0],
        start: 'top 85%',
        once: true,
      },
    }
  );
}
