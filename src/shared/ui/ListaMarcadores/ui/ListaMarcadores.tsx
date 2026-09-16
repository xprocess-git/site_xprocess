import { cn } from '@shared/lib';

export type ListaMarcadoresSize = 'sm' | 'md';

export interface ListaMarcadoresProps {
  items: string[];
  size?: ListaMarcadoresSize;
  className?: string;
}

const sizeClasses: Record<ListaMarcadoresSize, string> = {
  md: 'gap-2 text-[13px]',
  sm: 'gap-1.5 text-xs',
};

export function ListaMarcadores({ items, size = 'md', className }: ListaMarcadoresProps) {
  return (
    <ul className={cn('m-0 flex list-none flex-col p-0', sizeClasses[size], className)}>
      {items.map((item) => (
        <li key={item} className="flex items-baseline gap-2">
          <span className="leading-none text-orange" aria-hidden="true">
            ●
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
