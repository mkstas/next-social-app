import { User } from '@/entities/users';

export interface Comment {
  commentId: number;
  message: string;
  user: User;
}

export interface CreateCommentData {
  articleId: number;
  message: string;
}
