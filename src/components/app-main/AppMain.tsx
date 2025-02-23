import { FC, PropsWithChildren } from 'react';
import { Container } from '@/shared';

interface Props extends PropsWithChildren {}

export const AppMain: FC<Props> = ({ children }) => {
  return (
    <main className='pt-24 pb-8'>
      <Container>{children}</Container>
    </main>
  );
};
