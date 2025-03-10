'use client';

import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { UiButton, UiForm, UiTextArea } from '@/shared/ui';
import { CreateArticleData } from '@/shared/stores/queries';

export const CreateArticleForm: FC = () => {
  const { control, formState } = useForm<CreateArticleData>();

  return (
    <UiForm>
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
