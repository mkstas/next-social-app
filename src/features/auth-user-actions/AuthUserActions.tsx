'use client';

import { FC } from 'react';
import { UiButton, UiButtonLink, UiSkeleton } from '@/shared/ui';
import { useTypedDispatch } from '@/shared/utils/stores';
import { ROUTES } from '@/shared/utils/constants';
import { useFindUserQuery, useLogoutUserMutation, usersApi } from '@/entities/users';

export const AuthUserActions: FC = () => {
  const dispatch = useTypedDispatch();
  const { isLoading: isLoadingUser, currentData: userData } = useFindUserQuery();
  const [logoutUser, {}] = useLogoutUserMutation();

  const onClickLogout = async () => {
    await logoutUser();
    dispatch(
      usersApi.util.updateQueryData('findUser', undefined, () => ({ userId: 0, userName: '' })),
    );
  };

  if (isLoadingUser) {
    return <UiSkeleton className='w-40 h-7' />;
  }

  return (
    <div className='flex items-center gap-2'>
      {userData?.userId ? (
        <>
          <span className='text-sm font-medium'>{userData.userName}</span>
          <UiButton onClick={onClickLogout} variant='small'>
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
