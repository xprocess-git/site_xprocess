import { useParams } from 'react-router-dom';
import { ModalContato, useSolicitacaoContato } from '@features/SolicitacaoContato';
import { PaginaNaoEncontrada } from '@pages/PaginaNaoEncontrada';
import { Badge } from '@shared/ui/Badge';
import { Button } from '@shared/ui/Button';
import { ImagemIlustrativa } from '@shared/ui/ImagemIlustrativa';
import { ListaMarcadores } from '@shared/ui/ListaMarcadores';
import { RevealAoRolar } from '@shared/ui/RevealAoRolar';
import { Cabecalho } from '@widgets/Cabecalho';
import { Rodape } from '@widgets/Rodape';
import { CONTEUDOS_SOLUCAO } from '../model/data';

export function Solucao() {
  const { slug } = useParams<{ slug: string }>();
  const contato = useSolicitacaoContato();
  const conteudo = slug ? CONTEUDOS_SOLUCAO[slug] : undefined;

  if (!conteudo) return <PaginaNaoEncontrada />;

  const IconeSolucao = conteudo.icon;

  return (
    <>
      <Cabecalho onOpenContact={contato.open} />
      <main>
        <section>
          <div className="max-w-[1240px] mx-auto pt-16 sm:pt-20 pb-12 sm:pb-16 px-6">
            <div className="grid grid-cols-[0.9fr_1.1fr] gap-12 items-center max-[860px]:grid-cols-1 max-[860px]:gap-8">
              <RevealAoRolar>
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-sm bg-blue-tint-2 text-orange mb-6"
                  aria-hidden="true"
                >
                  <IconeSolucao size={22} />
                </div>
                <Badge variant="tint" className="mb-5">
                  {conteudo.badge}
                </Badge>
                <h1 className="text-[clamp(30px,4vw,42px)] mb-5">{conteudo.title}</h1>
                <p className="text-[17px] opacity-70 leading-[1.6] m-0">{conteudo.description}</p>
              </RevealAoRolar>
              <RevealAoRolar delayMs={80}>
                <ImagemIlustrativa
                  label={conteudo.imagemHeroLabel}
                  src={conteudo.imagemHero}
                  fit="cover"
                  objectPosition={conteudo.imagemHeroObjectPosition}
                  className="w-full h-[280px] sm:h-[360px] lg:h-[420px]"
                />
              </RevealAoRolar>
            </div>
          </div>
        </section>

        <section className="bg-blue-tint-2">
          <div className="max-w-[1240px] mx-auto pt-16 sm:pt-20 pb-16 sm:pb-20 px-6">
            <RevealAoRolar>
              <h2 className="text-2xl mb-10">Funcionalidades</h2>
            </RevealAoRolar>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-x-10 gap-y-9">
              {conteudo.funcionalidades.map((funcionalidade, index) => (
                <RevealAoRolar key={funcionalidade.name} delayMs={index * 60}>
                  <h3 className="text-base font-heading font-semibold mb-1.5">{funcionalidade.name}</h3>
                  <p className="text-sm opacity-70 leading-[1.6] m-0">{funcionalidade.description}</p>
                </RevealAoRolar>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-card">
          <div className="max-w-[1240px] mx-auto pt-16 sm:pt-20 pb-16 sm:pb-20 px-6">
            <RevealAoRolar>
              <ImagemIlustrativa
                label={conteudo.imagemDestaqueLabel}
                src={conteudo.imagemDestaque}
                fit="cover"
                objectPosition={conteudo.imagemDestaqueObjectPosition}
                className="w-full h-[220px] sm:h-[300px] lg:h-[360px] mb-16 sm:mb-20"
              />
            </RevealAoRolar>
            <RevealAoRolar delayMs={60}>
              <h2 className="text-2xl mb-6">{conteudo.porQueTitulo}</h2>
              <ListaMarcadores items={conteudo.porQueItens} size="md" className="gap-3 text-[15px]" />
            </RevealAoRolar>
          </div>
        </section>

        <section className="bg-navy">
          <div className="max-w-[1240px] mx-auto py-16 sm:py-20 px-6 text-center flex flex-col items-center gap-7">
            <h2 className="text-white text-[28px] sm:text-[32px] max-w-[480px]">{conteudo.ctaTitulo}</h2>
            <Button variant="primary" size="lg" onClick={contato.open}>
              Ligamos para você
            </Button>
          </div>
        </section>
      </main>
      <Rodape />
      <ModalContato contato={contato} />
    </>
  );
}
