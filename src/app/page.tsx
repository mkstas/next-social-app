import Link from 'next/link';
import { PlusCircleIcon } from '@heroicons/react/24/solid';
import { ROUTES } from '@/shared/routes';

export default function Root() {
  return (
    <section className='grid gap-4'>
      <Link
        href={ROUTES.CREATE}
        className='flex items-center justify-center gap-2 bg-slate-200 hover:bg-slate-300 py-2 px-4 rounded-full transition-colors'
      >
        <span className='text-slate-600 font-medium'>Создать пост</span>
        <PlusCircleIcon className='size-6 text-slate-500' />
      </Link>
    </section>
  );
}
