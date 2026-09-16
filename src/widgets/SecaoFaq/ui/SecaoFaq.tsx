import { ITENS_FAQ } from '@entities/ItemFaq';
import { AcordeaoFaq } from '@features/AcordeaoFaq';
import { Card } from '@shared/ui/Card';
import { RevealAoRolar } from '@shared/ui/RevealAoRolar';

export function SecaoFaq() {
  return (
    <section className="bg-blue-tint-2" aria-labelledby="faq-titulo">
      <div className="max-w-[1240px] mx-auto pt-16 sm:pt-24 pb-16 sm:pb-24 px-6">
        <RevealAoRolar>
          <Card radius="xl" className="py-8 px-6 sm:p-14 max-w-[820px] mx-auto">
            <div className="mb-8">
              <h2 id="faq-titulo" className="text-[32px] mb-3">
                Tire suas dúvidas sobre nosso ERP
              </h2>
              <p className="text-base opacity-70 leading-[1.6] m-0">
                Veja abaixo as respostas para as perguntas mais comuns sobre implantação, módulos e
                suporte.
              </p>
            </div>
            <AcordeaoFaq items={ITENS_FAQ} />
          </Card>
        </RevealAoRolar>
      </div>
    </section>
  );
}
