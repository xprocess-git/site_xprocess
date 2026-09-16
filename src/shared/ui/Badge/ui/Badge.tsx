import type { HTMLAttributes } from 'react';
import { cn } from '@shared/lib';

export type BadgeVariant = 'tint' | 'tag';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantClasses: Record<BadgeVariant, string> = {
  tint: 'text-xs font-medium py-1.5 px-3.5 bg-blue-tint-2 text-navy',
  tag: 'text-[11px] py-1 px-2.5 bg-white text-navy',
};

export function Badge({ variant = 'tint', className, ...rest }: BadgeProps) {
  return (
    <span
      className={cn('inline-flex items-center rounded-md leading-[1.3]', variantClasses[variant], className)}
      {...rest}
    />
  );
}
