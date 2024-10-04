import { createLazyFileRoute } from '@tanstack/react-router';
import { Container, Sheet, LinkRouter } from '@/shared/ui';
import { FormRegister } from '@/components/form-register';

export const Route = createLazyFileRoute('/auth/register')({
  component: AuthRegister,
});

function AuthRegister() {
  return (
    <Container>
      <Sheet>
        <h1 className='text-2xl font-semibold'>Регистрация</h1>
        <FormRegister />
        <LinkRouter to='/auth' className='block mt-4'>
          Уже есть аккаунт? Вход
        </LinkRouter>
      </Sheet>
    </Container>
  );
}
