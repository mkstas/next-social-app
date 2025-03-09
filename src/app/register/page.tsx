import { UiLink, UiSheet } from '@/shared/ui';
import { ROUTES } from '@/shared/routes';
import { RegisterUserForm } from '@/features/regitser-user-form';

export default function Register() {
  return (
    <section className='pt-12 pb-6'>
      <UiSheet>
        <h1 className='mb-4 text-2xl font-bold'>Регистрация</h1>
        <RegisterUserForm />
        <UiLink href={ROUTES.LOGIN}>Уже есть аккаунт? Войти</UiLink>
      </UiSheet>
    </section>
  );
}
