import React from 'react'
import { Row, Col, Typography, Divider, Image } from 'antd'
import { Link } from 'react-router-dom'
import { ArticleOtherInfo, ArtilceCardWrapper } from './ArticleCardStyle'
interface ArticleCardType {
  id: string
  createTime: string
  title: string
  summary: string
  tag: string[] | string
  viewCount: number
  comment: number
}

export const ArticleCard: React.FC<ArticleCardType> = (props) => {
  return (
    <ArtilceCardWrapper>
      <Link to={`/article/${props.id}`}>
        <ul>
          <Row justify="space-between" align="middle">
            <Col span={5}>
              <Image
                src={require('../../../assets/img/avator.jpg')}
                alt="pic-"
              ></Image>
            </Col>
            <Col span={15}>
              <div className="article-list-right">
                <Divider>
                  <Typography.Title>{props.title}</Typography.Title>
                </Divider>
                <Typography.Paragraph>
                  {props.summary}
                  充满变化、挣扎与重塑的一年。生活环境的改变、社交方式/结构的转换、独处时间的增加、第一次(正式)实习...
                  变化中充满着机遇与挑战。
                </Typography.Paragraph>
              </div>
            </Col>
          </Row>
          <ArticleOtherInfo>
            <div>隶属标签: 前端</div>
            <div>{new Date().getDay()}</div>
            <div>评论数: 12</div>
            <div>观看人数: 540</div>
          </ArticleOtherInfo>
        </ul>
      </Link>
    </ArtilceCardWrapper>
  )
}
