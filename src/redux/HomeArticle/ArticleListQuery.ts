import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { getArticleListApi } from '../../server/testQuery'

export const store = configureStore({
  reducer: {
    [getArticleListApi.reducerPath]: getArticleListApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getArticleListApi.middleware)
})

setupListeners(store.dispatch)
