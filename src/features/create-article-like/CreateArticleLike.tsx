'use client';

import { FC } from 'react';
import { HeartIcon } from '@heroicons/react/24/solid';
import { clsx } from 'clsx';
import { Article, useLikeArticleMutation } from '@/entities/articles';
import { useFindUserQuery } from '@/entities/users';

interface Props {
  article: Article;
}

export const CreateArticleLike: FC<Props> = ({ article }) => {
  const { data: userData } = useFindUserQuery();
  const [likeArticle, {}] = useLikeArticleMutation();

  const isLiked = article.like.some(like => like.userId === userData?.userId);

  const classes = {
    button: {
      default:
        'flex items-center gap-1 py-1 px-3 rounded-full cursor-pointer transition-colors outline-offset-3',
      isLiked: isLiked
        ? 'bg-rose-100 outline-rose-200 hover:bg-rose-200'
        : 'hover:bg-rose-100 outline-slate-600',
    },
    icon: isLiked ? 'text-rose-400' : 'text-slate-500',
  };

  return (
    <button
      className={clsx([classes.button.default, classes.button.isLiked])}
      onClick={() => likeArticle({ articleId: article.articleId })}
    >
      <HeartIcon className={clsx(['size-4', classes.icon])} />
      <span className='text-slate-600'>{article.like?.length}</span>
    </button>
  );
};
