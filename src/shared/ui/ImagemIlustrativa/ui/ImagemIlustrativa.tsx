import { cn } from '@shared/lib';
import { Card } from '@shared/ui/Card';

export type ImagemIlustrativaFit = 'contain' | 'cover';

export interface ImagemIlustrativaProps {
  label: string;
  src?: string;
  fit?: ImagemIlustrativaFit;
  objectPosition?: string;
  className?: string;
}

export function ImagemIlustrativa({
  label,
  src,
  fit = 'contain',
  objectPosition,
  className,
}: ImagemIlustrativaProps) {
  if (src) {
    const isCover = fit === 'cover';

    return (
      <div
        className={cn(
          'flex items-center justify-center rounded-lg overflow-hidden',
          isCover ? 'p-0' : 'p-4',
          className,
        )}
      >
        <img
          src={src}
          alt={label}
          style={objectPosition ? { objectPosition } : undefined}
          className={cn('w-full h-full', isCover ? 'object-cover object-[55%_center]' : 'object-contain')}
        />
      </div>
    );
  }

  return (
    <Card variant="tint" radius="lg" className={cn('flex items-center justify-center p-4 rounded-lg overflow-hidden', className)}>
      <span className="font-heading font-medium text-sm text-navy opacity-50 text-center p-6">{label}</span>
    </Card>
  );
}
