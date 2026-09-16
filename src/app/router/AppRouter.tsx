import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '@app/layouts/MainLayout';
import { TelaCarregamento } from '@shared/ui/TelaCarregamento';

const Inicio = lazy(() => import('@pages/Inicio'));
const Solucao = lazy(() => import('@pages/Solucao'));
const PaginaNaoEncontrada = lazy(() => import('@pages/PaginaNaoEncontrada'));

export function AppRouter() {
  return (
    <Suspense fallback={<TelaCarregamento visible />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/solucoes/:slug" element={<Solucao />} />
          <Route path="*" element={<PaginaNaoEncontrada />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
