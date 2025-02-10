import { useEffect } from 'react';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import { Container } from '@/shared/ui';
import { AppHeader } from '@/components/app-header';
import { AppMain } from '@/components/app-main';
import { useTypedDispatch } from '@/store/hooks';
import { getColorScheme } from '@/store/slices';

export const Route = createRootRoute({
  component: () => {
    const dispatch = useTypedDispatch();

    useEffect(() => {
      dispatch(getColorScheme());
    }, []);

    return (
      <>
        <AppHeader />
        <AppMain>
          <Container className='max-sm:px-0 grid grid-cols-[2fr_1fr]'>
            <Outlet />
          </Container>
        </AppMain>
      </>
    );
  },
  notFoundComponent: () => <p>Not Found 404</p>,
});
