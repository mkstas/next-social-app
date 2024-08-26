import { Outlet, createRootRoute } from '@tanstack/react-router';
import { AppHeader } from '@/components/app-header';

export const Route = createRootRoute({
  component: () => (
    <>
      {/**
       * Light theme: bg-white border-slate-200
       * Dark theme: bg-neutral-800 border-neutral-700
       */}
      <AppHeader />
      <main>
        <Outlet />
      </main>
    </>
  ),
});
