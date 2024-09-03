import { createLazyFileRoute, Link } from '@tanstack/react-router';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import { Container, Sheet } from '@/shared/ui';
import { FormLogin } from '@/components/form-login';

export const Route = createLazyFileRoute('/auth/')({
  component: AuthIndex,
});

function AuthIndex() {
  return (
    <Container className='grid grid-cols-[1fr_auto_1fr] items-center gap-8'>
      <Sheet>
        <h1 className='text-2xl font-semibold'>Вход</h1>
        <FormLogin />
      </Sheet>
      <div className='w-px h-full bg-slate-200 dark:bg-neutral-700'></div>
      <div className='flex justify-center'>
        <div className='mt-8'>
          <p className='text-2xl'>
            Еще нет <br />
            Аккаунта?
          </p>
          <Link
            to='/auth/register'
            className='flex items-center gap-3 mt-8 py-2 px-4 text-violet-600 hover:text-white hover:bg-violet-600 dark:text-violet-400 border-2 border-violet-600 rounded-md transition-colors'
          >
            <span className='text-lg font-medium'>Регистрация</span>
            <ArrowRightCircleIcon className='w-7 h-7' />
          </Link>
        </div>
      </div>
    </Container>
  );
}
