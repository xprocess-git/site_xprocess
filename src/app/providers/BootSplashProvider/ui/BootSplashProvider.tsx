import { useCallback, useEffect, useState, type ReactNode } from 'react';
import { TelaCarregamento } from '@shared/ui/TelaCarregamento';

export interface BootSplashProviderProps {
  children: ReactNode;
  minDurationMs?: number;
}

export function BootSplashProvider({ children, minDurationMs = 1400 }: BootSplashProviderProps) {
  const [showSplash, setShowSplash] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => setReady(true), minDurationMs);
    return () => window.clearTimeout(timeout);
  }, [minDurationMs]);

  const handleExited = useCallback(() => setShowSplash(false), []);

  return (
    <>
      {children}
      {showSplash ? <TelaCarregamento visible={!ready} onExited={handleExited} /> : null}
    </>
  );
}
