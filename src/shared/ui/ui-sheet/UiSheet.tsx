import { FC, PropsWithChildren } from 'react';
import { clsx } from 'clsx';

interface Props extends PropsWithChildren {
  className?: string;
}

export const UiSheet: FC<Props> = ({ children, className }) => {
  const classes = 'p-4 border border-slate-200 bg-white rounded-2xl shadow-lg shadow-slate-500/5';

  return <div className={clsx([classes, className])}>{children}</div>;
};
