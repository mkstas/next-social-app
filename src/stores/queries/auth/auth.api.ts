import { api } from '../api';

export interface AuthData {
  email: string;
  password: string;
}

export interface RegisterData extends AuthData {
  userName: string;
}

export const authApi = api.injectEndpoints({
  endpoints: builder => ({
    register: builder.mutation<{ success: boolean }, RegisterData>({
      query: body => ({ url: '/auth/register', method: 'POST', body }),
      invalidatesTags: ['auth'],
    }),
    login: builder.mutation<{ success: boolean }, AuthData>({
      query: body => ({ url: '/auth/login', method: 'POST', body }),
      invalidatesTags: ['auth'],
    }),
    logout: builder.mutation<{ success: boolean }, void>({
      query: () => ({ url: '/auth/logout', method: 'DELETE' }),
      invalidatesTags: ['auth'],
    }),
    checkAuth: builder.query<{ success: boolean }, void>({
      query: () => '/auth/check',
    }),
  }),
  overrideExisting: true,
});

export const { useRegisterMutation, useLoginMutation, useLogoutMutation, useCheckAuthQuery } =
  authApi;
