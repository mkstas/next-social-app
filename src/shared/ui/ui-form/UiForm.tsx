import { FC, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  onSubmit?: () => unknown;
}

export const UiForm: FC<Props> = ({ children, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className='grid gap-3'>
      {children}
    </form>
  );
};
