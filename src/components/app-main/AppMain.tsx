import { FC, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

export const AppMain: FC<Props> = ({ children }) => {
  return <main className='pt-24 pb-8'>{children}</main>;
};
