import { FC } from 'react';
import { UiSheet } from '@/shared/ui';
import { AuthUserActions } from '@/features/auth-user-actions';
import { TheHeaderLogo } from './TheHeaderLogo';

export const TheHeader: FC = () => {
  return (
    <header className='mt-2 sticky top-0'>
      <UiSheet>
        <div className='flex items-center justify-between gap-4'>
          <TheHeaderLogo />
          <AuthUserActions />
        </div>
      </UiSheet>
    </header>
  );
};
