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
    register: builder.mutation<{ success: number }, RegisterData>({
      query: body => ({ url: '/auth/register', method: 'POST', body }),
      invalidatesTags: ['user'],
    }),
    login: builder.mutation<{ success: number }, AuthData>({
      query: body => ({ url: '/auth/login', method: 'POST', body }),
      invalidatesTags: ['user'],
    }),
    logout: builder.mutation<{ success: number }, void>({
      query: () => ({ url: '/auth/logout', method: 'DELETE' }),
    }),
  }),
  overrideExisting: true,
});

export const { useRegisterMutation, useLoginMutation, useLogoutMutation } = authApi;
