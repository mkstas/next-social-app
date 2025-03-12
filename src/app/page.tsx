'use client';

import { useFindArticlesQuery, useFindUserQuery } from '@/shared/stores/queries';
import { TheArticle } from '@/entities/the-article';
import { CreateArticleLink } from '@/features/create-article-link';

export default function Root() {
  const { data: user, isLoading: isLoadingUser } = useFindUserQuery();
  const { data: articles, isLoading: isLoadingArticles } = useFindArticlesQuery();

  return (
    <section className='grid gap-4'>
      {isLoadingUser ? (
        <div className='h-10 bg-slate-200 rounded-full animate-pulse'></div>
      ) : (
        user && <CreateArticleLink />
      )}
      {isLoadingArticles
        ? 'Loading...'
        : articles?.map(article => <TheArticle key={article.articleId} {...article} />)}
    </section>
  );
}
