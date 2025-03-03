import { PropsWithChildren } from 'react';
import './styles.css';

export default function RootLayot({ children }: PropsWithChildren) {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
