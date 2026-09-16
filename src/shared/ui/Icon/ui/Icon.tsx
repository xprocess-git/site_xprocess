import { ChevronLeft, ChevronRight, Menu, X, type LucideProps } from 'lucide-react';
import type { IconName } from '@shared/types';

export interface IconProps extends Omit<LucideProps, 'ref'> {
  name: IconName;
}

const ICON_COMPONENTS: Record<IconName, typeof ChevronLeft> = {
  'chevron-left': ChevronLeft,
  'chevron-right': ChevronRight,
  close: X,
  menu: Menu,
};

export function Icon({ name, size = 20, 'aria-hidden': ariaHidden = true, ...rest }: IconProps) {
  const IconComponent = ICON_COMPONENTS[name];
  return <IconComponent size={size} aria-hidden={ariaHidden} {...rest} />;
}
