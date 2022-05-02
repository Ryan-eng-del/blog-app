import React from 'react'
import { useParams } from 'react-router-dom'
export const ArticleDetail: React.FC = (props) => {
  const param = useParams()
  return <div>文章详情页面: {param.articleId}</div>
}
