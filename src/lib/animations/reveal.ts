import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ANIMATION_DURATION_DEFAULT, ANIMATION_EASING } from '../constants';

gsap.registerPlugin(ScrollTrigger);

type RevealDirection = 'up' | 'left' | 'right';

interface RevealOptions {
  direction?: RevealDirection;
  duration?: number;
  delay?: number;
  distance?: number;
}

/**
 * Anime un élément en reveal au scroll (opacity + translateY/X).
 * Respecte prefers-reduced-motion.
 */
export function reveal(element: HTMLElement, options: RevealOptions = {}): void {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.set(element, { opacity: 1 });
    return;
  }

  const {
    direction = 'up',
    duration = ANIMATION_DURATION_DEFAULT,
    delay = 0,
    distance = 60,
  } = options;

  const fromVars: gsap.TweenVars = { opacity: 0 };

  switch (direction) {
    case 'up':
      fromVars.y = distance;
      break;
    case 'left':
      fromVars.x = distance;
      break;
    case 'right':
      fromVars.x = -distance;
      break;
  }

  gsap.fromTo(element, fromVars, {
    opacity: 1,
    x: 0,
    y: 0,
    duration,
    delay,
    ease: ANIMATION_EASING,
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      once: true,
    },
  });
}
