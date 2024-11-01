import { FC } from 'react';

interface IProps {
  id?: string;
  type?: 'text' | 'number' | 'email' | 'password';
  name?: string;
  label?: string;
  placeholder?: string;
  error?: string;
}

export const Textfield: FC<IProps> = ({ id, type = 'text', name, label, placeholder, error }) => {
  return (
    <div className='grid'>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        className='py-1 px-3 bg-slate-200 dark:bg-neutral-700 rounded-full'
      />
      {error && <span className='text-red-600 dark:text-red-400'>{error}</span>}
    </div>
  );
};
