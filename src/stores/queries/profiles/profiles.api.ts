import { api } from '../api';

export type Profile = {
  userName: string;
  user: {
    email: string;
  };
};

export const profileApi = api.injectEndpoints({
  endpoints: builder => ({
    getProfiles: builder.query<Profile, void>({
      query: () => '/profiles',
      providesTags: ['auth'],
    }),
  }),
  overrideExisting: true,
});

export const { useGetProfilesQuery } = profileApi;
