import { FC, HTMLProps, PropsWithChildren } from 'react';
import { clsx } from 'clsx';

interface Props extends HTMLProps<HTMLElement>, PropsWithChildren {}

export const Container: FC<Props> = ({ children, className }) => {
  return <div className={clsx([className, 'max-w-4xl mx-auto px-3'])}>{children}</div>;
};
