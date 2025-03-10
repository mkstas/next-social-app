import { UiHeading, UiLink, UiSheet } from '@/shared/ui';
import { ROUTES } from '@/shared/utils/constants';
import { LoginUserForm } from '@/features/login-user-form';

export default function Auth() {
  return (
    <UiSheet>
      <div className='grid gap-4'>
        <UiHeading>Вход</UiHeading>
        <LoginUserForm />
        <UiLink href={ROUTES.REGISTER}>Еще нет аккаунта? Зарегистрироваться</UiLink>
      </div>
    </UiSheet>
  );
}
