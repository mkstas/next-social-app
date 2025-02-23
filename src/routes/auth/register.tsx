import { Controller, useForm } from 'react-hook-form';
import { createFileRoute, redirect, useNavigate } from '@tanstack/react-router';
import { ROUTES } from '@/app/constants';
import { RegisterData, useRegisterMutation } from '@/stores/queries';
import { Sheet, Input, Button, CustomLink } from '@/shared';

export const Route = createFileRoute('/auth/register')({
  beforeLoad: async () => {
    let res = await fetch('http://localhost:5173/api/auth/check');
    if (res.status === 401) {
      res = await fetch('http://localhost:5173/api/auth/refresh');
      if (res.status === 200) throw redirect({ to: '/' });
    }
    throw redirect({ to: '/' });
  },
  component: AuthRegister,
});

function AuthRegister() {
  const naviage = useNavigate();
  const { control, formState, handleSubmit } = useForm<RegisterData>({ mode: 'onChange' });
  const [register, {}] = useRegisterMutation();

  const onSubmitForm = async (formData: RegisterData) => {
    await register(formData);
    naviage({ to: ROUTES.INDEX });
  };

  return (
    <Sheet className='sm:max-w-md mx-auto py-4 px-6'>
      <h1 className='mb-6 text-xl font-semibold text-center'>Регистрация</h1>
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
