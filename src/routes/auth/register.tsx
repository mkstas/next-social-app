import { createFileRoute, redirect } from '@tanstack/react-router';
import { CustomLink, Sheet } from '@/shared/ui';
import { ROUTES } from '@/shared/constants';
import { authService } from '@/services';
import { FormRegister } from '@/components/form-register';

export const Route = createFileRoute('/auth/register')({
  beforeLoad: async () => {
    const res = await authService.check();
    if (res?.status === 200) {
      throw redirect({ to: '/' });
    }
  },
  component: AuthRegister,
});

function AuthRegister() {
  return (
    <Sheet className='sm:max-w-md mx-auto py-4 px-6'>
      <h1 className='mb-6 text-xl font-semibold text-center'>Регистрация</h1>
      <FormRegister />
      <CustomLink to={ROUTES.AUTH} className='block'>
        Уже есть аккаунт? Войти
      </CustomLink>
    </Sheet>
  );
}
