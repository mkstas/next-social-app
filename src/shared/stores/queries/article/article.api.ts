import { api } from '../api';

interface Like {
  likeId: number;
  userId: number;
  articleId: number;
}

interface Comment {
  commentId: number;
  userId: number;
  articleId: number;
  message: string;
}

interface User {
  userId: number;
  userName: string;
}

export interface Article {
  articleId: number;
  title: string;
  content: string;
  createdAt: string;
  user: User;
  like: Like[];
  comment: Comment[];
}

export interface CreateArticleData {
  title: string;
  content: string;
}

export const articleApi = api.injectEndpoints({
  endpoints: builder => ({
    findArticles: builder.query<Article[], void>({
      query: () => '/articles',
      providesTags: ['articles'],
    }),
    createArticle: builder.mutation<Article, CreateArticleData>({
      query: body => ({ url: '/articles', method: 'POST', body }),
      invalidatesTags: ['articles'],
    }),
  }),
  overrideExisting: true,
});

export const { useFindArticlesQuery, useCreateArticleMutation } = articleApi;
