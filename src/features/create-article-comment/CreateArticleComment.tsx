import { FC } from 'react';
import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/solid';
import { Article } from '@/entities/articles';

interface Props {
  article: Article;
  onClick: () => void;
}

export const CreateArticleComment: FC<Props> = ({ article, onClick }) => {
  const classes =
    'flex items-center gap-1 py-1 px-3 hover:bg-slate-200 rounded-full cursor-pointer transition-colors outline-slate-600 outline-offset-3';

  return (
    <button onClick={onClick} className={classes}>
      <ChatBubbleOvalLeftIcon className='size-4 text-slate-500' />
      <span className='text-slate-600'>{article.comment.length}</span>
    </button>
  );
};
