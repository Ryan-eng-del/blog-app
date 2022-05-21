import styled from 'styled-components'
const ArticleListWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ArticleCardWrapper = styled.div`
  width: 600px;
`

const ArticleNavWrapper = styled.div`
  position: absolute;
  left: calc(50% + 380px);
  top: 0;
`
export { ArticleCardWrapper, ArticleListWrapper, ArticleNavWrapper }
