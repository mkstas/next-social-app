import { ReactNode, FC } from 'react';
import { Link } from '@tanstack/react-router';
import { clsx } from 'clsx';

interface IProps {
  children?: ReactNode;
  className?: string;
  to: string;
}

export const ULink: FC<IProps> = ({ children, className, to }) => {
  return (
    <Link to={to} className={clsx(['text-blue-600 dark:text-blue-400 hover:underline', className])}>
      {children}
    </Link>
  );
};
