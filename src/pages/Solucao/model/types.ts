import type { LucideIcon } from 'lucide-react';

export interface FuncionalidadeConteudo {
  name: string;
  description: string;
}

export interface ConteudoSolucao {
  slug: string;
  icon: LucideIcon;
  badge: string;
  title: string;
  description: string;
  imagemHero?: string;
  imagemHeroLabel: string;
  imagemHeroObjectPosition?: string;
  funcionalidades: FuncionalidadeConteudo[];
  imagemDestaque?: string;
  imagemDestaqueLabel: string;
  imagemDestaqueObjectPosition?: string;
  porQueTitulo: string;
  porQueItens: string[];
  ctaTitulo: string;
}
