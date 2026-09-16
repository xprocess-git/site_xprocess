import { ModalContato, useSolicitacaoContato } from '@features/SolicitacaoContato';
import { Cabecalho } from '@widgets/Cabecalho';
import { Hero } from '@widgets/Hero';
import { Rodape } from '@widgets/Rodape';
import { SecaoAplicativoMovel } from '@widgets/SecaoAplicativoMovel';
import { SecaoDepoimentos } from '@widgets/SecaoDepoimentos';
import { SecaoFaq } from '@widgets/SecaoFaq';
import { SecaoFuncionalidades } from '@widgets/SecaoFuncionalidades';
import { SecaoParceiros } from '@widgets/SecaoParceiros';
import { SecaoSolucoes } from '@widgets/SecaoSolucoes';

export function Inicio() {
  const contato = useSolicitacaoContato();

  return (
    <>
      <Cabecalho onOpenContact={contato.open} />
      <main>
        <Hero />
        <SecaoSolucoes />
        <SecaoFuncionalidades />
        <SecaoAplicativoMovel />
        <SecaoDepoimentos />
        <SecaoParceiros />
        <SecaoFaq />
      </main>
      <Rodape />
      <ModalContato contato={contato} />
    </>
  );
}
