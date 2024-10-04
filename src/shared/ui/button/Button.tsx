import { Link, ReactNode } from '@tanstack/react-router';
import { clsx } from 'clsx';

interface IProps {
  children?: ReactNode;
  className?: string;
  variant?: 'filled' | 'outline';
}

const variants = {
  filled: 'text-slate-100 bg-blue-600 hover:bg-blue-700',
  outline:
    'text-blue-600 dark:text-blue-400 hover:text-white hover:bg-blue-600 border-2 border-blue-600',
};

const Button = ({ className, children, variant = 'filled' }: IProps) => {
  return (
    <button
      className={clsx([
        'py-2 px-4 outline-none focus-visible:outline-blue-500 rounded-md transition-colors',
        variants[variant],
        className,
      ])}
    >
      {children}
    </button>
  );
};

interface IPropsLink extends IProps {
  to: string;
}

Button.Link = ({ className, children, variant = 'filled', to }: IPropsLink) => {
  return (
    <Link
      to={to}
      className={clsx([
        'block w-full py-2 px-4 text-center outline-none focus-visible:outline-blue-500 rounded-md transition-colors',
        variants[variant],
        className,
      ])}
    >
      {children}
    </Link>
  );
};

export { Button };
