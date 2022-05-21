import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Spin } from 'antd'
import { NameCard } from '../../component'
import { ArticleCard } from '../../component'
import { getArticleListData } from '../../redux/HomeArticle/ArticleListSlice'
import {
  ArticleCardWrapper,
  ArticleListWrapper,
  ArticleNavWrapper
} from './HomePageStyle'
export const HomePage = () => {
  const { loading, error, articleListData } = useSelector(
    (store: any) => store.articleList
  )
  console.log(loading, error, articleListData)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getArticleListData())
  }, [dispatch])
  if (loading) {
    return (
      <Spin
        size="large"
        tip="Loading..."
        style={{ width: '100%', position: 'absolute', top: '45%' }}
      />
    )
  }
  if (error) {
    return <div>请求出现故障</div>
  }
  return (
    <>
      <NameCard></NameCard>
      <ArticleListWrapper>
        <ArticleCardWrapper>
          {articleListData?.map((item: any) => {
            return <ArticleCard {...item} key={item.id} />
          })}
        </ArticleCardWrapper>

        {
          <ArticleNavWrapper style={{ backgroundColor: 'white' }}>
            文章列表导航
          </ArticleNavWrapper>
        }
      </ArticleListWrapper>
    </>
  )
}
