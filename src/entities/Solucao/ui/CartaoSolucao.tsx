import { ArrowRight } from 'lucide-react';
import { Button } from '@shared/ui/Button';
import { Card } from '@shared/ui/Card';
import { ListaMarcadores } from '@shared/ui/ListaMarcadores';
import type { Solucao } from '../model/types';

export interface CartaoSolucaoProps {
  solucao: Solucao;
}

export function CartaoSolucao({ solucao }: CartaoSolucaoProps) {
  const IconeSolucao = solucao.icon;

  return (
    <Card className="p-8 flex flex-col gap-[18px] transition-transform duration-200 [transition-timing-function:ease] hover:-translate-y-1">
      <div
        className="flex items-center justify-center w-12 h-12 rounded-sm bg-blue-tint-2 text-orange"
        aria-hidden="true"
      >
        <IconeSolucao size={22} />
      </div>
      <h3 className="text-[22px]">{solucao.name}</h3>
      <p className="text-sm opacity-70 leading-[1.6] m-0">{solucao.description}</p>
      <ListaMarcadores items={solucao.highlights} size="md" />
      <Button as="a" href={solucao.href} variant="link" className="mt-auto">
        Saiba mais <ArrowRight size={16} aria-hidden="true" />
      </Button>
    </Card>
  );
}
