import { createLazyFileRoute } from '@tanstack/react-router';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import { Button, Container, Sheet } from '@/shared/ui';
import { FormRegister } from '@/components/form-register';

export const Route = createLazyFileRoute('/auth/register')({
  component: AuthRegister,
});

function AuthRegister() {
  return (
    <Container className='grid grid-cols-[1fr_auto_1fr] gap-8'>
      <Sheet>
        <h1 className='text-2xl font-semibold'>Вход</h1>
        <FormRegister />
      </Sheet>
      <div className='w-px h-full bg-slate-200 dark:bg-neutral-700'></div>

      <div className='flex'>
        <div className='mt-12 mx-auto'>
          <p className='text-2xl'>
            Уже есть
            <br /> Аккаунт?
          </p>
          <Button.Link to='/auth' variant='outline' className='flex justify-center gap-2 mt-6 w-48'>
            <span className='text-lg font-medium'>Вход</span>
            <ArrowRightCircleIcon className='w-7 h-7' />
          </Button.Link>
        </div>
      </div>
    </Container>
  );
}
