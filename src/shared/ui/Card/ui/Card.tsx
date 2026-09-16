import type { HTMLAttributes } from 'react';
import { cn } from '@shared/lib';

export type CardVariant = 'surface' | 'tint';
export type CardRadius = 'sm' | 'md' | 'lg' | 'xl';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  radius?: CardRadius;
}

const variantClasses: Record<CardVariant, string> = {
  surface: 'bg-card shadow-sm',
  tint: 'bg-blue-tint-2',
};

const radiusClasses: Record<CardRadius, string> = {
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
};

export function Card({ variant = 'surface', radius = 'sm', className, ...rest }: CardProps) {
  return <div className={cn(variantClasses[variant], radiusClasses[radius], className)} {...rest} />;
}
