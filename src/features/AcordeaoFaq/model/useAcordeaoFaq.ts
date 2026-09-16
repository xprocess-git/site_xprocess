import { useCallback, useState } from 'react';

export interface UseAcordeaoFaqResult {
  openId: string | null;
  toggle: (id: string) => void;
}

export function useAcordeaoFaq(): UseAcordeaoFaqResult {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = useCallback((id: string) => {
    setOpenId((current) => (current === id ? null : id));
  }, []);

  return { openId, toggle };
}
