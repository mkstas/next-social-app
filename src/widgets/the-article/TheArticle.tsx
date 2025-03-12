import { FC, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ChatBubbleOvalLeftIcon, HeartIcon } from '@heroicons/react/24/solid';
import { UiButton, UiForm, UiHeading, UiSheet, UiTextArea } from '@/shared/ui';
import { Article, useLikeArticleMutation } from '@/shared/stores/queries';
import { useCreateCommentMutation, Comment } from '@/shared/stores/queries/comment/comment.api';

export const TheArticle: FC<Article> = article => {
  const [like, {}] = useLikeArticleMutation();
  const [createComment, {}] = useCreateCommentMutation();
  const { control, formState, handleSubmit } = useForm<Comment>();
  const [isOpenComments, setIsOpenComments] = useState<boolean>(false);

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
            <button
              className='flex items-center gap-1 py-1 px-2 hover:bg-rose-100 rounded-full cursor-pointer transition-colors'
              onClick={() => like({ articleId: article.articleId })}
            >
              <HeartIcon className='size-4 text-slate-500' />
              <span className='text-slate-500'>{article.like.length}</span>
            </button>
            <button
              onClick={() => setIsOpenComments(!isOpenComments)}
              className='flex items-center gap-1 py-1 px-2 hover:bg-slate-200 rounded-full cursor-pointer transition-colors'
            >
              <ChatBubbleOvalLeftIcon className='size-4 text-slate-500' />
              <span className='text-slate-500'>{article.comment.length}</span>
            </button>
          </div>
        </div>
        {isOpenComments && (
          <>
            <div className='bg-slate-200 h-0.5 my-4'></div>
            <div className='grid gap-2'>
              {article.comment.map(comment => (
                <div key={comment.commentId} className='grid gap-1'>
                  <span>{comment.user.userName}</span>
                  <p>{comment.message}</p>
                </div>
              ))}
              <UiForm
                onSubmit={handleSubmit(formData =>
                  createComment({ articleId: article.articleId, message: formData.message }),
                )}
              >
                <Controller
                  control={control}
                  name='message'
                  defaultValue=''
                  rules={{
                    required: 'Это поле обязательно',
                  }}
                  render={({ field }) => (
                    <UiTextArea
                      id='message'
                      label='Оставить комментарий'
                      rows={2}
                      error={formState.errors.message?.message}
                      {...field}
                    />
                  )}
                />
                <UiButton variant='small' className='justify-self-end'>
                  Опубликовать
                </UiButton>
              </UiForm>
            </div>
          </>
        )}
      </UiSheet>
    </article>
  );
};
