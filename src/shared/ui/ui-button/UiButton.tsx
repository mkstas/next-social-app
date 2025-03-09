import { clsx } from 'clsx';
import { FC, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  variant?: 'primary' | 'small';
  onClick?: () => void;
}

export const UiButton: FC<Props> = ({ children, variant = 'primary', onClick }) => {
  const classes =
    'block px-4 bg-blue-600 hover:bg-blue-700 transition-colors text-white font-medium rounded-full cursor-pointer shadow-lg shadow-slate-500/10';

  const buttonVariant = {
    primary: 'py-2',
    small: 'py-1 text-sm',
  };

  return (
    <button className={clsx([classes, buttonVariant[variant]])} onClick={onClick}>
      {children}
    </button>
  );
};
