import { useId } from 'react';
import { Button } from '@shared/ui/Button';
import { Checkbox } from '@shared/ui/Checkbox';
import { IconButton } from '@shared/ui/IconButton';
import { Input } from '@shared/ui/Input';
import { Modal } from '@shared/ui/Modal';
import { Textarea } from '@shared/ui/Textarea';
import type { UseSolicitacaoContatoResult } from '../model/useSolicitacaoContato';

export interface ModalContatoProps {
  contato: UseSolicitacaoContatoResult;
}

export function ModalContato({ contato }: ModalContatoProps) {
  const titleId = useId();
  const { isOpen, close, values, updateField, isValid, submit } = contato;

  return (
    <Modal
      isOpen={isOpen}
      onClose={close}
      labelledBy={titleId}
      className="flex flex-col gap-[18px] p-9 max-[480px]:px-5 max-[480px]:py-7"
    >
      <IconButton
        icon="close"
        aria-label="Fechar"
        size="sm"
        onClick={close}
        className="absolute top-5 right-5"
      />
      <div className="pr-8">
        <h3 id={titleId} className="text-[22px] mb-1.5">
          Contato via Whatsapp
        </h3>
        <p className="text-sm opacity-70 m-0">
          Preencha os dados abaixo e nosso time comercial entra em contato com você pelo WhatsApp.
        </p>
      </div>
      <div className="flex flex-col gap-3.5">
        <Input
          label="Nome completo"
          autoComplete="name"
          value={values.name}
          onChange={(event) => updateField('name', event.target.value)}
        />
        <Input
          label="E-mail corporativo"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(event) => updateField('email', event.target.value)}
        />
        <div className="grid grid-cols-2 gap-3 max-[480px]:grid-cols-1">
          <Input
            label="Empresa"
            autoComplete="organization"
            value={values.company}
            onChange={(event) => updateField('company', event.target.value)}
          />
          <Input
            label="Telefone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(event) => updateField('phone', event.target.value)}
          />
        </div>
        <Textarea
          label="Mensagem"
          value={values.message}
          onChange={(event) => updateField('message', event.target.value)}
        />
        <Checkbox
          label="Concordo em receber contato comercial da XProcess."
          checked={values.consent}
          onChange={(event) => updateField('consent', event.target.checked)}
        />
      </div>
      <Button variant="primary" disabled={!isValid} onClick={submit} className="w-full">
        Ir para o WhatsApp
      </Button>
      <p className="text-[11px] opacity-50 m-0">
        Você pode cancelar o recebimento dessas comunicações quando quiser. Confira nossa Política
        de Privacidade.
      </p>
    </Modal>
  );
}
