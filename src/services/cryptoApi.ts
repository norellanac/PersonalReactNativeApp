import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coinlore.net/api/' }),
  endpoints: builder => ({
    getAllCrypstos: builder.query<any, void>({
      query: () => 'tickers/?start=0&limit=10',
    }),
  }),
});

export const { useGetAllCrypstosQuery } = cryptoApi;
