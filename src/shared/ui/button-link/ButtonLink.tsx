import { ReactNode, FC } from 'react';
import { Link } from '@tanstack/react-router';
import { clsx } from 'clsx';

interface Props {
  children?: ReactNode;
  className?: string;
  size?: 'sm' | 'md';
  to: string;
}

export const ButtonLink: FC<Props> = ({ children, className, size = 'md', to }) => {
  return (
    <Link
      to={to}
      className={clsx([
        'block rounded-full bg-blue-600 hover:bg-blue-700 text-center font-medium text-white outline-none focus-visible:outline-blue-600 transition-colors',
        size === 'md' && 'py-2 px-4',
        size === 'sm' && 'py-1 px-2',
        className,
      ])}
    >
      {children}
    </Link>
  );
};
