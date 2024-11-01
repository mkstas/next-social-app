import { ReactNode, FC } from 'react';
import { clsx } from 'clsx';

interface IProps {
  children?: ReactNode;
  className?: string;
}

export const UHeading: FC<IProps> = ({ children, className }) => {
  return <h1 className={clsx(['text-xl font-semibold', className])}>{children}</h1>;
};
