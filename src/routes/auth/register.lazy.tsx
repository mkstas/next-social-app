import { createLazyFileRoute } from '@tanstack/react-router';
import { useForm, SubmitHandler } from 'react-hook-form';
import { UButton, ULink, USheet } from '@/shared/ui';
import { ROUTES } from '@/shared/constants';

export const Route = createLazyFileRoute('/auth/register')({
  component: AuthRegister,
});

interface IForm {
  email: string;
  password: string;
}

function AuthRegister() {
  const { register, handleSubmit, formState } = useForm<IForm>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<IForm> = data => {
    console.log(data);
  };

  return (
    <USheet className='sm:max-w-md mx-auto py-4 px-6'>
      <h1 className='mb-6 text-xl font-semibold text-center'>Регистрация</h1>
      <form className='mb-2 space-y-4' onSubmit={handleSubmit(onSubmit)}>
        <div className='grid'>
          <label className='pb-1' htmlFor='email'>
            Электронная почта
          </label>
          <input
            id='email'
            className='py-1 px-3 rounded-full bg-slate-100 dark:bg-neutral-700'
            type='text'
            placeholder='example@mail.ru'
            {...register('email', {
              required: 'Это поле обязательно',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Неверный формат почты',
              },
            })}
          />
          {formState.errors.email?.message && (
            <span className='pt-1 text-red-600 dark:text-red-400'>
              {formState.errors.email.message}
            </span>
          )}
        </div>
        <div className='grid'>
          <label className='pb-1' htmlFor='password'>
            Пароль
          </label>
          <input
            id='password'
            className='py-1 px-3 rounded-full bg-slate-100 dark:bg-neutral-700'
            type='password'
            placeholder='••••••••'
            {...register('password', {
              required: 'Это поле обязательно',
              minLength: {
                value: 8,
                message: 'Не менее 8 символов',
              },
            })}
          />
          {formState.errors.password?.message && (
            <span className='pt-1 text-red-600 dark:text-red-400'>
              {formState.errors.password.message}
            </span>
          )}
        </div>
        <UButton>Зарегистрироваться</UButton>
      </form>
      <ULink to={ROUTES.AUTH} className='block'>
        Уже есть аккаунт? Войти
      </ULink>
    </USheet>
  );
}
