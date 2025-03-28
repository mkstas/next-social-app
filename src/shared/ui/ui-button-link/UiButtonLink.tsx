import { FC, PropsWithChildren } from 'react';
import Link from 'next/link';
import { clsx } from 'clsx';

interface Props extends PropsWithChildren {
  className?: string;
  variant?: 'primary' | 'small';
  href: string;
}

export const UiButtonLink: FC<Props> = ({ children, className, variant = 'primary', href }) => {
  const classes =
    'block px-4 bg-blue-600 hover:bg-blue-700 transition-colors rounded-full text-white font-medium  shadow-lg shadow-slate-500/10 outline-blue-600 outline-offset-3';

  const buttonVariant = {
    primary: 'py-2',
    small: 'py-1 text-sm',
  };

  return (
    <Link href={href} className={clsx([classes, buttonVariant[variant], className])}>
      {children}
    </Link>
  );
};
