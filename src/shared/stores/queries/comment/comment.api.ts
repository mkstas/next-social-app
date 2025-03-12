import { api } from '../api';

export interface CreateComment {
  articleId: number;
  message: string;
}

export interface Comment {
  commentId: number;
  articleId: number;
  message: string;
  user: {
    userId: number;
    userName: string;
  };
}

export const commentApi = api.injectEndpoints({
  endpoints: builder => ({
    createComment: builder.mutation<Comment, CreateComment>({
      query: body => ({ url: '/comments', method: 'POST', body }),
      invalidatesTags: ['articles'],
    }),
  }),
  overrideExisting: true,
});

export const { useCreateCommentMutation } = commentApi;
