import { createLazyFileRoute, redirect } from '@tanstack/react-router';
import { useMutation } from '@tanstack/react-query';
import { Controller, useForm } from 'react-hook-form';
import { AuthData, userService } from '@/services';
import { Button, CustomLink, Input, Sheet } from '@/shared/ui';
import { ROUTES } from '@/shared/constants';
import { useEffect } from 'react';

export const Route = createLazyFileRoute('/auth/')({
  component: AuthIndex,
});

function AuthIndex() {
  const { mutate, isSuccess } = useMutation({
    mutationKey: ['auth'],
    mutationFn: async (formData: AuthData) => userService.login(formData),
  });

  const { control, formState, handleSubmit } = useForm<AuthData>({
    mode: 'onChange',
  });

  useEffect(() => {
    userService.getProfile().then(() => redirect({ to: ROUTES.INDEX }));
  }, [isSuccess]);

  return (
    <Sheet className='sm:max-w-md mx-auto py-4 px-6'>
      <h1 className='mb-6 text-xl font-semibold text-center'>Вход</h1>
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
              label='Электронная почта'
              error={formState.errors.email?.message}
              placeholder='example@mail.ru'
              id='email'
              type='text'
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
              label='Пароль'
              error={formState.errors.password?.message}
              placeholder='••••••••'
              id='password'
              type='password'
            />
          )}
        />
        <Button>Войти</Button>
      </form>
      <CustomLink to={ROUTES.REGISTER} className='block'>
        Еще нет аккаунта? Зарегистрироваться
      </CustomLink>
    </Sheet>
  );
}
