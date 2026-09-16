import { useMemo } from 'react';
import { useAutoCarousel } from '@shared/hooks';
import { SITE_CONFIG } from '@shared/config/site';
import { HERO_SLIDES, type HeroSlide } from './slides';

export interface UseCarrosselHeroResult {
  activeSlide: HeroSlide;
  currentIndex: number;
  totalSlides: number;
  goToPrevious: () => void;
  goToNext: () => void;
  goToIndex: (index: number) => void;
}

export function useCarrosselHero(): UseCarrosselHeroResult {
  const totalSlides = HERO_SLIDES.length;
  const { currentIndex, goToIndex, goToNext, goToPrevious } = useAutoCarousel({
    itemCount: totalSlides,
    intervalMs: SITE_CONFIG.heroAutoplay ? SITE_CONFIG.heroIntervalMs : null,
  });

  const activeSlide = useMemo(() => HERO_SLIDES[currentIndex], [currentIndex]);

  return { activeSlide, currentIndex, totalSlides, goToPrevious, goToNext, goToIndex };
}
