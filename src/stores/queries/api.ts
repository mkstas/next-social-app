import { BaseQueryApi, createApi, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: '/api',
  credentials: 'same-origin',
});

const baseQueryRefresh = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: {}) => {
  let res = await baseQuery(args, api, extraOptions);

  if (res.error?.status === 401) {
    const refreshRes = await baseQuery('auth/refresh', api, extraOptions);

    if (refreshRes.meta?.response?.status === 200) {
      res = await baseQuery(args, api, extraOptions);
    }
  }

  return res;
};

export const api = createApi({
  baseQuery: baseQueryRefresh,
  endpoints: () => ({}),
  tagTypes: ['auth', 'posts'],
});
