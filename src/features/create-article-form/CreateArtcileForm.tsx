'use client';

import { FC, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { UiButton, UiForm, UiTextArea, UiTextField } from '@/shared/ui';
import { CreateArticleData, useCreateArticleMutation } from '@/shared/stores/queries';
import { redirect } from 'next/navigation';
import { ROUTES } from '@/shared/utils/constants';

export const CreateArticleForm: FC = () => {
  const { control, formState, handleSubmit } = useForm<CreateArticleData>();
  const [createArticle, { isSuccess: isArticleCreated }] = useCreateArticleMutation();

  useEffect(() => {
    if (isArticleCreated) {
      redirect(ROUTES.INDEX);
    }
  }, [isArticleCreated]);

  return (
    <UiForm onSubmit={handleSubmit(formData => createArticle(formData))}>
      <Controller
        control={control}
        name='title'
        defaultValue=''
        rules={{
          required: 'Это поле обязательно',
        }}
        render={({ field }) => (
          <UiTextField
            type='text'
            id='title'
            label='Заголовок'
            placeholder='Заголовок'
            error={formState.errors.content?.message}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name='content'
        defaultValue=''
        rules={{
          required: 'Это поле обязательно',
        }}
        render={({ field }) => (
          <UiTextArea
            id='content'
            label='Содержание'
            placeholder='Содержание...'
            rows={6}
            error={formState.errors.content?.message}
            {...field}
          />
        )}
      />
      <div className='justify-self-end'>
        <UiButton>Создать</UiButton>
      </div>
    </UiForm>
  );
};
