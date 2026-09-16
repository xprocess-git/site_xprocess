import { Badge } from '@shared/ui/Badge';
import { Card } from '@shared/ui/Card';
import type { AplicativoMovel } from '../model/types';

export interface CartaoAplicativoMovelProps {
  aplicativo: AplicativoMovel;
}

export function CartaoAplicativoMovel({ aplicativo }: CartaoAplicativoMovelProps) {
  return (
    <Card variant="tint" radius="md" className="py-5 px-6">
      <h4 className="text-base mb-2">{aplicativo.name}</h4>
      <p className="text-[13px] opacity-70 mb-2.5 leading-normal">{aplicativo.description}</p>
      <div className="flex flex-wrap gap-2">
        {aplicativo.highlights.map((item) => (
          <Badge key={item} variant="tag">
            {item}
          </Badge>
        ))}
      </div>
    </Card>
  );
}
