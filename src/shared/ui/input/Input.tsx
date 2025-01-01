import { forwardRef, HTMLProps, Ref } from 'react';

interface IProps extends HTMLProps<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef((props: IProps, ref: Ref<HTMLInputElement>) => {
  const { label, error, ...inputProps } = props;

  return (
    <div className='grid'>
      {label && (
        <label htmlFor={inputProps.id} className='pb-1'>
          {label}
        </label>
      )}
      <input
        className='py-2 px-4 rounded-full outline-none bg-slate-100 dark:bg-neutral-700 focus:ring-2 focus:ring-blue-600 placeholder:text-slate-400'
        ref={ref}
        {...inputProps}
      />
      {error && <span className='mt-1 text-red-600 dark:text-red-400'>{error}</span>}
    </div>
  );
});
