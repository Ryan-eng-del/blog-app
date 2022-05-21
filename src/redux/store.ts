import { configureStore } from '@reduxjs/toolkit'
import { articleListSlice } from './HomeArticle/ArticleListSlice'
// import articleListReducer from './HomeArticle/ArticleListReducer'

export default configureStore({
  reducer: {
    articleList: articleListSlice.reducer
    // articleList: articleListReducer
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
  devTools: true
})
