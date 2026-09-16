import iconHero from '@shared/assets/icon-hero.svg';
import imgMasculinaHero from '@shared/assets/img-masculina-hero.png';
import imgMobileHero from '@shared/assets/img-mobile-hero.svg';
import type { ImagemIlustrativaFit } from '@shared/ui/ImagemIlustrativa';

export interface HeroSlide {
  title: string;
  description: string;
  image: string;
  imageFit: ImagemIlustrativaFit;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    title: 'Gestão inteligente para empresas que querem crescer',
    description:
      'O ERP da XProcess integra, automatiza e transforma sua operação em resultados reais. Controle total do seu negócio em uma única plataforma.',
    image: iconHero,
    imageFit: 'contain',
  },
  {
    title: 'Mais controle para sua operação e mais vendas',
    description:
      'Centralize processos, reduza retrabalho e tenha visão clara do que acontece no comercial, financeiro e estoque.',
    image: imgMasculinaHero,
    imageFit: 'contain',
  },
  {
    title: 'Um ERP pensado para escalar com você',
    description:
      'Automação, integração e dados organizados para apoiar o crescimento da empresa com mais previsibilidade.',
    image: imgMobileHero,
    imageFit: 'contain',
  },
];
