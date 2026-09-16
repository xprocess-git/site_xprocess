import { cn } from '@shared/lib';
import { Card } from '@shared/ui/Card';
import type { Parceiro } from '../model/types';

export interface BadgeParceiroProps {
  parceiro: Parceiro;
}

export function BadgeParceiro({ parceiro }: BadgeParceiroProps) {
  return (
    <Card radius="lg" className="flex items-center justify-center px-8 py-[18px]">
      <img
        src={parceiro.logo}
        alt={parceiro.name}
        className={cn('h-7 w-auto max-w-[140px] object-contain', parceiro.logoClassName)}
      />
    </Card>
  );
}
