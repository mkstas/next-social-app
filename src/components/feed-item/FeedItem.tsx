import { CustomLink, Sheet } from '@/shared/ui';
import { ChatBubbleOvalLeftIcon, HandThumbUpIcon } from '@heroicons/react/24/solid';
import { UserIcon } from '@heroicons/react/24/outline';
import { FC } from 'react';

export const FeedItem: FC = () => {
  return (
    <article>
      <Sheet className='overflow-hidden'>
        <a href='#' className='flex items-center gap-2 px-4 py-2'>
          <span className='block p-1 rounded-full bg-slate-200'>
            <UserIcon className='size-3 text-slate-600' />
          </span>
          <span className='text-sm text-slate-600 dark:text-neutral-500'>Аркадий</span>
        </a>
        <a href='#' className='block relative w-full pb-[40%]'>
          <img
            className='absolute top-0 left-0 w-full h-full object-cover'
            src='https://placehold.co/600x400'
            alt='#'
          />
        </a>
        <div className='p-4 space-y-3'>
          <h3 className='text-lg font-bold'>Lorem ipsum dolor sit</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nisi nulla fugit
            similique accusantium vitae tenetur consectetur. Unde tenetur dolores ipsa, sit commodi
            delectus dolore consequatur ad, maxime iure odit!{' '}
            <CustomLink to='#'>Читать далее...</CustomLink>
          </p>
          <ul className='flex flex-wrap gap-2'>
            <li className='block bg-blue-200 dark:bg-blue-600 px-1'>#hash</li>
            <li className='block bg-blue-200 dark:bg-blue-600 px-1'>#hash</li>
            <li className='block bg-blue-200 dark:bg-blue-600 px-1'>#hash</li>
          </ul>
          <div className='flex flex-wrap items-center gap-2'>
            <button className='flex gap-1 text-slate-500 dark:text-neutral-500 p-1 -m-1 group'>
              <HandThumbUpIcon className='size-5 group-hover:fill-yellow-500' />
              <span>0</span>
            </button>
            <div className='flex gap-1 text-slate-500 dark:text-neutral-500'>
              <ChatBubbleOvalLeftIcon className='size-5' />
              <span>0</span>
            </div>
          </div>
        </div>
      </Sheet>
    </article>
  );
};
