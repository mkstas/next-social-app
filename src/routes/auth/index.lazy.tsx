import { createLazyFileRoute } from '@tanstack/react-router';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import { Button, Container, Sheet } from '@/shared/ui';
import { FormLogin } from '@/components/form-login';

export const Route = createLazyFileRoute('/auth/')({
  component: AuthIndex,
});

function AuthIndex() {
  return (
    <Container className='grid grid-cols-[1fr_auto_1fr] gap-8'>
      <Sheet>
        <h1 className='text-2xl font-semibold'>Вход</h1>
        <FormLogin />
      </Sheet>
      <div className='w-px h-full bg-slate-200 dark:bg-neutral-700'></div>

      <div className='flex'>
        <div className='mt-12 mx-auto'>
          <p className='text-2xl'>
            Еще нет <br />
            Аккаунта?
          </p>
          <Button.Link
            to='/auth/register'
            variant='outline'
            className='flex justify-center gap-2 mt-6 w-48'
          >
            <span className='text-lg font-medium'>Регистрация</span>
            <ArrowRightCircleIcon className='w-7 h-7' />
          </Button.Link>
        </div>
      </div>
    </Container>
  );
}
