import { createFileRoute } from '@tanstack/react-router';
import { useMutation } from '@tanstack/react-query';
import { Controller, useForm } from 'react-hook-form';
import { authService, RegisterData } from '@/services';
import { Button, CustomLink, Input, Sheet } from '@/shared/ui';
import { ROUTES } from '@/shared/constants';

export const Route = createFileRoute('/auth/register')({
  component: AuthRegister,
});

function AuthRegister() {
  const { mutate } = useMutation({
    mutationKey: ['register'],
    mutationFn: async (formData: RegisterData) => authService.register(formData),
  });

  const { control, formState, handleSubmit } = useForm<RegisterData>({
    mode: 'onChange',
  });

  return (
    <Sheet className='sm:max-w-md mx-auto py-4 px-6'>
      <h1 className='mb-6 text-xl font-semibold text-center'>Регистрация</h1>
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
        <Controller
          control={control}
          name='userName'
          defaultValue=''
          rules={{
            required: 'Это поле обязательно',
          }}
          render={({ field }) => (
            <Input
              {...field}
              label='Имя'
              error={formState.errors.userName?.message}
              placeholder='Аркадий'
              id='userName'
              type='text'
            />
          )}
        />
        <Button>Зарегистрироваться</Button>
      </form>
      <CustomLink to={ROUTES.AUTH} className='block'>
        Уже есть аккаунт? Войти
      </CustomLink>
    </Sheet>
  );
}
