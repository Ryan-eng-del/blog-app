import { Spin } from 'antd'
import { NameCard } from '../../component'
import { ArticleCard } from '../../component'
import { useGetArticleListQuery } from '../../server/testQuery'
import {
  ArticleCardWrapper,
  ArticleListWrapper,
  ArticleNavWrapper
} from './HomePageStyle'
export const HomePage = () => {
  const { data, error, isLoading } = useGetArticleListQuery('articlelist')
  if (isLoading) {
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
          {data?.map((item: any) => {
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
