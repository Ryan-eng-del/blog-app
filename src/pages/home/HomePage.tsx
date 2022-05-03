import React from 'react'
import { Row, Col } from 'antd'
import { NameCard } from '../../component'
import { ArticleCard } from '../../component'
import { ArticleCardWrapper, ArticleListWrapper } from './HomePageStyle'
import { useViewPort } from '../../hook/useViewPort'
export const HomePage = () => {
  const { width } = useViewPort()
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
        <Row>
          <Col span={18} xs={24} lg={18}>
            <ArticleCardWrapper>
              {data.map((item) => {
                return <ArticleCard {...item} key={item.id} />
              })}
            </ArticleCardWrapper>
          </Col>
          {width >= 620 && (
            <Col span={6}>
              <div style={{ backgroundColor: 'white' }}>文章列表导航</div>
            </Col>
          )}
        </Row>
      </ArticleListWrapper>
    </>
  )
}
