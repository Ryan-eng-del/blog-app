// 正在调用
export const FETCH_RECOMMEND_PRODUCTS_START = 'FETCH_RECOMMEND_PRODUCTS_START'
// 调用成功
export const FETCH_RECOMMEND_PRODUCTS_SUCCESS =
  'FETCH_RECOMMEND_PRODUCTS_SUCCESS'
// 调用失败
export const FETCH_RECOMMEND_PRODUCTS_FAIL = 'FETCH_RECOMMEND_PRODUCTS_FAIL'
const defalutState = {
  loading: true,
  error: null,
  articleList: null
}
export default (state = defalutState, action: any) => {
  switch (action.type) {
    case FETCH_RECOMMEND_PRODUCTS_START:
      return { ...state, loading: true }
    case FETCH_RECOMMEND_PRODUCTS_SUCCESS:
      return { ...state, loading: false, articleList: action.payload }
    case FETCH_RECOMMEND_PRODUCTS_FAIL:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}
