import type { AplicativoMovel } from './types';

export const APLICATIVOS_MOVEIS: AplicativoMovel[] = [
  {
    id: 'vendas',
    name: 'App de Vendas',
    description:
      'Gerencie vendas e pedidos em tempo real, acesse catálogo de produtos e histórico de clientes diretamente do seu dispositivo móvel.',
    highlights: ['Catálogo integrado', 'Gestão de pedidos e orçamentos', 'Histórico de vendas e relatórios'],
  },
  {
    id: 'logistica',
    name: 'App de Logística',
    description:
      'Controle estoques, rastreie entregas e otimize rotas logísticas com ferramentas avançadas de gestão de cadeia de suprimentos.',
    highlights: ['Controle de inventário em tempo real', 'Rastreamento de entregas', 'Otimização de rotas'],
  },
  {
    id: 'motorista',
    name: 'App do Motorista',
    description:
      'Acompanhe rotas, registre entregas e comunique-se com a equipe logística para uma operação eficiente e segura.',
    highlights: ['Navegação inteligente', 'Registro de entregas e coletas', 'Comunicação em tempo real'],
  },
];
