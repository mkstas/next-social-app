import { ReactNode } from 'react';
import { clsx } from 'clsx';

interface IProps {
  children?: ReactNode;
  className?: string;
}

export function Sheet({ children, className }: IProps) {
  return (
    <div
      className={clsx([
        'p-4 bg-white dark:bg-neutral-800 border border-slate-200 dark:border-neutral-700 rounded-md shadow-lg shadow-slate-500/5 dark:shadow-neutral-500/5',
        className,
      ])}
    >
      {children}
    </div>
  );
}
