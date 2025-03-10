import { forwardRef, HTMLProps } from 'react';

interface Props extends HTMLProps<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const UiTextArea = forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
  const { label, error, ...textareaProps } = props;

  return (
    <div className='grid'>
      {label && (
        <label htmlFor={textareaProps.id} className='pb-1 font-medium'>
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        {...textareaProps}
        className='py-2 px-4 bg-white border-2 border-slate-200 rounded-2xl placeholder:text-slate-400 outline-none focus:border-2 focus:border-blue-500 resize-none'
      ></textarea>
      {error && <span className='text-red-600'>{error}</span>}
    </div>
  );
});

UiTextArea.displayName = 'UiTextArea';

export { UiTextArea };
