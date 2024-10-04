import { createLazyFileRoute } from '@tanstack/react-router';
import { Container, Sheet, LinkRouter } from '@/shared/ui';
import { FormLogin } from '@/components/form-login';

export const Route = createLazyFileRoute('/auth/')({
  component: AuthIndex,
});

function AuthIndex() {
  return (
    <Container>
      <Sheet>
        <h1 className='text-2xl font-semibold'>Вход</h1>
        <FormLogin />
        <LinkRouter to='/auth/register' className='block mt-4'>
          Еще нет аккаунта? Регистрация
        </LinkRouter>
      </Sheet>
    </Container>
  );
}
