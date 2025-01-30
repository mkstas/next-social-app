import { FC, useEffect, useState } from 'react';
import { clsx } from 'clsx';
import { Link } from '@tanstack/react-router';
import { ChevronDownIcon, SignalIcon, UserIcon } from '@heroicons/react/24/outline';
import { Button, ButtonLink, Container, Sheet } from '@/shared/ui';
import { ROUTES } from '@/shared/constants';
import { SchemeToggler } from '@/components/scheme-toggler';
import { useMutation, useQuery } from '@tanstack/react-query';
import { userService } from '@/services';

export const AppHeader: FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const onClickButton = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const closeMenu = (e: Event) => {
    if (
      !(e?.target as HTMLElement).closest('#header_menu') &&
      !(e?.target as HTMLElement).closest('#header_button')
    ) {
      setIsOpenMenu(false);
    }
  };

  useEffect(() => {
    if (isOpenMenu) {
      window.addEventListener('mousedown', closeMenu);
    } else {
      window.removeEventListener('mousedown', closeMenu);
    }
  }, [isOpenMenu]);

  const profileQuery = useQuery({
    queryKey: ['profile'],
    queryFn: userService.getProfile,
  });

  const logoutMutation = useMutation({
    mutationKey: ['logout'],
    mutationFn: userService.logout,
  });

  return (
    <header className='fixed top-0 left-0 w-full'>
      <Sheet bordered='bottom' rounded={false}>
        <Container className='relative flex justify-between items-center'>
          <Link
            to={ROUTES.INDEX}
            className='flex items-center space-x-2 outline-none focus-visible:outline-blue-600 rounded-sm'
          >
            <SignalIcon className='w-7 h-7 text-blue-600' />
            <span className='text-xl font-bold'>Social</span>
          </Link>
          <button
            id='header_button'
            className='flex items-center space-x-2 p-2 hover:bg-slate-100 dark:hover:bg-neutral-700 outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm'
            onClick={onClickButton}
          >
            <span className='block p-2 rounded-full bg-slate-200'>
              <UserIcon className='w-6 h-6 text-slate-600' />
            </span>
            <ChevronDownIcon className='w-4 h-4 text-slate-600 dark:text-neutral-400' />
          </button>
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
                {profileQuery.data?.data ? (
                  <>
                    <li className='flex justify-between'>
                      <span className='text-slate-600 dark:text-neutral-400'>Имя:</span>
                      <span>{profileQuery.data.data.userName}</span>
                    </li>
                    <li>
                      <Button onClick={() => logoutMutation.mutate()} size='sm'>
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
        </Container>
      </Sheet>
    </header>
  );
};
