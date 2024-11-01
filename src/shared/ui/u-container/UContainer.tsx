import { ReactNode, FC } from 'react';
import { clsx } from 'clsx';

interface IProps {
  children?: ReactNode;
  className?: string;
}

export const UContainer: FC<IProps> = ({ children, className }) => {
  return <div className={clsx([className, 'max-w-4xl mx-auto px-3'])}>{children}</div>;
};
