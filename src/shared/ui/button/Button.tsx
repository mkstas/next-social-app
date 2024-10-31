import { FC, ReactNode } from 'react';
import { clsx } from 'clsx';

interface IProps {
  children?: ReactNode;
  classname?: string;
}

export const Button: FC<IProps> = ({ children, classname }) => {
  return (
    <button
      className={clsx([
        'block w-full p-1 rounded-full bg-blue-600 hover:bg-blue-700 text-center font-medium text-white',
        classname,
      ])}
    >
      {children}
    </button>
  );
};
