import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ANIMATION_DURATION_DEFAULT,
  ANIMATION_STAGGER_DELAY,
  ANIMATION_EASING,
} from '../constants';

gsap.registerPlugin(ScrollTrigger);

type SplitMode = 'letters' | 'words';

interface TextAnimationOptions {
  mode?: SplitMode;
  duration?: number;
  staggerDelay?: number;
  distance?: number;
  scrollTrigger?: { trigger: HTMLElement; start?: string };
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
    scrollTrigger: scrollTriggerOpts,
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

  const toVars: gsap.TweenVars = {
    opacity: 1,
    y: 0,
    duration,
    stagger: staggerDelay,
    ease: ANIMATION_EASING,
  };

  if (scrollTriggerOpts) {
    toVars.scrollTrigger = {
      trigger: scrollTriggerOpts.trigger,
      start: scrollTriggerOpts.start ?? 'top bottom-=15%',
      once: true,
    };
  }

  gsap.fromTo(
    spans,
    { opacity: 0, y: distance },
    toVars,
  );
}
