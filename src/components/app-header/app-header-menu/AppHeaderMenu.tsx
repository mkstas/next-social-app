import { FC } from 'react';
import { clsx } from 'clsx';
import { ROUTES } from '@/app/constants';
import { SchemeToggler } from '@/components/scheme-toggler';
import { useGetProfilesQuery, useLogoutMutation } from '@/stores/queries';
import { Button, ButtonLink, Sheet } from '@/shared';

interface Props {
  isOpenMenu: boolean;
}

export const AppHeaderMenu: FC<Props> = ({ isOpenMenu }) => {
  const { data } = useGetProfilesQuery();
  const [logout, {}] = useLogoutMutation();

  return (
    <div
      id='headerMenu'
      className={clsx([
        'absolute top-20 right-3 w-72 transition-all',
        isOpenMenu ? '-translate-y-4 visible' : 'opacity-0 invisible',
      ])}
    >
      <Sheet className='p-4 shadow-2xl shadow-slate-900/20 dark:shadow-none'>
        <ul className='space-y-4'>
          <li className='flex justify-between items-center'>
            <span className='font-medium text-slate-600 dark:text-neutral-400'>Тема</span>
            <SchemeToggler />
          </li>
          {data ? (
            <>
              <li className='flex justify-between items-center'>
                <span className='text-slate-600 dark:text-neutral-400'>Имя:</span>
                <span className='transition-none'>{data.userName}</span>
              </li>
              <li>
                <Button scale='sm' onClick={() => logout()}>
                  Выйти
                </Button>
              </li>
            </>
          ) : (
            <li>
              <ButtonLink to={ROUTES.AUTH} size='sm'>
                Войти
              </ButtonLink>
            </li>
          )}
        </ul>
      </Sheet>
    </div>
  );
};
