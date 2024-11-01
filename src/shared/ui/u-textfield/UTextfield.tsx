import { FC } from 'react';
import { clsx } from 'clsx';

interface IProps {
  className?: string;
  id?: string;
  type?: 'text' | 'number' | 'email' | 'password';
  name?: string;
  placeholder?: string;
  label?: string;
  error?: string;
}

export const UTextfield: FC<IProps> = ({
  className,
  id,
  type,
  name,
  placeholder,
  label,
  error,
}) => {
  return (
    <div className='grid'>
      {label && (
        <label htmlFor={id} className='pb-1'>
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        className={clsx(['py-1 px-3 rounded-full bg-slate-200 dark:bg-neutral-700', className])}
      />
      {error && <span className='pt-1 text-red-600 dark:text-red-400'>{error}</span>}
    </div>
  );
};
