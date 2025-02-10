import { FC } from 'react';
import { Link } from '@tanstack/react-router';
import { SignalIcon } from '@heroicons/react/24/outline';
import { ROUTES } from '@/shared/constants';

export const AppHeadaerLogo: FC = () => {
  return (
    <Link
      to={ROUTES.INDEX}
      className='flex items-center space-x-2 outline-none focus-visible:outline-blue-600 rounded-sm'
    >
      <SignalIcon className='w-7 h-7 text-blue-600' />
      <span className='text-xl font-bold'>Social</span>
    </Link>
  );
};
