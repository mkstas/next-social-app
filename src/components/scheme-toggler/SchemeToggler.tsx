import { FC } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useTypedDispatch, useTypedSelector } from '@/store/hooks';
import { toggleColorScheme } from '@/store/slices';
import { COLOR_SCHEMES } from '@/shared/constants';

export const SchemeToggler: FC = () => {
  const colorScheme = useTypedSelector(state => state.colorScheme.value);
  const dispatch = useTypedDispatch();

  return (
    <div className='relative inline-block p-2 rounded-full bg-slate-200 dark:bg-neutral-700'>
      <label
        htmlFor='theme'
        className='absolute top-0 left-0 w-full h-full z-20 cursor-pointer'
      ></label>
      <input
        type='checkbox'
        id='theme'
        className='sr-only peer'
        checked={colorScheme === COLOR_SCHEMES.DARK ? true : false}
        onChange={() => dispatch(toggleColorScheme())}
      />
      <div className='relative z-10 flex space-x-3'>
        <SunIcon className='h-5 w-5 text-yellow-400' />
        <MoonIcon className='h-5 w-5 text-violet-600' />
      </div>
      <div className='absolute left-1 peer-checked:left-9 top-1 bg-blue-600 w-7 h-7 rounded-full dark:bg-slate-200 transition-all'></div>
    </div>
  );
};
