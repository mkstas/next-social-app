import { FC, useState } from 'react';
import { UiSheet } from '@/shared/ui';
import { Article, ArticleContent } from '@/entities/articles';
import { CommentContent } from '@/entities/comments';
import { CreateArticleLike } from '@/features/create-article-like';
import { CreateArticleComment } from '@/features/create-article-comment';
import { CreateCommentForm } from '@/features/create-comment-form';

interface Props {
  article: Article;
}

export const ArticleFeedItem: FC<Props> = ({ article }) => {
  const [isCommentOpen, setIsCommentOpen] = useState<boolean>(false);

  const onClickArticleComment = () => {
    setIsCommentOpen(!isCommentOpen);
  };

  return (
    <article>
      <UiSheet>
        <ArticleContent article={article} />
        <div className='flex gap-2 mt-2'>
          <CreateArticleLike article={article} />
          <CreateArticleComment article={article} onClick={onClickArticleComment} />
        </div>
        {isCommentOpen && (
          <>
            <div className='mt-4 divide-solid divide-y-1 divide-slate-200'>
              {article.comment.map(comment => (
                <CommentContent comment={comment} key={comment.commentId} />
              ))}
            </div>
            <div className='mt-2 text-sm'>
              <CreateCommentForm articleId={article.articleId} />
            </div>
          </>
        )}
      </UiSheet>
    </article>
  );
};
