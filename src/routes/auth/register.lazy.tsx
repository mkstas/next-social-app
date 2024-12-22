import { createLazyFileRoute } from '@tanstack/react-router';
import { UButton, ULink, USheet } from '@/shared/ui';
import { ROUTES } from '@/shared/constants';

export const Route = createLazyFileRoute('/auth/register')({
  component: AuthRegister,
});

function AuthRegister() {
  return (
    <USheet className='sm:max-w-md mx-auto py-4 px-6'>
      <h1 className='mb-6 text-xl font-semibold text-center'>Регистрация</h1>
      <form className='mb-2 space-y-4' action=''>
        <div className='grid'>
          <label className='pb-1' htmlFor='email'>
            Электронная почта
          </label>
          <input
            id='email'
            className='py-1 px-3 rounded-full bg-slate-100 dark:bg-neutral-700'
            type='email'
            placeholder='example@mail.ru'
          />
          <span className='pt-1 text-red-600 dark:text-red-400'>ошибка</span>
        </div>
        <div className='grid'>
          <label className='pb-1' htmlFor='email'>
            Пароль
          </label>
          <input
            id='email'
            className='py-1 px-3 rounded-full bg-slate-100 dark:bg-neutral-700'
            type='email'
            placeholder='••••••••'
          />
          <span className='pt-1 text-red-600 dark:text-red-400'>ошибка</span>
        </div>
        <UButton>Войти</UButton>
      </form>
      <ULink to={ROUTES.AUTH} className='block'>
        Уже есть аккаунт? Войти
      </ULink>
    </USheet>
  );
}
