import { FC, ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
}

export const AppMain: FC<IProps> = ({ children }) => {
  return <main className='pt-24 pb-8'>{children}</main>;
};
