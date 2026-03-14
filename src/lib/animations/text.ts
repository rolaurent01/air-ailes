import { gsap } from 'gsap';
import {
  ANIMATION_DURATION_DEFAULT,
  ANIMATION_STAGGER_DELAY,
  ANIMATION_EASING,
} from '../constants';

type SplitMode = 'letters' | 'words';

interface TextAnimationOptions {
  mode?: SplitMode;
  duration?: number;
  staggerDelay?: number;
  distance?: number;
}

/**
 * Anime un titre lettre par lettre ou mot par mot.
 * Split le texte en spans, anime avec stagger.
 * Respecte prefers-reduced-motion.
 */
export function animateText(element: HTMLElement, options: TextAnimationOptions = {}): void {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const {
    mode = 'letters',
    duration = ANIMATION_DURATION_DEFAULT,
    staggerDelay = ANIMATION_STAGGER_DELAY,
    distance = 30,
  } = options;

  const text = element.textContent ?? '';
  element.textContent = '';
  element.setAttribute('aria-label', text);

  const fragments: string[] =
    mode === 'letters' ? text.split('') : text.split(/(\s+)/);

  fragments.forEach((fragment) => {
    const span = document.createElement('span');
    span.style.display = 'inline-block';
    span.style.overflow = 'hidden';
    span.setAttribute('aria-hidden', 'true');

    if (fragment === ' ' || /^\s+$/.test(fragment)) {
      span.innerHTML = '&nbsp;';
    } else {
      span.textContent = fragment;
    }

    element.appendChild(span);
  });

  const spans = element.querySelectorAll<HTMLElement>('span');

  gsap.fromTo(
    spans,
    { opacity: 0, y: distance },
    {
      opacity: 1,
      y: 0,
      duration,
      stagger: staggerDelay,
      ease: ANIMATION_EASING,
    }
  );
}
