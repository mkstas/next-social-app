import { UiHeading, UiLink, UiSheet } from '@/shared/ui';
import { ROUTES } from '@/shared/utils/constants';
import { RegisterUserForm } from '@/features/regitser-user-form';

export default function Register() {
  return (
    <UiSheet>
      <div className='grid gap-4'>
        <UiHeading>Регистрация</UiHeading>
        <RegisterUserForm />
        <UiLink href={ROUTES.LOGIN}>Уже есть аккаунт? Войти</UiLink>
      </div>
    </UiSheet>
  );
}
