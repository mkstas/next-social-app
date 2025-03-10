import { UiLink, UiSheet } from '@/shared/ui';
import { ROUTES } from '@/shared/routes';
import { RegisterUserForm } from '@/features/regitser-user-form';

export default function Register() {
  return (
    <section className='pt-12 pb-6 max-w-96'>
      <UiSheet>
        <div className='grid gap-4'>
          <h1 className='text-2xl font-bold'>Регистрация</h1>
          <RegisterUserForm />
          <UiLink href={ROUTES.LOGIN}>Уже есть аккаунт? Войти</UiLink>
        </div>
      </UiSheet>
    </section>
  );
}
