import { Link, Outlet, createRootRoute } from '@tanstack/react-router';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { Container } from '@/shared/Container';

export const Route = createRootRoute({
  component: () => (
    <>
      {/**
       * Light theme: bg-white border-slate-200
       * Dark theme: bg-neutral-800 border-neutral-700
       */}
      <header className='py-2'>
        <Container className='flex items-center justify-between'>
          <Link className='flex items-center space-x-2 text-lg font-semibold uppercase'>
            <span className='py-1 px-2 text-white bg-violet-600 rounded-md'>React</span>
            <span>Social</span>
          </Link>
          <div className='-mr-2'>
            <Link className='flex items-center space-x-1 p-1 hover:text-violet-600' to='/auth'>
              <UserCircleIcon className='w-6 h-6' />
              <span className='text-sm'>Войти</span>
            </Link>
          </div>
        </Container>
      </header>
      <Outlet />
    </>
  ),
});
