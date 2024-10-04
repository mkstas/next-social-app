import { TextField, Button } from '@/shared/ui';
import { clsx } from 'clsx';

interface IProps {
  className?: string;
}

export function FormLogin({ className }: IProps) {
  return (
    <form className={clsx('mt-4 space-y-4', className)}>
      <TextField
        id='email'
        type='email'
        label='Электронная почта'
        error='Неверный формат почты'
        placeholder='example@yandex.ru'
      />
      <TextField
        id='password'
        type='password'
        label='Пароль'
        error='Неверная почта или пароль'
        placeholder='••••••••'
      />
      <Button>Войти</Button>
    </form>
  );
}
