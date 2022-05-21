import axios from 'axios'
// 正在调用
export const FETCH_RECOMMEND_PRODUCTS_START = 'FETCH_RECOMMEND_PRODUCTS_START'
// 调用成功
export const FETCH_RECOMMEND_PRODUCTS_SUCCESS =
  'FETCH_RECOMMEND_PRODUCTS_SUCCESS'
// 调用失败
export const FETCH_RECOMMEND_PRODUCTS_FAIL = 'FETCH_RECOMMEND_PRODUCTS_FAIL'

const baseUrl = process.env.REACT_APP_BASE_URL
export const fetchRecommendProductStartActionCreator = () => {
  return {
    type: FETCH_RECOMMEND_PRODUCTS_START
  }
}

export const fetchRecommendProductSuccessActionCreator = (data: any) => {
  return {
    type: FETCH_RECOMMEND_PRODUCTS_SUCCESS,
    payload: data
  }
}

export const fetchRecommendProductFailActionCreator = (error: any) => {
  return {
    type: FETCH_RECOMMEND_PRODUCTS_FAIL,
    payload: error
  }
}
export const giveMeDataActionCreator =
  () => async (dispatch: any, getState: any) => {
    dispatch(fetchRecommendProductStartActionCreator())
    console.log(dispatch)
    try {
      const { data } = await axios.get(`${baseUrl}/articlelist`)
      dispatch(fetchRecommendProductSuccessActionCreator(data))
    } catch (error: any) {
      dispatch(fetchRecommendProductFailActionCreator(error.message))
    }
  }
