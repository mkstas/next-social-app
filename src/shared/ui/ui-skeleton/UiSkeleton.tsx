import { clsx } from 'clsx';
import { FC } from 'react';

interface Props {
  className?: string;
}

export const UiSkeleton: FC<Props> = ({ className }) => {
  return <div className={clsx(['bg-slate-200 rounded-full animate-pulse', className])}></div>;
};
