import { FC, PropsWithChildren } from 'react';
import Link from 'next/link';

interface Props extends PropsWithChildren {
  href: string;
}

export const UiLink: FC<Props> = ({ children, href }) => {
  return (
    <Link href={href} className='text-blue-600 hover:underline'>
      {children}
    </Link>
  );
};
