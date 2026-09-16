import logoBrConsult from '@shared/assets/img-logo-br-consult.png';
import logoCresceVendas from '@shared/assets/img-logo-cresce-vendas.png';
import logoTray from '@shared/assets/img-logo-tray.png';
import type { Parceiro } from './types';

export const PARCEIROS: Parceiro[] = [
  { id: 'cresce-vendas', name: 'Cresce Vendas', logo: logoCresceVendas, logoClassName: 'h-16' },
  { id: 'tray', name: 'Tray', logo: logoTray },
  { id: 'br-consult', name: 'BR Consult', logo: logoBrConsult, logoClassName: 'h-20' },
];
