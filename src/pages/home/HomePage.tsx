import React from 'react'
import { NameCard } from '../../component'
import { ArticleCard } from '../../component'
import {
  ArticleCardWrapper,
  ArticleListWrapper,
  ArticleNavWrapper
} from './HomePageStyle'
import { useViewPort } from '../../hook/useViewPort'
export const HomePage = () => {
  const { width } = useViewPort()
  console.log(width)
  const data = [
    {
      id: '1',
      createTime: '2',
      title: 'Title',
      summary: 'summary',
      tag: ['react'],
      viewCount: 19,
      comment: 12
    },
    {
      id: '2',
      createTime: '2',
      title: 'Title',
      summary: 'summary',
      tag: ['react'],
      viewCount: 19,
      comment: 12
    }
  ]
  return (
    <>
      <NameCard></NameCard>
      <ArticleListWrapper>
        <ArticleCardWrapper>
          {data.map((item) => {
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
