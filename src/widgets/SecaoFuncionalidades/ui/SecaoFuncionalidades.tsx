import { CartaoFuncionalidade, FUNCIONALIDADES } from '@entities/Funcionalidade';
import { RevealAoRolar } from '@shared/ui/RevealAoRolar';
import { TituloSecao } from '@shared/ui/TituloSecao';

export function SecaoFuncionalidades() {
  return (
    <section id="funcionalidades" className="bg-blue-tint-2" aria-labelledby="funcionalidades-titulo">
      <div className="max-w-[1240px] mx-auto pt-16 sm:pt-24 pb-16 sm:pb-24 px-6">
        <RevealAoRolar>
          <TituloSecao
            titleId="funcionalidades-titulo"
            title="Funcionalidades completas"
            description="Tudo o que você precisa para gerenciar sua empresa em um único lugar."
          />
        </RevealAoRolar>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
          {FUNCIONALIDADES.map((funcionalidade, index) => (
            <RevealAoRolar key={funcionalidade.id} delayMs={index * 80}>
              <CartaoFuncionalidade funcionalidade={funcionalidade} />
            </RevealAoRolar>
          ))}
        </div>
      </div>
    </section>
  );
}
