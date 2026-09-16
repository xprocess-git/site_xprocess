import type { ButtonHTMLAttributes } from 'react';
import type { IconName } from '@shared/types';
import { cn } from '@shared/lib';
import { Icon } from '@shared/ui/Icon';

export type IconButtonSize = 'sm' | 'md';

export interface IconButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  icon: IconName;
  'aria-label': string;
  size?: IconButtonSize;
  iconSize?: number;
}

const sizeClasses: Record<IconButtonSize, string> = {
  sm: 'w-8 h-8',
  md: 'w-9 h-9',
};

export function IconButton({
  icon,
  size = 'md',
  iconSize = 16,
  className,
  ...rest
}: IconButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        'inline-flex items-center justify-center flex-none p-0 border-0 rounded-full bg-blue-tint-2 text-navy cursor-pointer transition duration-200 hover:bg-blue-tint active:scale-[0.92] disabled:opacity-50 disabled:cursor-not-allowed',
        sizeClasses[size],
        className,
      )}
      {...rest}
    >
      <Icon name={icon} size={iconSize} />
    </button>
  );
}
