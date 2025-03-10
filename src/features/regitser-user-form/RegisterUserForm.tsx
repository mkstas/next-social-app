'use client';

import { FC, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { redirect } from 'next/navigation';
import { UiTextField, UiButton } from '@/shared/ui';
import { RegisterData, useRegisterMutation } from '@/shared/stores/queries';
import { ROUTES } from '@/shared/routes';

export const RegisterUserForm: FC = () => {
  const { control, formState, handleSubmit } = useForm<RegisterData>({ mode: 'onChange' });
  const [register, { isSuccess }] = useRegisterMutation();

  useEffect(() => {
    if (isSuccess) {
      redirect(ROUTES.INDEX);
    }
  }, [isSuccess]);

  return (
    <form onSubmit={handleSubmit(formData => register(formData))} className='grid gap-3'>
      <Controller
        control={control}
        name='userName'
        defaultValue=''
        rules={{
          required: 'Это поле обязательно',
        }}
        render={({ field }) => (
          <UiTextField
            type='text'
            id='userName'
            label='Имя пользователя'
            placeholder='Аркадий'
            error={formState.errors.userName?.message}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name='email'
        defaultValue=''
        rules={{
          required: 'Это поле обязательно',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: 'Неверный формат почты',
          },
        }}
        render={({ field }) => (
          <UiTextField
            type='text'
            id='email'
            label='Электронная почта'
            placeholder='example@mail.ru'
            error={formState.errors.email?.message}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name='password'
        defaultValue=''
        rules={{
          required: 'Это поле обязательно',
          minLength: {
            value: 8,
            message: 'Не менее 8 символов',
          },
        }}
        render={({ field }) => (
          <UiTextField
            type='password'
            id='password'
            label='Пароль'
            placeholder='••••••••'
            error={formState.errors.password?.message}
            {...field}
          />
        )}
      />
      <UiButton>Зарегистрироваться</UiButton>
    </form>
  );
};
