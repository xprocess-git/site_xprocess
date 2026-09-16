import { useEffect, useRef, useState } from 'react';

export interface UseRevealOnScrollOptions {
  threshold?: number;
  rootMargin?: string;
}

export interface UseRevealOnScrollResult<T extends HTMLElement> {
  ref: React.RefObject<T | null>;
  isVisible: boolean;
}

export function useRevealOnScroll<T extends HTMLElement>(
  options: UseRevealOnScrollOptions = {},
): UseRevealOnScrollResult<T> {
  const { threshold = 0.2, rootMargin = '0px 0px -80px 0px' } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(() => typeof IntersectionObserver === 'undefined');

  useEffect(() => {
    const element = ref.current;
    if (!element || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, isVisible };
}
