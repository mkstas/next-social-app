import { ReactNode } from 'react';
import { clsx } from 'clsx';

type PropsType = {
  children?: ReactNode;
  className?: string;
};

export function Container({ children, className }: PropsType) {
  return <div className={clsx(['max-w-5xl mx-auto px-2', className])}>{children}</div>;
}
