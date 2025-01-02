import { ReactNode, FC } from 'react';
import { Link } from '@tanstack/react-router';
import { clsx } from 'clsx';

interface Props {
  children?: ReactNode;
  className?: string;
  to: string;
}

export const CustomLink: FC<Props> = ({ children, className, to }) => {
  return (
    <Link
      to={to}
      className={clsx([
        'text-blue-600 dark:text-blue-400 hover:underline outline-none focus-visible:outline-blue-600 rounded-sm',
        className,
      ])}
    >
      {children}
    </Link>
  );
};
