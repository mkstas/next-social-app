import { api } from '../api';

export interface User {
  userId: string;
  userName: string;
  email: string;
}

export const userApi = api.injectEndpoints({
  endpoints: builder => ({
    findUser: builder.query<User, void>({
      query: () => '/users',
      providesTags: ['user'],
    }),
  }),
  overrideExisting: true,
});

export const { useFindUserQuery } = userApi;
