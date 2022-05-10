import styled from 'styled-components'
const ArticleListWrapper = styled.div`
  overflow: auto;
  height: 100vh;
  margin-bottom: 80px;
  padding: 0 50px;
`
const ArticleCardWrapper = styled.div`
  width: 600px;
  float: right;
  margin-right: 19px;
  margin: 0 auto;
`

const ArticleNavWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`
export { ArticleCardWrapper, ArticleListWrapper, ArticleNavWrapper }
