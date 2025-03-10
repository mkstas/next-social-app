import { FC } from 'react';
import Link from 'next/link';
import { SignalIcon } from '@heroicons/react/24/solid';
import { ROUTES } from '@/shared/routes';
import { UiSheet } from '@/shared/ui';
import { UserInfoLogin } from '@/features/user-info-login';

export const TheHeader: FC = () => {
  return (
    <header className='mt-2 sticky top-0'>
      <UiSheet>
        <div className='flex items-center justify-between gap-4'>
          <Link
            href={ROUTES.INDEX}
            className='flex items-center gap-x-1 outline-blue-500 outline-offset-3'
          >
            <SignalIcon className='size-7 text-blue-600' />
            <span className='text-xl font-bold'>Social</span>
          </Link>
          <UserInfoLogin />
        </div>
      </UiSheet>
    </header>
  );
};
