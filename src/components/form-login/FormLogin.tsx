import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { AuthData, authService } from '@/services';
import { Button, Input } from '@/shared/ui';
import { useMutation } from '@tanstack/react-query';

export const FormLogin: FC = () => {
  const { mutate } = useMutation({
    mutationKey: ['login'],
    mutationFn: async (formData: AuthData) => authService.login(formData),
  });

  const { control, formState, handleSubmit } = useForm<AuthData>({ mode: 'onChange' });

  return (
    <form className='mb-2 space-y-4' onSubmit={handleSubmit(formData => mutate(formData))}>
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
          <Input
            {...field}
            error={formState.errors.email?.message}
            id='email'
            type='text'
            label='Электронная почта'
            placeholder='example@mail.ru'
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
          <Input
            {...field}
            error={formState.errors.password?.message}
            id='password'
            type='password'
            label='Пароль'
            placeholder='••••••••'
          />
        )}
      />
      <Button>Войти</Button>
    </form>
  );
};
