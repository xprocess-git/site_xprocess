import { Briefcase, Factory, ShoppingCart } from 'lucide-react';
import type { Solucao } from './types';

export const SOLUCOES: Solucao[] = [
  {
    id: 'varejo',
    number: '01',
    name: 'Varejo',
    description:
      'Controle total de vendas e estoque com inteligência de dados para maximizar seus resultados.',
    highlights: ['Gestão de PDV', 'Controle de estoque', 'Relatórios de vendas'],
    href: '/solucoes/varejo',
    icon: ShoppingCart,
  },
  {
    id: 'industria',
    number: '02',
    name: 'Indústria',
    description:
      'Gestão de produção e eficiência operacional para otimizar cada etapa do processo produtivo.',
    highlights: ['Planejamento de produção', 'Gestão de qualidade', 'Controle de custos'],
    href: '/solucoes/industria',
    icon: Factory,
  },
  {
    id: 'servicos',
    number: '03',
    name: 'Serviços',
    description:
      'Organização e escalabilidade para empresas de serviços que buscam crescimento sustentável.',
    highlights: ['Gestão de projetos', 'Controle de horas', 'Faturamento automático'],
    href: '/solucoes/servicos',
    icon: Briefcase,
  },
];
