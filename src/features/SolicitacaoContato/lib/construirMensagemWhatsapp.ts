import { joinLines } from '@shared/utils';
import type { FormularioContato } from '../model/types';

export function construirMensagemWhatsapp(values: FormularioContato): string {
  return joinLines([
    'Novo contato via site XProcess',
    `Nome: ${values.name}`,
    `E-mail: ${values.email}`,
    `Empresa: ${values.company}`,
    `Telefone: ${values.phone}`,
    values.message ? `Mensagem: ${values.message}` : '',
  ]);
}

export function construirLinkWhatsapp(whatsappNumber: string, message: string): string {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
