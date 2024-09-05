import { TextField, Button } from '@/shared/ui';

export function FormRegister() {
  return (
    <form className='mt-4 space-y-4'>
      <TextField
        id='name'
        type='text'
        label='Имя'
        error='Имя не может быть пустым'
        placeholder='Иван Иванов'
      />
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
