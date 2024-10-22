import { FC } from 'react';
import { Link } from '@tanstack/react-router';
import { SignalIcon } from '@heroicons/react/24/outline';

export const AppHeaderLogo: FC = () => {
  return (
    <Link to='/' className='flex items-center space-x-2'>
      <SignalIcon className='w-7 h-7 text-blue-600' />
      <span className='text-xl font-bold'>Social</span>
    </Link>
  );
};
