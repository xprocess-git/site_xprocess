import { CarrosselControles, useCarrosselHero } from '@features/CarrosselHero';
import { cn } from '@shared/lib';
import { Badge } from '@shared/ui/Badge';
import { Button } from '@shared/ui/Button';
import { ImagemIlustrativa } from '@shared/ui/ImagemIlustrativa';

const HERO_BADGES = ['Implantação rápida', 'Suporte 24/5', '+500 empresas'];

export function Hero() {
  const { activeSlide, currentIndex, totalSlides, goToPrevious, goToNext, goToIndex } =
    useCarrosselHero();

  return (
    <section id="topo" className="max-w-[1240px] mx-auto mt-6 px-6" aria-label="Apresentação">
      <div className="grid grid-cols-[0.85fr_1.15fr] gap-12 items-center overflow-hidden py-8 px-2 max-[860px]:grid-cols-1 max-[860px]:gap-8">
        <div>
          <div className="flex flex-wrap gap-2.5 mb-6">
            {HERO_BADGES.map((badge) => (
              <Badge key={badge}>{badge}</Badge>
            ))}
          </div>
          <h1 className="text-[clamp(34px,4vw,50px)] mb-[18px]">{activeSlide.title}</h1>
          <p className="text-[17px] opacity-70 max-w-[480px] mb-8 leading-[1.6]">{activeSlide.description}</p>
          <div className="flex items-center gap-6 flex-wrap">
            <Button as="a" href="#solucoes" variant="primary" size="lg">
              Ver mais
            </Button>
            <CarrosselControles
              currentIndex={currentIndex}
              totalSlides={totalSlides}
              onPrevious={goToPrevious}
              onNext={goToNext}
              onSelect={goToIndex}
            />
          </div>
        </div>
        <ImagemIlustrativa
          key={currentIndex}
          label="Ilustração do produto"
          src={activeSlide.image}
          fit={activeSlide.imageFit}
          className={cn('animate-fade-in motion-reduce:animate-none h-[460px] max-[860px]:h-[280px]')}
        />
      </div>
    </section>
  );
}
