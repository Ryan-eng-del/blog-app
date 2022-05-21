import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = process.env.REACT_APP_BASE_URL

export const getArticleListApi = createApi({
  reducerPath: 'getArticleList',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getArticleList: builder.query({
      query: (name) => `/${name}`
    })
  })
})
export const { useGetArticleListQuery } = getArticleListApi
