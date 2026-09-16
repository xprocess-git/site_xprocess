import { Cog, TrendingUp, Truck, Wallet } from 'lucide-react';
import type { Funcionalidade } from './types';

export const FUNCIONALIDADES: Funcionalidade[] = [
  {
    id: 'financeiro',
    name: 'Financeiro',
    description:
      'Controle completo de contas a pagar e receber, fluxo de caixa e conciliação bancária.',
    highlights: [
      'Contas a pagar/receber',
      'Fluxo de caixa',
      'Conciliação bancária',
      'Relatórios financeiros',
    ],
    icon: Wallet,
  },
  {
    id: 'logistica',
    name: 'Logística',
    description: 'Gestão inteligente de inventário com alertas automáticos e controle de validade.',
    highlights: [
      'Controle de inventário',
      'Alertas automáticos',
      'Controle de validade',
      'Relatórios de estoque',
    ],
    icon: Truck,
  },
  {
    id: 'vendas',
    name: 'Vendas',
    description: 'PDV integrado, gestão de pedidos e acompanhamento de metas em tempo real.',
    highlights: [
      'PDV integrado',
      'Gestão de pedidos',
      'Metas em tempo real',
      'Relatórios de vendas',
    ],
    icon: TrendingUp,
  },
  {
    id: 'producao',
    name: 'Produção',
    description: 'Planejamento de produção, ordens de fabricação e controle de qualidade.',
    highlights: [
      'Planejamento de produção',
      'Ordens de fabricação',
      'Controle de qualidade',
      'Relatórios produtivos',
    ],
    icon: Cog,
  },
];
