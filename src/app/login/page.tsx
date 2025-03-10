import { UiLink, UiSheet } from '@/shared/ui';
import { ROUTES } from '@/shared/routes';
import { LoginUserForm } from '@/features/login-user-form';

export default function Login() {
  return (
    <section className='pt-12 pb-6 max-w-96'>
      <UiSheet>
        <div className='grid gap-4'>
          <h1 className='text-2xl font-bold'>Вход</h1>
          <LoginUserForm />
          <UiLink href={ROUTES.REGISTER}>Еще нет аккаунта? Зарегистрироваться</UiLink>
        </div>
      </UiSheet>
    </section>
  );
}
