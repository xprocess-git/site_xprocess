import { Button } from '@shared/ui/Button';

export function PaginaNaoEncontrada() {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center text-center gap-4 py-24 px-6 max-w-[560px] mx-auto">
      <p className="text-xs font-semibold tracking-[0.08em] uppercase text-orange">Página em construção</p>
      <h1 className="text-[32px]">Ainda estamos preparando este conteúdo</h1>
      <p className="text-base opacity-70 leading-[1.6] m-0">
        Esta página faz parte da experiência completa da XProcess e será publicada em breve.
        Enquanto isso, volte para a página inicial.
      </p>
      <Button as="a" href="/" variant="primary" size="lg">
        Voltar para o início
      </Button>
    </main>
  );
}
