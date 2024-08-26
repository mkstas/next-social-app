import { Outlet, createRootRoute } from '@tanstack/react-router';
import { AppHeader } from '@/components/app-header';

export const Route = createRootRoute({
  component: () => (
    <>
      <AppHeader />
      <main>
        <Outlet />
      </main>
    </>
  ),
  notFoundComponent: () => <p>Not Found 404</p>,
});
