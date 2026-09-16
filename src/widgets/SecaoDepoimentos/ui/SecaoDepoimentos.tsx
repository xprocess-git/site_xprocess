import { CartaoDepoimento, DEPOIMENTOS } from '@entities/Depoimento';
import { RevealAoRolar } from '@shared/ui/RevealAoRolar';
import { TituloSecao } from '@shared/ui/TituloSecao';

export function SecaoDepoimentos() {
  return (
    <section className="bg-blue-tint-2" aria-labelledby="depoimentos-titulo">
      <div className="max-w-[1240px] mx-auto pt-16 sm:pt-24 pb-16 sm:pb-24 px-6">
        <RevealAoRolar>
          <TituloSecao
            titleId="depoimentos-titulo"
            title="O que nossos clientes dizem"
            description="Histórias reais de empresas que transformaram sua gestão com a XProcess."
          />
        </RevealAoRolar>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
          {DEPOIMENTOS.map((depoimento, index) => (
            <RevealAoRolar key={depoimento.id} delayMs={index * 80}>
              <CartaoDepoimento depoimento={depoimento} />
            </RevealAoRolar>
          ))}
        </div>
      </div>
    </section>
  );
}
