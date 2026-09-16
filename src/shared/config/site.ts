import type { FooterLinkGroup, NavItem, SocialLink } from '@shared/types';

export const SITE_CONFIG = {
  brandName: 'XProcess',
  tagline:
    'ERP inteligente para empresas que querem eficiência, controle e crescimento escalável.',
  contactEmail: 'contato@xprocess.com.br',
  contactPhone: '(11) 4000-0000',
  address: 'São Paulo, SP - Brasil',
  whatsappNumber: '5511999999999',
  heroAutoplay: true,
  heroIntervalMs: 8000,
} as const;

export const NAV_ITEMS: NavItem[] = [
  { id: 'segmentos', label: 'Segmentos', href: '/#solucoes' },
  { id: 'produtos', label: 'Produtos', href: '/#funcionalidades' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { id: 'linkedin', label: 'LinkedIn', href: '#', abbreviation: 'in' },
  { id: 'instagram', label: 'Instagram', href: '#', abbreviation: 'ig' },
  { id: 'facebook', label: 'Facebook', href: '#', abbreviation: 'fb' },
  { id: 'youtube', label: 'YouTube', href: '#', abbreviation: 'yt' },
];

export const FOOTER_LINK_GROUPS: FooterLinkGroup[] = [
  {
    id: 'solucoes',
    title: 'Soluções',
    links: [
      { id: 'varejo', label: 'Varejo', href: '/solucoes/varejo' },
      { id: 'industria', label: 'Indústria', href: '/solucoes/industria' },
      { id: 'servicos', label: 'Serviços', href: '/solucoes/servicos' },
      { id: 'financeiro', label: 'Financeiro', href: '/#funcionalidades' },
    ],
  },
  {
    id: 'empresa',
    title: 'Empresa',
    links: [
      { id: 'sobre', label: 'Sobre nós', href: '/sobre' },
      { id: 'parceiros', label: 'Parceiros', href: '/#parceiros' },
    ],
  },
  {
    id: 'suporte',
    title: 'Suporte',
    links: [
      { id: 'ajuda', label: 'Central de Ajuda', href: '/ajuda' },
      { id: 'portal', label: 'Portal do Cliente', href: '/portal' },
    ],
  },
];
