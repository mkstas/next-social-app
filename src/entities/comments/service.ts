import { api } from '@/shared/utils/api';
import { Comment, CreateCommentData } from './model';

export const commentsApi = api.injectEndpoints({
  endpoints: builder => ({
    createComment: builder.mutation<Comment, CreateCommentData>({
      query: body => ({ url: '/comments', method: 'POST', body }),
      invalidatesTags: ['articles'],
    }),
  }),
  overrideExisting: true,
});

export const { useCreateCommentMutation } = commentsApi;
