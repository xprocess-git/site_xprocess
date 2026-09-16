import { Briefcase, Factory, ShoppingCart } from 'lucide-react';
import imgLojaIndustria from '@shared/assets/img-loja-industria.webp';
import imgLojaIndustria2 from '@shared/assets/img-loja-industria-2.png';
import imgLojaServicos from '@shared/assets/img-loja-servicos.jpg';
import imgLojaServicos2 from '@shared/assets/img-loja-servicos-2.webp';
import imgLojaVarejo from '@shared/assets/img-loja-varejo.webp';
import imgLojaVarejo2 from '@shared/assets/img-loja-varejo-2.webp';
import type { ConteudoSolucao } from './types';

export const CONTEUDOS_SOLUCAO: Record<string, ConteudoSolucao> = {
  varejo: {
    slug: 'varejo',
    icon: ShoppingCart,
    badge: 'Solução para Varejo',
    title: 'ERP completo para o varejo',
    description:
      'Controle total de vendas e estoque com inteligência de dados para maximizar seus resultados. Do PDV ao relatório gerencial, tudo integrado em uma única plataforma.',
    imagemHero: imgLojaVarejo,
    imagemHeroLabel: 'Loja de varejo utilizando o PDV da XProcess',
    imagemHeroObjectPosition: '15% 20%',
    imagemDestaque: imgLojaVarejo2,
    imagemDestaqueLabel: 'Painel de controle de estoque e vendas',
    imagemDestaqueObjectPosition: '50% 12%',
    funcionalidades: [
      {
        name: 'Gestão de Vendas',
        description:
          'Vendas consultiva, direta, telemarketing e força de vendas, em uma ou várias empresas.',
      },
      {
        name: 'Checkout NFC-e',
        description: 'Sistema de checkout com emissão de NF-e, NFS-e, NFC-e e MDF-e integrada.',
      },
      {
        name: 'Integração com E-commerce',
        description: 'Estoque e pedidos sincronizados com sua loja virtual e marketplaces.',
      },
      {
        name: 'Formação de Custos e Precificação',
        description: 'Tabelas de preços por cliente e ajustes de preço agendados.',
      },
      {
        name: 'Gestão de Estoques Multiempresas',
        description: 'Giro de estoque, seções e localização dos produtos em todas as lojas.',
      },
      {
        name: 'Mobile de Vendas',
        description: 'Catálogo, pedidos e histórico de clientes direto do celular.',
      },
    ],
    porQueTitulo: 'Por que escolher a XProcess para seu varejo?',
    porQueItens: [
      'Redução de até 40% no fechamento de caixa',
      'Controle de estoque em tempo real',
      'Integração com e-commerce e marketplaces',
      'Relatórios automatizados',
      'Suporte a múltiplas lojas',
      'Emissão de NFC-e/NF-e',
    ],
    ctaTitulo: 'Pronto para transformar seu varejo?',
  },
  industria: {
    slug: 'industria',
    icon: Factory,
    badge: 'Solução para Indústria',
    title: 'ERP industrial de alta performance',
    description:
      'Gestão de produção e eficiência operacional para otimizar cada etapa do processo produtivo. Do chão de fábrica ao planejamento estratégico, tudo em uma única plataforma.',
    imagemHero: imgLojaIndustria,
    imagemHeroLabel: 'Linha de produção industrial',
    imagemDestaque: imgLojaIndustria2,
    imagemDestaqueLabel: 'Painel de acompanhamento de ordens de produção',
    imagemDestaqueObjectPosition: '35% 15%',
    funcionalidades: [
      {
        name: 'Gestão das Ordens de Produção',
        description: 'Planejamento e acompanhamento de cada ordem do início ao fim.',
      },
      {
        name: 'Requisição de Materiais',
        description: 'Matérias-primas, insumos e acabados controlados por ordem de produção.',
      },
      {
        name: 'Custos de Produção On-line',
        description: 'Acompanhamento do custo produtivo em tempo real, por lote e linha.',
      },
      {
        name: 'Gestão de Estoques Multiempresas',
        description: 'Giro de estoque e localização de produtos entre plantas.',
      },
      {
        name: 'Relatório de Produção por Lote',
        description: 'Rastreabilidade completa de cada lote produzido.',
      },
      {
        name: 'Ponte de Comando para o Gestor',
        description: 'DRE gerencial e fluxo de caixa previsto direto da operação.',
      },
    ],
    porQueTitulo: 'Por que escolher a XProcess para sua indústria?',
    porQueItens: [
      'Redução de até 30% nos custos de produção',
      'Rastreabilidade completa',
      'Integração com IoT',
      'Conformidade ANVISA/ISO',
      'Suporte a múltiplas plantas',
      'Planejamento com IA',
    ],
    ctaTitulo: 'Pronto para otimizar sua produção?',
  },
  servicos: {
    slug: 'servicos',
    icon: Briefcase,
    badge: 'Solução para Serviços',
    title: 'ERP para empresas de serviços',
    description:
      'Organização e escalabilidade para empresas de serviços que buscam crescimento sustentável. Gerencie projetos, equipes e faturamento em uma única plataforma integrada.',
    imagemHero: imgLojaServicos,
    imagemHeroLabel: 'Equipe de serviços em atendimento a cliente',
    imagemDestaque: imgLojaServicos2,
    imagemDestaqueLabel: 'Painel de gestão de ordens de serviço',
    funcionalidades: [
      {
        name: 'Gestão das Ordens de Serviço',
        description: 'Abertura, execução e encerramento de ordens de serviço centralizados.',
      },
      {
        name: 'Gestão de Atendimento ao Cliente',
        description: 'Histórico e status de cada atendimento acessível à equipe.',
      },
      {
        name: 'Gerenciamento de Tarefas dos Técnicos',
        description: 'Distribuição e acompanhamento das tarefas em campo.',
      },
      {
        name: 'Custos de Serviço e Produtos',
        description: 'Custo de cada ordem calculado automaticamente, com margem visível.',
      },
      {
        name: 'Comissão de Serviços',
        description: 'Comissionamento da equipe apurado direto das ordens concluídas.',
      },
      {
        name: 'Mobile de Vendas e Serviço',
        description: 'Registro de atendimentos e entregas direto do celular da equipe.',
      },
    ],
    porQueTitulo: 'Por que escolher a XProcess para sua empresa de serviços?',
    porQueItens: [
      'Redução de até 60% no tempo de faturamento',
      'Visibilidade de alocação de equipe',
      'Integração com ferramentas de colaboração',
      'Contratos automatizados',
      'Portal do cliente',
      'Gestão de SLA',
    ],
    ctaTitulo: 'Pronto para escalar seus serviços?',
  },
};
