import { Avatar } from '@shared/ui/Avatar';
import { Card } from '@shared/ui/Card';
import type { Depoimento } from '../model/types';

export interface CartaoDepoimentoProps {
  depoimento: Depoimento;
}

export function CartaoDepoimento({ depoimento }: CartaoDepoimentoProps) {
  return (
    <Card className="p-7 flex flex-col gap-[18px]">
      <p className="text-sm opacity-80 leading-[1.6] m-0">&ldquo;{depoimento.quote}&rdquo;</p>
      <div className="flex items-center gap-3">
        <Avatar name={depoimento.name} />
        <div>
          <div className="font-heading font-semibold text-sm">{depoimento.name}</div>
          <div className="text-xs opacity-60">{depoimento.role}</div>
        </div>
      </div>
    </Card>
  );
}
