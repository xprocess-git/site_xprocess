import { Card } from '@shared/ui/Card';
import { ListaMarcadores } from '@shared/ui/ListaMarcadores';
import type { Funcionalidade } from '../model/types';

export interface CartaoFuncionalidadeProps {
  funcionalidade: Funcionalidade;
}

export function CartaoFuncionalidade({ funcionalidade }: CartaoFuncionalidadeProps) {
  const IconeFuncionalidade = funcionalidade.icon;

  return (
    <Card className="p-7 flex flex-col gap-[14px] transition-transform duration-200 [transition-timing-function:ease] hover:-translate-y-1">
      <div
        className="flex items-center justify-center w-11 h-11 rounded-[13px] bg-blue-tint-2 text-orange"
        aria-hidden="true"
      >
        <IconeFuncionalidade size={20} />
      </div>
      <h3 className="text-[19px]">{funcionalidade.name}</h3>
      <p className="text-[13px] opacity-70 leading-[1.6] m-0">{funcionalidade.description}</p>
      <ListaMarcadores items={funcionalidade.highlights} size="sm" />
    </Card>
  );
}
