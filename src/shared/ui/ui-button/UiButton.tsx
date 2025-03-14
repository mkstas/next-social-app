import { FC, PropsWithChildren } from 'react';
import { clsx } from 'clsx';

interface Props extends PropsWithChildren {
  className?: string;
  variant?: 'primary' | 'small';
  onClick?: () => unknown;
}

export const UiButton: FC<Props> = ({ children, className, variant = 'primary', onClick }) => {
  const classes =
    'block px-4 bg-blue-600 hover:bg-blue-700 transition-colors rounded-full text-white font-medium shadow-lg shadow-slate-500/10 outline-blue-600 outline-offset-3 cursor-pointer';

  const buttonVariant = {
    primary: 'py-2',
    small: 'py-1 text-sm',
  };

  return (
    <button className={clsx([classes, buttonVariant[variant], className])} onClick={onClick}>
      {children}
    </button>
  );
};
