'use client';

import { FC } from 'react';
import { UiButton, UiButtonLink } from '@/shared/ui';
import { useFindUserDataQuery, useLogoutMutation, userApi } from '@/shared/stores/queries';
import { useTypedDispatch } from '@/shared/stores';
import { ROUTES } from '@/shared/routes';

export const UserInfoLogin: FC = () => {
  const dispatch = useTypedDispatch();

  const { isLoading: isLoadingUser, data } = useFindUserDataQuery();
  const [logout, { isLoading: isLoadingLogout }] = useLogoutMutation();

  const onClickButton = async () => {
    await logout();
    dispatch(userApi.util.resetApiState());
  };

  return (
    <div className='flex items-center gap-2'>
      {isLoadingUser && isLoadingLogout ? (
        <div className='w-40 h-7 bg-slate-200 animate-pulse rounded-full'></div>
      ) : data?.userName ? (
        <>
          <span className='text-sm font-medium'>{data.userName}</span>
          <UiButton onClick={onClickButton} variant='small'>
            Выйти
          </UiButton>
        </>
      ) : (
        <UiButtonLink href={ROUTES.LOGIN} variant='small'>
          Войти
        </UiButtonLink>
      )}
    </div>
  );
};
