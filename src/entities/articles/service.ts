import { api } from '@/shared/utils/api';
import { CreateLikeData, Like } from '@/entities/likes';
import { Article, CreateArticleData } from './model';

export const articlesApi = api.injectEndpoints({
  endpoints: builder => ({
    findArticles: builder.query<Article[], void>({
      query: () => '/articles',
      providesTags: ['articles'],
    }),
    createArticle: builder.mutation<Partial<Article>, CreateArticleData>({
      query: body => ({ url: '/articles', method: 'POST', body }),
      invalidatesTags: ['articles'],
    }),
    likeArticle: builder.mutation<Like, CreateLikeData>({
      query: body => ({ url: '/articles/like', method: 'POST', body }),
      invalidatesTags: ['articles'],
    }),
  }),
  overrideExisting: true,
});

export const { useFindArticlesQuery, useCreateArticleMutation, useLikeArticleMutation } =
  articlesApi;
