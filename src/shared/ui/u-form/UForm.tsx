import { ReactNode, FC, FormEvent } from 'react';
import { clsx } from 'clsx';

interface IProps {
  children?: ReactNode;
  className?: string;
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}

export const UForm: FC<IProps> = ({ children, className, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className={clsx(['space-y-4', className])}>
      {children}
    </form>
  );
};
