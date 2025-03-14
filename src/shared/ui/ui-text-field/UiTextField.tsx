import { forwardRef, HTMLProps } from 'react';

interface Props extends HTMLProps<HTMLInputElement> {
  label?: string;
  error?: string;
}

const UiTextField = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { label, error, ...updatedProps } = props;
  const classes =
    'py-2 px-4 bg-white border border-slate-200 focus:border-blue-600 focus:ring focus:ring-blue-600 rounded-2xl placeholder:text-slate-400 outline-none';

  return (
    <div className='grid'>
      {label && (
        <label htmlFor={updatedProps.id} className='pb-1 font-medium'>
          {label}
        </label>
      )}
      <input ref={ref} {...updatedProps} className={classes} />
      {error && <span className='text-red-600'>{error}</span>}
    </div>
  );
});

UiTextField.displayName = 'UiTextField';

export { UiTextField };
