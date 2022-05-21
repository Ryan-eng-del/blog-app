import React, { useState, useEffect } from 'react'
import { Spin } from 'antd'
import axios from 'axios'
import { NameCard } from '../../component'
import { ArticleCard } from '../../component'
import {
  ArticleCardWrapper,
  ArticleListWrapper,
  ArticleNavWrapper
} from './HomePageStyle'
export const HomePage = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL
  const [isLoading, setLoading] = useState(false)
  const [isError, setError] = useState(null)
  const [articleListData, setArticleListData] = useState<any>(null)
  useEffect(() => {
    setLoading(true)
    axios
      .get(`${baseUrl}/articlelist`)
      .then((res) => {
        console.log(res.data)
        setArticleListData(res.data)
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
      })
  }, [])
  if (isLoading) {
    return (
      <Spin
        size="large"
        style={{ width: '100%', position: 'absolute', top: '45%' }}
      />
    )
  }
  if (isError) {
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

        <ArticleNavWrapper>
          <div>你好</div>
        </ArticleNavWrapper>
      </ArticleListWrapper>
    </>
  )
}
