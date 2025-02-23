import { createFileRoute, Link } from '@tanstack/react-router';
import { DocumentPlusIcon } from '@heroicons/react/24/solid';
import { ROUTES } from '@/app/constants';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <section>
      <Link
        to={ROUTES.POST_CREATE}
        className='flex justify-center items-center space-x-4 px-4 py-2 bg-slate-200 hover:bg-slate-300 dark:bg-neutral-700 dark:hover:bg-neutral-600 text-slate-600 dark:text-neutral-300 font-medium transition-colors rounded-full outline-none focus-visible:outline-blue-600'
      >
        <span className=''>Создать новый пост</span>
        <DocumentPlusIcon className='size-4' />
      </Link>
    </section>
  );
}
