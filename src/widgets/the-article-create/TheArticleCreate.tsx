'use client';

import { FC } from 'react';
import { UiSkeleton } from '@/shared/ui';
import { useFindUserQuery } from '@/entities/users';
import { CreateArticleLink } from '@/features/create-article-link';

export const TheArticleCreate: FC = () => {
  const { data: userData, isLoading: isLoadingUser } = useFindUserQuery();

  if (isLoadingUser) {
    return <UiSkeleton className='h-10' />;
  }

  if (!isLoadingUser && userData?.userId) {
    return <CreateArticleLink />;
  }

  return null;
};
