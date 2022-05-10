import React from 'react'
import { Row, Col, Typography, Divider } from 'antd'
import { Link } from 'react-router-dom'
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
    <Link to={`/article/${props.id}`}>
      <ul style={{ backgroundColor: 'white' }}>
        <Row>
          <Col span={5}>
            <img src="" alt="pic-"></img>
          </Col>
          <Col span={19}>
            <div className="article-list-right">
              <Divider>
                <Typography.Title>{props.title}</Typography.Title>
              </Divider>
              <Typography.Paragraph>{props.summary}</Typography.Paragraph>
            </div>
          </Col>
        </Row>
      </ul>
    </Link>
  )
}
