import { FC, PropsWithChildren } from 'react';
import { clsx } from 'clsx';

interface Props extends PropsWithChildren {
  className?: string;
}

export const UiContainer: FC<Props> = ({ children, className }) => {
  return <div className={clsx(['max-w-4xl mx-auto sm:px-3', className])}>{children}</div>;
};
