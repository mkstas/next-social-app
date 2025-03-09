import { FC, PropsWithChildren } from 'react';
import Link from 'next/link';
import { clsx } from 'clsx';

interface Props extends PropsWithChildren {
  className?: string;
  variant?: 'primary' | 'small';
  href: string;
}

export const UiButtonLink: FC<Props> = ({ children, variant = 'primary', href }) => {
  const classes =
    'block px-4 bg-blue-600 hover:bg-blue-700 transition-colors text-white font-medium rounded-full cursor-pointer shadow-lg shadow-slate-500/10';

  const buttonVariant = {
    primary: 'py-2',
    small: 'py-1 text-sm',
  };

  return (
    <Link href={href} className={clsx([classes, buttonVariant[variant]])}>
      {children}
    </Link>
  );
};
