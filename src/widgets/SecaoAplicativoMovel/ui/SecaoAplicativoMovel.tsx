import { APLICATIVOS_MOVEIS, CartaoAplicativoMovel } from '@entities/AplicativoMovel';
import imgMobileMotorista from '@shared/assets/img-mobile-motorista.png';
import imgMobileVendas from '@shared/assets/img-mobile-vendas.png';
import { useAutoCarousel } from '@shared/hooks';
import { cn } from '@shared/lib';
import { ImagemIlustrativa } from '@shared/ui/ImagemIlustrativa';
import { RevealAoRolar } from '@shared/ui/RevealAoRolar';
import { TituloSecao } from '@shared/ui/TituloSecao';

const CAROUSEL_INTERVAL_MS = 5000;

const CAPTURAS_APLICATIVO = [
  { id: 'vendas', label: 'Captura do App de Vendas', image: imgMobileVendas },
  { id: 'motorista', label: 'Captura do App do Motorista', image: imgMobileMotorista },
];

export function SecaoAplicativoMovel() {
  const { currentIndex } = useAutoCarousel({
    itemCount: CAPTURAS_APLICATIVO.length,
    intervalMs: CAROUSEL_INTERVAL_MS,
  });
  const capturaAtiva = CAPTURAS_APLICATIVO[currentIndex];

  return (
    <section className="bg-card" aria-labelledby="app-movel-titulo">
      <div className="max-w-[1240px] mx-auto pt-24 pb-24 px-6 max-[640px]:pt-16 max-[640px]:pb-16">
        <div className="px-2 grid grid-cols-2 gap-12 items-center max-[860px]:grid-cols-1">
          <div>
            <RevealAoRolar>
              <TituloSecao
                eyebrow="Aplicativo móvel"
                titleId="app-movel-titulo"
                title="Controle, Venda e Acompanhe de qualquer lugar"
                className="max-w-none mb-0"
                titleClassName="text-[30px] mb-8 max-w-[440px]"
              />
            </RevealAoRolar>
            <div className="flex flex-col gap-5">
              {APLICATIVOS_MOVEIS.map((app, index) => (
                <RevealAoRolar key={app.id} delayMs={index * 80}>
                  <CartaoAplicativoMovel aplicativo={app} />
                </RevealAoRolar>
              ))}
            </div>
          </div>
          <RevealAoRolar delayMs={120}>
            <ImagemIlustrativa
              key={capturaAtiva.id}
              label={capturaAtiva.label}
              src={capturaAtiva.image}
              className={cn(
                'animate-fade-in motion-reduce:animate-none',
                'h-[620px] max-w-[400px] mx-auto w-full max-[860px]:h-[420px] max-[860px]:max-w-full',
              )}
            />
          </RevealAoRolar>
        </div>
      </div>
    </section>
  );
}
