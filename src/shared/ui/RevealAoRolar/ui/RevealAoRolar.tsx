import type { HTMLAttributes, ReactNode } from 'react';
import { useRevealOnScroll } from '@shared/hooks';
import { cn } from '@shared/lib';

export interface RevealAoRolarProps extends HTMLAttributes<HTMLDivElement> {
  delayMs?: number;
  children: ReactNode;
}

export function RevealAoRolar({ delayMs = 0, className, style, children, ...rest }: RevealAoRolarProps) {
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        'flex flex-col [&>*]:[flex:1_1_auto] transition-[opacity,transform] duration-700 ease-in-out will-change-[opacity,transform] motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
        className,
      )}
      style={{ ...style, transitionDelay: delayMs ? `${delayMs}ms` : undefined }}
      {...rest}
    >
      {children}
    </div>
  );
}
