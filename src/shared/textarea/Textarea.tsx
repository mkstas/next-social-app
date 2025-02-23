import { forwardRef, HTMLProps, Ref } from 'react';

interface Props extends HTMLProps<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = forwardRef((props: Props, ref: Ref<HTMLTextAreaElement>) => {
  const { label, error, ...textareaProps } = props;

  return (
    <div className='grid'>
      {label && (
        <label htmlFor={textareaProps.id} className='pb-1'>
          {label}
        </label>
      )}
      <textarea
        className='py-2 px-4 rounded-3xl outline-none bg-slate-100 dark:bg-neutral-700 focus:ring-2 focus:ring-blue-600 placeholder:text-slate-400 resize-none'
        ref={ref}
        {...textareaProps}
      ></textarea>
      {error && <span className='mt-1 text-red-600 dark:text-red-400'>{error}</span>}
    </div>
  );
});
