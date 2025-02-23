import { useEffect } from 'react';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { useTypedDispatch } from '@/stores';
import { getColorScheme } from '@/stores/slices';
import { AppHeader } from '@/components/app-header';
import { AppMain } from '@/components/app-main';

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
          <Outlet />
        </AppMain>
      </>
    );
  },
  notFoundComponent: () => <div>Not Found 404</div>,
});
