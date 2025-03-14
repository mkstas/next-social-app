'use client';

import { FC } from 'react';
import { useFindArticlesQuery } from '@/entities/articles';
import { ArticleFeedItemSkeleton } from './ArticleFeedItemSkeleton';
import { ArticleFeedItem } from './ArticleFeedItem';

export const TheArticleFeed: FC = () => {
  const { data: articlesData, isLoading: isLoadingArticles } = useFindArticlesQuery();
  const skeletonArray = Array(3).fill(0);

  return (
    <div className='space-y-4'>
      {isLoadingArticles
        ? skeletonArray.map((_, index) => <ArticleFeedItemSkeleton key={index} />)
        : articlesData?.map(article => (
            <ArticleFeedItem key={article.articleId} article={article} />
          ))}
    </div>
  );
};
