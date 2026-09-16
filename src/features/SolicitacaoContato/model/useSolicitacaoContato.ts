import { useCallback, useMemo, useState } from 'react';
import { useDisclosure } from '@shared/hooks';
import { SITE_CONFIG } from '@shared/config/site';
import { construirLinkWhatsapp, construirMensagemWhatsapp } from '../lib/construirMensagemWhatsapp';
import { INITIAL_FORM_VALUES, type FormularioContato } from './types';

export interface UseSolicitacaoContatoResult {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  values: FormularioContato;
  updateField: <K extends keyof FormularioContato>(field: K, value: FormularioContato[K]) => void;
  isValid: boolean;
  submit: () => void;
}

export function useSolicitacaoContato(): UseSolicitacaoContatoResult {
  const { isOpen, open, close } = useDisclosure(false);
  const [values, setValues] = useState<FormularioContato>(INITIAL_FORM_VALUES);

  const updateField = useCallback(
    <K extends keyof FormularioContato>(field: K, value: FormularioContato[K]) => {
      setValues((current) => ({ ...current, [field]: value }));
    },
    [],
  );

  const isValid = useMemo(
    () => values.name.trim().length > 0 && values.phone.trim().length > 0 && values.consent,
    [values.name, values.phone, values.consent],
  );

  const submit = useCallback(() => {
    if (!isValid) return;
    const message = construirMensagemWhatsapp(values);
    const link = construirLinkWhatsapp(SITE_CONFIG.whatsappNumber, message);
    window.open(link, '_blank', 'noopener,noreferrer');
    close();
  }, [isValid, values, close]);

  return { isOpen, open, close, values, updateField, isValid, submit };
}
