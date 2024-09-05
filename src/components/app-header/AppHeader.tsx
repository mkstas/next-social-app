import { Link } from '@tanstack/react-router';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { Container } from '@/shared/ui';

export function AppHeader() {
  return (
    <header className='py-2'>
      <Container className='flex items-center justify-between'>
        <Link to='/' className='flex items-center space-x-2 text-lg font-semibold uppercase'>
          <span className='py-1 px-2 text-slate-100 bg-violet-600 rounded-md'>React</span>
          <span>Social</span>
        </Link>
        <div className='-mr-2'>
          <Link
            to='/auth'
            className='flex items-center space-x-1 p-1 hover:text-violet-600 dark:hover:text-violet-400 transition-colors'
          >
            <UserCircleIcon className='w-6 h-6' />
            <span className='text-sm font-semibold'>Войти</span>
          </Link>
        </div>
      </Container>
    </header>
  );
}
