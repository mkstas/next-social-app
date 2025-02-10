import { FC } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from '@tanstack/react-router';
import { useMutation } from '@tanstack/react-query';
import { RegisterData, authService } from '@/services';
import { Input, Button } from '@/shared/ui';
import { ROUTES } from '@/shared/constants';

export const FormRegister: FC = () => {
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationKey: ['register'],
    mutationFn: async (formData: RegisterData) => authService.register(formData),
    onSuccess: () => {
      navigate({ to: ROUTES.INDEX });
    },
  });

  const { control, formState, handleSubmit } = useForm<RegisterData>({
    mode: 'onChange',
  });

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
  );
};
