import { ReactNode, FC } from 'react';
import { Link } from '@tanstack/react-router';
import { clsx } from 'clsx';

interface IProps {
  children?: ReactNode;
  className?: string;
  to: string;
}

export const UButtonLink: FC<IProps> = ({ children, className, to }) => {
  return (
    <Link
      to={to}
      className={clsx([
        'block p-1 rounded-full bg-blue-600 hover:bg-blue-700 text-center font-medium text-white',
        className,
      ])}
    >
      {children}
    </Link>
  );
};
