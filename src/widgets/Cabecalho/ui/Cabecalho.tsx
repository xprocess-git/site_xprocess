import { NavegacaoSite } from '@features/NavegacaoSite';
import { BotaoAbrirContato } from '@features/SolicitacaoContato';
import xprocessLogo from '@shared/assets/xprocess_logo.svg';
import { SITE_CONFIG } from '@shared/config/site';

export interface CabecalhoProps {
  onOpenContact: () => void;
}

export function Cabecalho({ onOpenContact }: CabecalhoProps) {
  return (
    <div className="max-w-[1240px] mx-auto pt-5 px-6">
      <header className="flex items-center flex-wrap gap-8 bg-card rounded-md py-[14px] px-7 shadow-sm sticky top-5 z-40">
        <a href="/#topo" className="flex items-center mr-auto">
          <img src={xprocessLogo} alt={SITE_CONFIG.brandName} className="h-[52px] w-auto" />
        </a>
        <NavegacaoSite />
        <BotaoAbrirContato onOpen={onOpenContact} className="flex-none" />
      </header>
    </div>
  );
}
