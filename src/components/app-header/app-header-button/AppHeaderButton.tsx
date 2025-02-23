import { FC } from 'react';
import { UserIcon, ChevronDownIcon } from '@heroicons/react/24/solid';

interface Props {
  onClickButton: () => void;
}

export const AppHeaderButton: FC<Props> = ({ onClickButton }) => {
  return (
    <button
      onClick={onClickButton}
      id='headerButton'
      className='flex items-center space-x-2 p-2 hover:bg-slate-100 dark:hover:bg-neutral-700 outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:rounded-sm'
    >
      <span className='block p-2 rounded-full bg-slate-200'>
        <UserIcon className='size-6 text-slate-400' />
      </span>
      <ChevronDownIcon className='size-4 text-slate-600 dark:text-neutral-400' />
    </button>
  );
};
