import { useEffect, useState } from 'react';
import { cn } from '@shared/lib';

export interface TelaCarregamentoProps {
  visible: boolean;
  onExited?: () => void;
}

const EXIT_DURATION_MS = 600;

type Phase = 'visible' | 'exiting' | 'hidden';

export function TelaCarregamento({ visible, onExited }: TelaCarregamentoProps) {
  const [phase, setPhase] = useState<Phase>(visible ? 'visible' : 'hidden');

  if (!visible && phase === 'visible') {
    setPhase('exiting');
  }

  useEffect(() => {
    if (phase !== 'exiting') return;

    const timeout = window.setTimeout(() => {
      setPhase('hidden');
      onExited?.();
    }, EXIT_DURATION_MS);

    return () => window.clearTimeout(timeout);
  }, [phase, onExited]);

  if (phase === 'hidden') return null;

  const exiting = phase === 'exiting';

  return (
    <div
      className={cn('fixed inset-0 z-[1000] pointer-events-auto', exiting && 'pointer-events-none')}
      role="status"
      aria-live="polite"
      data-exiting={exiting || undefined}
    >
      <div
        className={cn(
          'fixed left-0 right-0 top-0 h-1/2 bg-navy',
          'transition-transform duration-[600ms] ease-[cubic-bezier(0.65,0,0.35,1)] will-change-transform motion-reduce:transition-none',
          exiting && '-translate-y-full',
        )}
      />
      <div
        className={cn(
          'fixed left-0 right-0 bottom-0 h-1/2 bg-navy',
          'transition-transform duration-[600ms] ease-[cubic-bezier(0.65,0,0.35,1)] will-change-transform motion-reduce:transition-none',
          exiting && 'translate-y-full',
        )}
      />
      <div
        className={cn(
          'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] text-white transition-[opacity,transform] duration-300 ease-in-out',
          exiting ? 'opacity-0 scale-[0.7] animate-none' : 'animate-wobble motion-reduce:animate-none',
        )}
        aria-hidden="true"
      >
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
          <rect
            x="6"
            y="30"
            width="60"
            height="12"
            rx="6"
            transform="rotate(45 36 36)"
            fill="currentColor"
          />
          <rect
            x="6"
            y="30"
            width="60"
            height="12"
            rx="6"
            transform="rotate(-45 36 36)"
            fill="currentColor"
          />
        </svg>
      </div>
      <span className="sr-only">Carregando XProcess...</span>
    </div>
  );
}
