import { useMemo } from 'react';
import { cn } from '@shared/lib';

export interface AvatarProps {
  name: string;
  className?: string;
}

function getInitials(name: string): string {
  const [first, second] = name.trim().split(/\s+/);
  return `${first?.[0] ?? ''}${second?.[0] ?? ''}`.toUpperCase();
}

export function Avatar({ name, className }: AvatarProps) {
  const initials = useMemo(() => getInitials(name), [name]);

  return (
    <span
      className={cn(
        'inline-flex flex-none size-10 items-center justify-center rounded-full bg-blue-tint text-navy font-heading font-semibold text-sm',
        className,
      )}
      aria-hidden="true"
    >
      {initials}
    </span>
  );
}
