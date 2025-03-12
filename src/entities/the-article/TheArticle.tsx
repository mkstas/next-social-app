import { FC } from 'react';
import { ChatBubbleOvalLeftIcon, HeartIcon } from '@heroicons/react/24/solid';
import { UiHeading, UiSheet } from '@/shared/ui';
import { Article } from '@/shared/stores/queries';

export const TheArticle: FC<Article> = article => {
  return (
    <article>
      <UiSheet>
        <div className='grid gap-2'>
          <div className='flex justify-between'>
            <span>{article.user.userName}</span>
            <time>{article.createdAt}</time>
          </div>
          <UiHeading variant='h3'>{article.title}</UiHeading>
          <p>{article.content}</p>
          <div className='flex items-center gap-2 -ml-2 -mb-1'>
            <button className='flex items-center gap-1 py-1 px-2 hover:bg-rose-100 rounded-full cursor-pointer transition-colors'>
              <HeartIcon className='size-4 text-slate-500' />
              <span className='text-slate-500'>{article.like.length}</span>
            </button>
            <button className='flex items-center gap-1 py-1 px-2 hover:bg-slate-200 rounded-full cursor-pointer transition-colors'>
              <ChatBubbleOvalLeftIcon className='size-4 text-slate-500' />
              <span className='text-slate-500'>{article.comment.length}</span>
            </button>
          </div>
        </div>
      </UiSheet>
    </article>
  );
};
