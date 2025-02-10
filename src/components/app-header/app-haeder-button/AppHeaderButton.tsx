import { FC } from 'react';
import { UserIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

interface Props {
  onClickButton: () => void;
}

export const AppHeaderButton: FC<Props> = ({ onClickButton }) => {
  return (
    <button
      id='header_button'
      className='flex items-center space-x-2 p-2 hover:bg-slate-100 dark:hover:bg-neutral-700 outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm'
      onClick={onClickButton}
    >
      <span className='block p-2 rounded-full bg-slate-200'>
        <UserIcon className='w-6 h-6 text-slate-600' />
      </span>
      <ChevronDownIcon className='w-4 h-4 text-slate-600 dark:text-neutral-400' />
    </button>
  );
};
