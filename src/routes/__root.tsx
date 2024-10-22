import { Outlet, createRootRoute } from '@tanstack/react-router';
import { Container } from '@/shared/ui';
import { AppHeader } from '@/components/app-header';
import { AppMain } from '@/components/app-main';

export const Route = createRootRoute({
  component: () => (
    <>
      <AppHeader />
      <AppMain>
        <Container>
          <Outlet />
        </Container>
      </AppMain>
    </>
  ),
  notFoundComponent: () => <p>Not Found 404</p>,
});
