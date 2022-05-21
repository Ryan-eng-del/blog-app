import styled from 'styled-components'
export const ArticleOtherInfo = styled.div`
  display: flex;
  padding-top: 12px;
  div {
    margin-right: 15px;
  }
  ul {
    padding: 25px;
  }
`
export const ArtilceCardWrapper = styled.div`
  &:hover {
    transform: translate(0px, -15px);
    transition: 0.5s transform ease-in-out;
  }
  background: white;
  padding: 15px;
  box-shadow: 1px 3px 10px rgb(153 153 153 / 30%);
  margin-bottom: 45px;
  border-radius: 12px;
`
