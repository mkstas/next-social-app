import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export const SchemeToggler = () => {
  const [scheme, setScheme] = useState('light');

  const toggleScheme = () => {
    document.documentElement.classList.toggle('dark');
    setScheme(scheme === 'light' ? 'dark' : 'light');
    localStorage.setItem('color-scheme', scheme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const userMedia = localStorage.getItem('color-scheme');
    const systemMedia = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (!userMedia) {
      localStorage.setItem('color-scheme', systemMedia ? 'dark' : 'light');
      if (systemMedia) {
        setScheme('dark');
        document.documentElement.classList.add('dark');
      } else {
        setScheme('light');
      }
    } else {
      if (userMedia === 'dark') {
        document.documentElement.classList.add('dark');
      }
      setScheme(userMedia);
    }
  }, []);

  return (
    <div className='inline-block bg-slate-200 dark:bg-neutral-700 rounded-full relative p-2'>
      <label
        htmlFor='theme'
        className='absolute top-0 left-0 w-full h-full z-20 cursor-pointer'
      ></label>
      <input
        type='checkbox'
        id='theme'
        className='sr-only peer'
        checked={scheme === 'dark' ? true : false}
        onChange={toggleScheme}
      />
      <div className='flex space-x-3 relative z-10'>
        <SunIcon className='h-5 w-5 text-yellow-400' />
        <MoonIcon className='h-5 w-5 text-violet-600' />
      </div>
      <div className='bg-blue-600 dark:bg-slate-200 rounded-full w-7 h-7 absolute left-1 peer-checked:left-9 top-1 transition-all'></div>
    </div>
  );
};
