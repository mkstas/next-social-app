'use client';

import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { UiButton, UiTextArea } from '@/shared/ui';
import { CreateArticleData } from '@/shared/stores/queries';

export const CreateArticleForm: FC = () => {
  const { control, formState } = useForm<CreateArticleData>();

  return (
    <form className='grid gap-3'>
      <Controller
        control={control}
        name='content'
        defaultValue=''
        rules={{
          required: 'Это поле обязательно',
        }}
        render={({ field }) => (
          <UiTextArea
            id='email'
            label='Электронная почта'
            placeholder='example@mail.ru'
            rows={6}
            error={formState.errors.content?.message}
            {...field}
          />
        )}
      />
      <UiButton>Создать</UiButton>
    </form>
  );
};
