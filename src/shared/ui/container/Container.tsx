import { ReactNode } from 'react';
import { clsx } from 'clsx';

interface IProps {
  children?: ReactNode;
  className?: string;
}

export function Container({ children, className }: IProps) {
  return <div className={clsx(['max-w-4xl mx-auto px-2', className])}>{children}</div>;
}
