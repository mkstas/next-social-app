import { FC } from 'react';
import { clsx } from 'clsx';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Button, ButtonLink, Sheet } from '@/shared/ui';
import { ROUTES } from '@/shared/constants';
import { SchemeToggler } from '@/components/scheme-toggler';
import { profileService, authService } from '@/services';

interface Props {
  isOpenMenu: boolean;
}

export const AppHeaderMenu: FC<Props> = ({ isOpenMenu }) => {
  const { data } = useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
      const res = await profileService.find();
      if (res.status === 401) return null;
      return res;
    },
  });

  const { mutate } = useMutation({
    mutationKey: ['logout'],
    mutationFn: () => authService.logout(),
    onSuccess: () => {
      data!.data = null;
    },
  });

  return (
    <div
      id='header_menu'
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
          {data?.data ? (
            <>
              <li className='flex justify-between'>
                <span className='text-slate-600 dark:text-neutral-400'>Имя:</span>
                <span>{data.data.userName}</span>
              </li>
              <li>
                <Button onClick={() => mutate()} size='sm'>
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
