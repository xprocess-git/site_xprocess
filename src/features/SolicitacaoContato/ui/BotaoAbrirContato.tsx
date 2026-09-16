import { Button } from '@shared/ui/Button';

export interface BotaoAbrirContatoProps {
  onOpen: () => void;
  className?: string;
}

export function BotaoAbrirContato({ onOpen, className }: BotaoAbrirContatoProps) {
  return (
    <Button variant="primary" size="sm" onClick={onOpen} className={className}>
      Ligamos para você
    </Button>
  );
}
