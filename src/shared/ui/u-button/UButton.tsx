import { ReactNode, FC } from 'react';
import { clsx } from 'clsx';

interface IProps {
  children?: ReactNode;
  className?: string;
}

export const UButton: FC<IProps> = ({ children, className }) => {
  return (
    <button
      className={clsx([
        'block w-full p-1 rounded-full bg-blue-600 hover:bg-blue-700 text-center text-white font-medium',
        className,
      ])}
    >
      {children}
    </button>
  );
};
