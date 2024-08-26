import { ReactNode } from '@tanstack/react-router';
import { clsx } from 'clsx';

type PropsType = {
  children?: ReactNode;
  className?: string;
};

export function Button({ children, className }: PropsType) {
  return (
    <button
      className={clsx(
        'block w-full py-2 px-4 text-slate-100 bg-violet-600 hover:bg-violet-700 outline-none focus-within:outline-violet-500 rounded-md',
        className,
      )}
    >
      {children}
    </button>
  );
}
