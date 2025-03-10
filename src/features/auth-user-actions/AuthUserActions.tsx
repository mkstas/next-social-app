'use client';

import { FC } from 'react';
import { UiButton, UiButtonLink } from '@/shared/ui';
import { useTypedDispatch } from '@/shared/stores';
import { useFindUserDataQuery, useLogoutMutation, userApi } from '@/shared/stores/queries';
import { ROUTES } from '@/shared/utils/constants';

export const AuthUserActions: FC = () => {
  const dispatch = useTypedDispatch();
  const { isLoading: isLoadingUser, data } = useFindUserDataQuery();
  const [logout, {}] = useLogoutMutation();

  const onClickButton = async () => {
    await logout();
    dispatch(userApi.util.resetApiState());
  };

  if (isLoadingUser) {
    return <div className='w-40 h-7 bg-slate-200 rounded-full animate-pulse'></div>;
  }

  return (
    <div className='flex items-center gap-2'>
      {data ? (
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
