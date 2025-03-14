import { FC } from 'react';
import { Comment } from './model';

interface Props {
  comment: Comment;
}

export const CommentContent: FC<Props> = ({ comment }) => {
  return (
    <div className='py-2'>
      <span className='text-sm font-semibold'>{comment.user.userName}</span>
      <p className='text-sm'>{comment.message}</p>
    </div>
  );
};
