import { FC, HTMLProps, PropsWithChildren } from 'react';
import { clsx } from 'clsx';

interface Props extends HTMLProps<HTMLElement>, PropsWithChildren {
  rounded?: boolean;
  bordered?: 'full' | 'bottom' | 'top';
}

export const Sheet: FC<Props> = ({ children, className, rounded = true, bordered = 'full' }) => {
  return (
    <div
      className={clsx([
        className,
        'bg-white dark:bg-neutral-800 border-slate-200 dark:border-neutral-700',
        rounded && 'rounded-xl',
        bordered === 'full' && 'border',
        bordered === 'bottom' && 'border-b',
        bordered === 'top' && 'border-t',
      ])}
    >
      {children}
    </div>
  );
};
