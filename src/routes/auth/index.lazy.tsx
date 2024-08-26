import { createLazyFileRoute, Link } from '@tanstack/react-router';
import { Container, Sheet } from '@/shared/ui';
import { FormLogin } from '@/components/form-login';

export const Route = createLazyFileRoute('/auth/')({
  component: AuthIndex,
});

function AuthIndex() {
  return (
    <Container className='grid grid-cols-[1fr_auto_1fr] items-center gap-8 mt-32'>
      <Sheet>
        <h1 className='text-2xl font-semibold'>Вход</h1>
        <FormLogin />
      </Sheet>
      <div className='w-px h-full bg-slate-200 dark:bg-neutral-700'></div>
      <Link to='/auth/register'>Регистрация</Link>
    </Container>
  );
}
