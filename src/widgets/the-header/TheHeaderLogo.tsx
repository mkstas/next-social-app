import { FC } from 'react';
import Link from 'next/link';
import { SignalIcon } from '@heroicons/react/24/solid';
import { ROUTES } from '@/shared/utils/constants';

export const TheHeaderLogo: FC = () => {
  return (
    <Link
      href={ROUTES.INDEX}
      className='flex items-center gap-x-1 outline-blue-600 outline-offset-3'
    >
      <SignalIcon className='size-7 text-blue-600' />
      <span className='text-xl font-bold'>Social</span>
    </Link>
  );
};
