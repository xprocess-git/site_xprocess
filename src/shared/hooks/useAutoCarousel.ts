import { useCallback, useState } from 'react';
import { useInterval } from './useInterval';

export interface UseAutoCarouselOptions {
  itemCount: number;
  intervalMs?: number | null;
}

export interface UseAutoCarouselResult {
  currentIndex: number;
  goToIndex: (index: number) => void;
  goToNext: () => void;
  goToPrevious: () => void;
}

export function useAutoCarousel({
  itemCount,
  intervalMs = null,
}: UseAutoCarouselOptions): UseAutoCarouselResult {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToIndex = useCallback(
    (index: number) => {
      setCurrentIndex(((index % itemCount) + itemCount) % itemCount);
    },
    [itemCount],
  );

  const goToNext = useCallback(() => goToIndex(currentIndex + 1), [currentIndex, goToIndex]);
  const goToPrevious = useCallback(() => goToIndex(currentIndex - 1), [currentIndex, goToIndex]);

  useInterval(goToNext, itemCount > 1 ? intervalMs : null);

  return { currentIndex, goToIndex, goToNext, goToPrevious };
}
