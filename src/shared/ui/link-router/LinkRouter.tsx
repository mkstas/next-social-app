import { Link, ReactNode } from '@tanstack/react-router';
import { clsx } from 'clsx';

interface IProps {
  children?: ReactNode;
  className?: string;
  to: string;
}

export function LinkRouter({ children, className, to }: IProps) {
  return (
    <Link to={to} className={clsx('text-blue-600 hover:underline', className)}>
      {children}
    </Link>
  );
}
