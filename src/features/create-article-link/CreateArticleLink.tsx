import { FC } from 'react';
import Link from 'next/link';
import { PlusCircleIcon } from '@heroicons/react/24/solid';
import { ROUTES } from '@/shared/utils/constants';

export const CreateArticleLink: FC = () => {
  const classes =
    'flex items-center justify-center gap-2 py-2 px-4 bg-slate-200 hover:bg-slate-300 rounded-full transition-colors outline-slate-600 outline-offset-3';

  return (
    <Link href={ROUTES.CREATE_ARTICLE} className={classes}>
      <span className='text-slate-600 font-medium'>Создать пост</span>
      <PlusCircleIcon className='size-6 text-slate-500' />
    </Link>
  );
};
