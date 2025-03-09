import { UiLink, UiSheet } from '@/shared/ui';
import { ROUTES } from '@/shared/routes';
import { LoginUserForm } from '@/features/login-user-form';

export default function Login() {
  return (
    <section className='pt-12 pb-6'>
      <UiSheet>
        <h1 className='mb-4 text-2xl font-bold'>Вход</h1>
        <LoginUserForm />
        <UiLink href={ROUTES.REGISTER}>Еще нет аккаунта? Зарегистрироваться</UiLink>
      </UiSheet>
    </section>
  );
}
