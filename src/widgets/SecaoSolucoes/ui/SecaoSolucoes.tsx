import { CartaoSolucao, SOLUCOES } from '@entities/Solucao';
import { RevealAoRolar } from '@shared/ui/RevealAoRolar';
import { TituloSecao } from '@shared/ui/TituloSecao';

export function SecaoSolucoes() {
  return (
    <section id="solucoes" className="bg-card" aria-labelledby="solucoes-titulo">
      <div className="max-w-[1240px] mx-auto pt-16 sm:pt-24 pb-16 sm:pb-24 px-6">
        <RevealAoRolar>
          <TituloSecao
            titleId="solucoes-titulo"
            title="Soluções para cada segmento"
            description="Entendemos que cada negócio é único. Por isso, oferecemos soluções personalizadas para diferentes setores."
          />
        </RevealAoRolar>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-7">
          {SOLUCOES.map((solucao, index) => (
            <RevealAoRolar key={solucao.id} delayMs={index * 80}>
              <CartaoSolucao solucao={solucao} />
            </RevealAoRolar>
          ))}
        </div>
      </div>
    </section>
  );
}
