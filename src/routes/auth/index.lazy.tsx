import { FormEvent } from 'react';
import { createLazyFileRoute, Link } from '@tanstack/react-router';
import { Button, Sheet, Textfield } from '@/shared/ui';
import { ROUTES } from '@/shared/constants';

export const Route = createLazyFileRoute('/auth/')({
  component: AuthIndex,
});

function AuthIndex() {
  const onSumbmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Sheet className='py-4 px-6'>
      <h1 className='mb-6 text-xl font-semibold'>Вход</h1>
      <form onSubmit={onSumbmitForm} className='mb-4'>
        <div className='space-y-2 mb-4'>
          <Textfield
            id='email'
            type='email'
            placeholder='example@mail.ru'
            label='Электронная почта'
            error='Неверный логин или пароль'
          />
          <Textfield
            id='password'
            type='password'
            placeholder='••••••••'
            label='Пароль'
            error='Неверный логин или пароль'
          />
        </div>
        <Button>Войти</Button>
      </form>
      <Link to={ROUTES.REGISTER} className='text-blue-600 dark:text-blue-400 hover:underline'>
        Нет аккаунта? Зарегистрироваться
      </Link>
    </Sheet>
  );
}
