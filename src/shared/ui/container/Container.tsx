import { FC, ReactNode } from 'react';
import { clsx } from 'clsx';

interface IProps {
  children?: ReactNode;
  classname?: string;
}

export const Container: FC<IProps> = ({ children, classname }) => {
  return <div className={clsx([classname, 'max-w-4xl mx-auto px-3'])}>{children}</div>;
};
