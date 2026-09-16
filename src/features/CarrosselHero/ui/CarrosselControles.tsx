import { cn } from '@shared/lib';
import { IconButton } from '@shared/ui/IconButton';

export interface CarrosselControlesProps {
  currentIndex: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
}

export function CarrosselControles({
  currentIndex,
  totalSlides,
  onPrevious,
  onNext,
  onSelect,
}: CarrosselControlesProps) {
  return (
    <div className="flex items-center gap-3">
      <IconButton icon="chevron-left" aria-label="Slide anterior" onClick={onPrevious} />
      <div className="flex gap-1.5" role="tablist" aria-label="Selecionar slide">
        {Array.from({ length: totalSlides }, (_, index) => (
          <button
            key={index}
            type="button"
            role="tab"
            aria-selected={index === currentIndex}
            aria-label={`Ir para o slide ${index + 1}`}
            className={cn(
              'w-2 h-2 rounded-full p-0 border-none cursor-pointer bg-blue-tint-2 transition-[background-color_200ms_ease,transform_150ms_ease] hover:scale-[1.2]',
              index === currentIndex && 'bg-orange',
            )}
            onClick={() => onSelect(index)}
          />
        ))}
      </div>
      <IconButton icon="chevron-right" aria-label="Próximo slide" onClick={onNext} />
    </div>
  );
}
