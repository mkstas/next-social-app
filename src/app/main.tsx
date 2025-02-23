import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as StoreProvider } from 'react-redux';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { store } from '@/stores';

import { routeTree } from '../routeTree.gen';

import './index.css';

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreProvider store={store}>
      <RouterProvider router={router} />
    </StoreProvider>
  </StrictMode>,
);
