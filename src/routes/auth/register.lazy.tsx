import { createLazyFileRoute, Link } from '@tanstack/react-router';
import { Container, Sheet } from '@/shared/ui';
import { FormRegister } from '@/components/form-register';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';

export const Route = createLazyFileRoute('/auth/register')({
  component: AuthRegister,
});

function AuthRegister() {
  return (
    <Container className='grid grid-cols-[1fr_auto_1fr] items-center gap-8'>
      <Sheet>
        <h1 className='text-2xl font-semibold'>Вход</h1>
        <FormRegister />
      </Sheet>
      <div className='w-px h-full bg-slate-200 dark:bg-neutral-700'></div>
      <div className='flex'>
        <div className='mt-8 mx-auto'>
          <p className='text-2xl'>
            Уже есть
            <br /> Аккаунт?
          </p>
          <Link
            to='/auth'
            className='flex items-center gap-3 mt-8 py-2 px-4 text-violet-600 hover:text-white hover:bg-violet-600 dark:text-violet-400 border-2 border-violet-600 rounded-md transition-colors'
          >
            <span className='text-lg font-medium'>Вход</span>
            <ArrowRightCircleIcon className='w-7 h-7' />
          </Link>
        </div>
      </div>
    </Container>
  );
}
