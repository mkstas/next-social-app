import { PropsWithChildren } from 'react';

export default function AuthLayout({ children }: PropsWithChildren) {
  return <section className='max-w-96'>{children}</section>;
}
