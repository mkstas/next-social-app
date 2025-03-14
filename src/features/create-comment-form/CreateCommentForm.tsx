'use client';

import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { UiButton, UiForm, UiTextArea } from '@/shared/ui';
import { useCreateCommentMutation, CreateCommentData } from '@/entities/comments';

interface Props {
  articleId: number;
}

export const CreateCommentForm: FC<Props> = ({ articleId }) => {
  const { control, formState, handleSubmit, resetField } = useForm<CreateCommentData>();
  const [createComment, {}] = useCreateCommentMutation();

  const onSubmitForm = async (formData: CreateCommentData) => {
    await createComment({ articleId, message: formData.message });
    resetField('message');
  };

  return (
    <UiForm onSubmit={handleSubmit(formData => onSubmitForm(formData))}>
      <Controller
        control={control}
        name='message'
        defaultValue=''
        rules={{
          required: 'Это поле обязательно',
        }}
        render={({ field }) => (
          <UiTextArea id='message' rows={2} error={formState.errors.message?.message} {...field} />
        )}
      />
      <UiButton variant='small' className='justify-self-end'>
        Оставить комментарий
      </UiButton>
    </UiForm>
  );
};
