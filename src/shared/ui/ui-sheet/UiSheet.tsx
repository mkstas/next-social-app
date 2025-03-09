import { FC, PropsWithChildren } from 'react';
import { clsx } from 'clsx';

interface Props extends PropsWithChildren {
  className?: string;
}

export const UiSheet: FC<Props> = ({ children, className }) => {
  return (
    <div
      className={clsx([
        'p-4 border border-slate-200 bg-white shadow-lg shadow-slate-500/5 rounded-2xl',
        className,
      ])}
    >
      {children}
    </div>
  );
};
