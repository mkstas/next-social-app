'use client';

import { FC, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { redirect } from 'next/navigation';
import { UiTextField, UiButton, UiForm } from '@/shared/ui';
import { ROUTES } from '@/shared/utils/constants';
import { AuthData, useLoginUserMutation } from '@/entities/users';

export const LoginUserForm: FC = () => {
  const { control, formState, handleSubmit } = useForm<AuthData>({ mode: 'onChange' });
  const [loginUser, { isSuccess: isLoginSuccess }] = useLoginUserMutation();

  useEffect(() => {
    if (isLoginSuccess) {
      redirect(ROUTES.INDEX);
    }
  }, [isLoginSuccess]);

  return (
    <UiForm onSubmit={handleSubmit(formData => loginUser(formData))}>
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
      <UiButton>Войти</UiButton>
    </UiForm>
  );
};
