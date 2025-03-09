'use client';

import { FC } from 'react';
import { useFindUserDataQuery, useLogoutMutation, userApi } from '@/shared/stores/queries';
import { UiButton, UiButtonLink } from '@/shared/ui';
import { ROUTES } from '@/shared/routes';
import { useTypedDispatch } from '@/shared/stores';

export const UserInfoLogin: FC = () => {
  const dispatch = useTypedDispatch();

  const { isLoading, data } = useFindUserDataQuery();
  const [logout, {}] = useLogoutMutation();

  const onClickButton = async () => {
    await logout();
    dispatch(userApi.util.resetApiState());
  };

  return (
    <div className='flex items-center gap-2'>
      {isLoading ? (
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
