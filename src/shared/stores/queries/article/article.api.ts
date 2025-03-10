import { api } from '../api';

export interface CreateArticleData {
  content: string;
}

export const articleApi = api.injectEndpoints({
  endpoints: builder => ({
    createArtice: builder.mutation<void, CreateArticleData>({
      query: body => ({ url: '/articles', method: 'POST', body }),
      invalidatesTags: ['articles'],
    }),
  }),
  overrideExisting: true,
});

export const { useCreateArticeMutation } = articleApi;
