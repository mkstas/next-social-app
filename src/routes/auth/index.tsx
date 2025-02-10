import { createFileRoute, redirect } from '@tanstack/react-router';
import { authService } from '@/services';
import { CustomLink, Sheet } from '@/shared/ui';
import { ROUTES } from '@/shared/constants';
import { FormLogin } from '@/components/form-login';

export const Route = createFileRoute('/auth/')({
  beforeLoad: async () => {
    const res = await authService.check();
    if (res.status === 200) {
      throw redirect({ to: '/' });
    }
  },
  component: AuthIndex,
});

function AuthIndex() {
  return (
    <Sheet className='sm:max-w-md mx-auto py-4 px-6'>
      <h1 className='mb-6 text-xl font-semibold text-center'>Вход</h1>
      <FormLogin />
      <CustomLink to={ROUTES.REGISTER} className='block'>
        Еще нет аккаунта? Зарегистрироваться
      </CustomLink>
    </Sheet>
  );
}
