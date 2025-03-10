import { FC, PropsWithChildren } from 'react';
import Link from 'next/link';
import { clsx } from 'clsx';

interface Props extends PropsWithChildren {
  className?: string;
  href: string;
}

export const UiLink: FC<Props> = ({ children, className, href }) => {
  const classes = 'text-blue-600 hover:underline outline-blue-600 outline-offset-3';

  return (
    <Link href={href} className={clsx([classes, className])}>
      {children}
    </Link>
  );
};
