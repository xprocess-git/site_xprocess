import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AppProviders, BootSplashProvider } from '@app/providers';
import { AppRouter } from '@app/router';
import '@app/styles/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProviders>
      <BootSplashProvider>
        <AppRouter />
      </BootSplashProvider>
    </AppProviders>
  </StrictMode>,
);
