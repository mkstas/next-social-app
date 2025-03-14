import { FC } from 'react';
import { Article } from './model';
import { UiHeading } from '@/shared/ui';

interface Props {
  article: Article;
}

export const ArticleContent: FC<Props> = ({ article }) => {
  return (
    <div className='space-y-1'>
      <div className='flex flex-wrap justify-between gap-4'>
        <span className='text-sm'>{article.user.userName}</span>
        <time className='text-sm'>{article.createdAt}</time>
      </div>
      <UiHeading variant='h3'>{article.title}</UiHeading>
      <p>{article.content}</p>
    </div>
  );
};
