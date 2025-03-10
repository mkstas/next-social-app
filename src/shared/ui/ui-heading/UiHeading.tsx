import { FC, PropsWithChildren } from 'react';
import { clsx } from 'clsx';

interface Props extends PropsWithChildren {
  variant?: 'h1' | 'h2' | 'h3';
}

export const UiHeading: FC<Props> = ({ children, variant = 'h1' }) => {
  const Tag = variant;
  const tagVariant = { h1: 'text-2xl', h2: 'text-xl', h3: 'text-lg' };

  return <Tag className={clsx(['font-bold', tagVariant[variant]])}>{children}</Tag>;
};
