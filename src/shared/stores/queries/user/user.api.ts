import { api } from '../api';

export interface User {
  userId: string;
  userName: string;
  email: string;
}

export const userApi = api.injectEndpoints({
  endpoints: builder => ({
    findUserData: builder.query<User, void>({
      query: () => '/users',
      providesTags: ['userData'],
    }),
  }),
  overrideExisting: true,
});

export const { useFindUserDataQuery } = userApi;
