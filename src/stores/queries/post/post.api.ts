import { api } from '../api';

export interface Post {
  title: string;
  content: string;
}

export const postApi = api.injectEndpoints({
  endpoints: builder => ({
    getPosts: builder.query<Post, void>({
      query: () => '/posts',
      providesTags: ['posts'],
    }),
    getPost: builder.query<Post, void>({
      query: postId => `/posts/${postId}`,
      providesTags: ['posts'],
    }),
    createPost: builder.mutation<void, Partial<Post>>({
      query: body => ({ url: '/posts', method: 'POST', body }),
      invalidatesTags: ['posts'],
    }),
  }),
});
