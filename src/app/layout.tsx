import { PropsWithChildren } from 'react';
import { Metadata } from 'next';
import { Onest } from 'next/font/google';
import { UiContainer } from '@/shared/ui';
import { Providers } from '@/shared/utils/providers';
import { TheHeader } from '@/widgets/the-header';
import './styles.css';

const onest = Onest({
  subsets: ['cyrillic', 'latin'],
});

export const metadata: Metadata = {
  title: 'Social App',
};

export default function RootLayot({ children }: PropsWithChildren) {
  return (
    <html lang='ru' className={onest.className}>
      <body className='bg-slate-50 text-slate-800'>
        <Providers>
          <UiContainer>
            <TheHeader />
            <main className='py-8'>{children}</main>
          </UiContainer>
        </Providers>
      </body>
    </html>
  );
}
