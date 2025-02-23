import { Controller, useForm } from 'react-hook-form';
import { createFileRoute, redirect, useNavigate } from '@tanstack/react-router';
import { ROUTES } from '@/app/constants';
import { Sheet, CustomLink, Button, Input } from '@/shared';
import { AuthData, useLoginMutation } from '@/stores/queries';

export const Route = createFileRoute('/auth/')({
  beforeLoad: async () => {
    let res = await fetch('http://localhost:5173/api/auth/check');
    if (res.status === 401) {
      res = await fetch('http://localhost:5173/api/auth/refresh');
      if (res.status === 200) redirect({ to: '/' });
    } else {
      redirect({ to: '/' });
    }
  },
  component: AuthIndex,
});

function AuthIndex() {
  const naviagate = useNavigate();
  const { control, formState, handleSubmit } = useForm<AuthData>({ mode: 'onChange' });
  const [login, {}] = useLoginMutation();

  const onSubmitForm = async (formData: AuthData) => {
    await login(formData);
    naviagate({ to: ROUTES.INDEX });
  };

  return (
    <Sheet className='sm:max-w-md mx-auto py-4 px-6'>
      <h1 className='mb-6 text-xl font-semibold text-center'>Вход</h1>
      <form className='mb-2 space-y-4' onSubmit={handleSubmit(formData => onSubmitForm(formData))}>
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
              type='text'
              id='email'
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
      <CustomLink to={ROUTES.REGISTER} className='block'>
        Еще нет аккаунта? Зарегистрироваться
      </CustomLink>
    </Sheet>
  );
}
