import { FC } from 'react';
import { clsx } from 'clsx';
import { ROUTES } from '@/shared/constants';
import { Sheet, ButtonLink } from '@/shared/ui';
import { SchemeToggler } from '@/components/scheme-toggler';

interface IProps {
  id?: string;
  isOpen?: boolean;
}

export const AppHeaderMenu: FC<IProps> = ({ id, isOpen }) => {
  return (
    <div
      id={id}
      className={clsx([
        'absolute top-20 right-3 w-72 transition-all',
        isOpen ? '-translate-y-4 visible' : 'opacity-0 invisible',
      ])}
    >
      <Sheet className='p-4 shadow-2xl shadow-slate-900/20 dark:shadow-none'>
        <ul className='space-y-4'>
          <li className='flex justify-between items-center'>
            <span className='font-medium'>Тема</span>
            <SchemeToggler />
          </li>
          <li>
            <ButtonLink to={ROUTES.AUTH}>Войти</ButtonLink>
          </li>
        </ul>
      </Sheet>
    </div>
  );
};
