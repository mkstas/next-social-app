import { FC, ReactNode } from 'react';
import { clsx } from 'clsx';

type PropsType = {
  children: ReactNode;
  className?: string;
};

export const Container: FC<PropsType> = ({ children, className }) => {
  return <div className={clsx(['max-w-5xl mx-auto px-2', className])}>{children}</div>;
};
