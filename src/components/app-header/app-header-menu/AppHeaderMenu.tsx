import { FC } from 'react';
import { Link } from '@tanstack/react-router';
import { Sheet } from '@/shared/ui';
import { SchemeToggler } from '@/components/scheme-toggler';

export const AppHeaderMenu: FC = () => {
  return (
    <Sheet className='absolute top-16 right-3 shadow-2xl w-72 p-4 shadow-slate-900/20 dark:shadow-none'>
      <ul className='space-y-4'>
        <li className='flex justify-between items-center'>
          <span className='font-medium'>Тема</span>
          <SchemeToggler />
        </li>
        <li>
          <Link
            to='/auth'
            className='block bg-blue-600 hover:bg-blue-700 p-1 rounded-full text-center font-medium text-white'
          >
            Войти
          </Link>
        </li>
      </ul>
    </Sheet>
  );
};
