import { User } from '@/entities/users';
import { Like } from '@/entities/likes';
import { Comment } from '@/entities/comments';

export interface Article {
  articleId: number;
  createdAt: string;
  title: string;
  content: string;
  user: User;
  like: Like[];
  comment: Comment[];
}

export interface CreateArticleData {
  title: string;
  content: string;
}
