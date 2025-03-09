import { HTMLProps, forwardRef } from 'react';

interface Props extends HTMLProps<HTMLInputElement> {
  label?: string;
  error?: string;
}

const UiTextField = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { label, error, ...inputProps } = props;

  return (
    <div className='grid'>
      {label && (
        <label htmlFor={inputProps.id} className='pb-1 font-medium'>
          {label}
        </label>
      )}
      <input
        ref={ref}
        {...inputProps}
        className='py-2 px-4 bg-slate-100 border border-slate-200 rounded-full placeholder:text-slate-400'
      />
      {error && <span className='text-red-600'>{error}</span>}
    </div>
  );
});

UiTextField.displayName = 'UiTextField';

export { UiTextField };
