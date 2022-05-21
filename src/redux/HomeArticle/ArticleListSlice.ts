import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
interface ArticleListState {
  loading: boolean
  error: string | null
  articleListData: any
}
const baseUrl = process.env.REACT_APP_BASE_URL
const initialState: ArticleListState = {
  loading: false,
  error: null,
  articleListData: null
}

export const getArticleListData: any = createAsyncThunk(
  'getArticleList',
  async (paramater: any, thunkApi) => {
    const res = await axios.get(`${baseUrl}/articlelist`)
    return res.data
  }
)

export const articleListSlice = createSlice({
  name: 'articleList',
  initialState,
  reducers: {},
  extraReducers: {
    [getArticleListData.pending.type]: (state) => {
      state.loading = true
    },
    [getArticleListData.fulfilled.type]: (state, action) => {
      state.articleListData = action.payload
      state.loading = false
      state.error = null
    },
    [getArticleListData.rejected.type]: (state) => {
      state.loading = false
    }
  }
})
