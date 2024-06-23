import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { buildUrl } from "../../utils/common";
import { BASE_URL } from "../../utils/constants";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': '0JPEDBY-CM3MRJQ-NDMR0N1-FW6Q5R1'
    }
  }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: ({ id }) => `/v1.4/movie/${id}`,
      providesTags: ["Product"],
    }),
    getProducts: builder.query({
      query: (params) => buildUrl("/v1.4/movie/search?page=1&limit=10", params),
      providesTags: ["Products"],
    }),
  }),
});

export const { useGetProductQuery, useGetProductsQuery } = apiSlice;