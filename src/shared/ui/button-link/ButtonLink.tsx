import { FC, ReactNode } from 'react';
import { Link } from '@tanstack/react-router';
import { clsx } from 'clsx';

interface IProps {
  children?: ReactNode;
  classname?: string;
  to: string;
}

export const ButtonLink: FC<IProps> = ({ children, classname, to }) => {
  return (
    <Link
      to={to}
      className={clsx([
        'block p-1 rounded-full bg-blue-600 hover:bg-blue-700 text-center font-medium text-white',
        classname,
      ])}
    >
      {children}
    </Link>
  );
};
