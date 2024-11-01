import { ReactNode, FC } from 'react';
import { clsx } from 'clsx';

interface IProps {
  children?: ReactNode;
  className?: string;
  bordered?: 'full' | 'bottom' | 'top';
  rounded?: boolean;
}

export const USheet: FC<IProps> = ({ children, className, bordered = 'full', rounded = true }) => {
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
