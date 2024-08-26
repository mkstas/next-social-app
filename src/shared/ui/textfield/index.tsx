type PropsType = {
  id: string;
  type: 'text' | 'email' | 'password';
  placeholder?: string;
  label?: string;
  error?: string;
};

export function TextField(props: PropsType) {
  return (
    <div>
      {props.label && (
        <label htmlFor={props.id} className='block font-medium pb-1'>
          {props.label}
        </label>
      )}
      <input
        className='block w-full py-2 px-4 bg-slate-100 outline-none focus-within:ring-1 focus-within:ring-violet-600 dark:bg-neutral-700 rounded-md text-lg placeholder:text-slate-400 dark:placeholder:text-neutral-500'
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
      />
      {props.error && (
        <span className='block mt-1 text-red-600 dark:text-red-400'>{props.error}</span>
      )}
    </div>
  );
}
