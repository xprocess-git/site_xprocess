import { BadgeParceiro, PARCEIROS } from '@entities/Parceiro';
import { RevealAoRolar } from '@shared/ui/RevealAoRolar';

export function SecaoParceiros() {
  return (
    <section id="parceiros" className="bg-card" aria-labelledby="parceiros-titulo">
      <div className="max-w-[1240px] mx-auto pt-16 sm:pt-24 pb-16 sm:pb-24 px-6 text-center">
        <RevealAoRolar>
          <h3 id="parceiros-titulo" className="text-[15px] tracking-wider uppercase opacity-60 mb-8">
            Nossos Parceiros — Integrações que Transformam Negócios
          </h3>
        </RevealAoRolar>
        <div className="flex justify-center gap-5 flex-wrap">
          {PARCEIROS.map((parceiro, index) => (
            <RevealAoRolar key={parceiro.id} delayMs={index * 80}>
              <BadgeParceiro parceiro={parceiro} />
            </RevealAoRolar>
          ))}
        </div>
      </div>
    </section>
  );
}
