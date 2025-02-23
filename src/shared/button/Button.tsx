import { FC, PropsWithChildren, HTMLProps } from 'react';
import { clsx } from 'clsx';

interface Props extends PropsWithChildren, HTMLProps<HTMLButtonElement> {
  scale?: 'sm' | 'md';
  onClick?: () => void;
}

export const Button: FC<Props> = ({ children, className, onClick, scale = 'md' }) => {
  return (
    <button
      onClick={onClick}
      className={clsx([
        'block w-full rounded-full bg-blue-600 hover:bg-blue-700 text-center text-white font-medium outline-none focus-visible:outline-blue-600 transition-colors',
        scale === 'md' && 'py-2 px-4',
        scale === 'sm' && 'py-1 px-2',
        className,
      ])}
    >
      {children}
    </button>
  );
};
