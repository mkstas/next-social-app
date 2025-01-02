import { ReactNode, FC } from 'react';
import { clsx } from 'clsx';

interface Props {
  children?: ReactNode;
  className?: string;
  size?: 'sm' | 'md';
}

export const Button: FC<Props> = ({ children, className, size = 'md' }) => {
  return (
    <button
      className={clsx([
        'block w-full rounded-full bg-blue-600 hover:bg-blue-700 text-center text-white font-medium outline-none focus-visible:outline-blue-600 transition-colors',
        size === 'md' && 'py-2 px-4',
        size === 'sm' && 'py-1 px-2',
        className,
      ])}
    >
      {children}
    </button>
  );
};
