import { FC } from 'react';
import { UiSheet, UiSkeleton } from '@/shared/ui';

export const ArticleFeedItemSkeleton: FC = () => {
  return (
    <UiSheet>
      <div className='space-y-1'>
        <div className='flex flex-wrap justify-between gap-4'>
          <UiSkeleton className='h-5 w-16' />
          <UiSkeleton className='h-5 w-32' />
        </div>
        <UiSkeleton className='h-7 w-32' />
        <UiSkeleton className='h-20' />
        <div className='flex gap-2 mt-2'>
          <UiSkeleton className='h-8 w-14' />
          <UiSkeleton className='h-8 w-14' />
        </div>
      </div>
    </UiSheet>
  );
};
