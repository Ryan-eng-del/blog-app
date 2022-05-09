import styled from 'styled-components'
export const MdStyleWrapper = styled.div`
  html {
    font-size: 16px;
    -webkit-font-smoothing: subpixel-antialiased;
  }

  body {
    font-family: 'SF UI Text', /*"PingFang SC", */-apple-system,
      -apple-system-body, BlinkMacSystemFont, 'Segoe UI',
      /*"Microsoft YaHei", "微软雅黑", */ Helvetica, Arial, sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    /*font-family: -apple-system, -apple-system-body, BlinkMacSystemFont, "PingFang SC", "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";*/
    color: #24292e;
    line-height: 1.5;
    font-weight: 300;
  }

  #write {
    max-width: 860px;
    margin: 0 auto;
    padding: 20px 30px 40px 30px;
    padding-top: 20px;
    padding-bottom: 100px;
  }
  #write > ul:first-child,
  #write > ol:first-child {
    margin-top: 30px;
  }

  body > *:first-child {
    margin-top: 0 !important;
  }
  body > *:last-child {
    margin-bottom: 0 !important;
  }
  a {
    color: #4183c4;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    position: relative;
    margin-top: 1.8rem;
    margin-bottom: 1rem;
    font-weight: 400;
    line-height: 1.4;
    cursor: text;
    color: #142331;
  }
  h1:hover a.anchor,
  h2:hover a.anchor,
  h3:hover a.anchor,
  h4:hover a.anchor,
  h5:hover a.anchor,
  h6:hover a.anchor {
    /*background: url("../../images/modules/styleguide/para.png") no-repeat 10px center;*/
    text-decoration: none;
  }

  h1 tt,
  h1 code {
    font-size: inherit;
  }
  h2 tt,
  h2 code {
    font-size: inherit;
  }
  h3 tt,
  h3 code {
    font-size: inherit;
  }
  h4 tt,
  h4 code {
    font-size: inherit;
  }
  h5 tt,
  h5 code {
    font-size: inherit;
  }
  h6 tt,
  h6 code {
    font-size: inherit;
  }
  h1 {
    text-align: center;
    padding-bottom: 0.3em;
    font-size: 2.25em;
    line-height: 1.2;
    margin: 1em auto 1.2em auto;
    font-weight: 300;
    /*border-bottom: 1px solid #eee;*/
  }
  h1:after {
    border-bottom: 2px dashed #afec9e;
    content: '';
    width: 100px;
    display: block;
    margin: 0.2em auto 0 auto;
    height: 2px;
  }
  /*h1+h2, h2+h3 {
    margin-top: 0.83rem;
}*/
  h2 {
    /*padding-bottom: .3em;
    font-size: 1.75em;
    line-height: 1.225;
    border-bottom: 1px solid #eee;*/
    font-size: 1.75em;
    padding-left: 9px;
    line-height: 1.4;
    border-left: 6px solid #cce5ff;
  }
  h3 {
    font-size: 1.5em;
    line-height: 1.43;
  }
  h3:before {
    border-radius: 50%;
    background-color: #9ed0ff;
    content: '';
    width: 6px;
    display: inline-block;
    height: 6px;
    vertical-align: middle;
    margin-bottom: 0.18em;
    margin-right: 8px;
  }
  #write > h3.md-focus:before,
  #write > h4.md-focus:before {
    background-color: transparent;
    width: auto;
    height: auto;
  }
  h4 {
    font-size: 1.25em;
  }
  h4:before {
    background-color: #9ed0ff;
    content: '';
    width: 6px;
    display: inline-block;
    height: 2px;
    vertical-align: middle;
    margin-bottom: 0.18em;
    margin-right: 8px;
  }
  h5 {
    font-size: 1em;
  }
  h6 {
    font-size: 1em;
    color: #777;
  }
  p,
  blockquote,
  ul,
  ol,
  dl,
  table {
    margin: 0.8em 0;
  }
  li > ol,
  li > ul {
    margin: 0 0;
  }
  hr {
    height: 0.25em;
    padding: 0;
    margin: 24px 0;
    background-color: #e1e4e8;
    border: 0;
  }

  body > h2:first-child {
    margin-top: 0;
    padding-top: 0;
  }
  body > h1:first-child {
    margin-top: 0;
    padding-top: 0;
  }
  body > h1:first-child + h2 {
    margin-top: 0;
    padding-top: 0;
  }
  body > h3:first-child,
  body > h4:first-child,
  body > h5:first-child,
  body > h6:first-child {
    margin-top: 0;
    padding-top: 0;
  }
  a:first-child h1,
  a:first-child h2,
  a:first-child h3,
  a:first-child h4,
  a:first-child h5,
  a:first-child h6 {
    margin-top: 0;
    padding-top: 0;
  }
  h1 p,
  h2 p,
  h3 p,
  h4 p,
  h5 p,
  h6 p {
    margin-top: 0;
  }
  li p.first {
    display: inline-block;
  }
  ul,
  ol {
    padding-left: 30px;
  }
  ul:first-child,
  ol:first-child {
    margin-top: 0;
  }
  ul:last-child,
  ol:last-child {
    margin-bottom: 0;
  }
  blockquote {
    /*border-left: 4px solid #dddddd;*/
    border-left: 4px dotted #e5e8e8;
    padding: 0 12px;
    color: #444444;
    font-size: 0.9em;
  }
  blockquote blockquote {
    padding-right: 0;
  }
  table {
    padding: 0;
    word-break: initial;
  }
  table tr {
    border-top: 1px solid #dadfe6;
    margin: 0;
    padding: 0;
  }
  table.md-table tr:nth-child(2n) {
    background-color: #fafbfc;
  }
  table tr th {
    font-weight: 400;
    border: 1px solid #dadfe6;
    text-align: left;
    margin: 0;
    padding: 6px 13px;
  }
  table tr td {
    border: 1px solid #dadfe6;
    text-align: left;
    margin: 0;
    padding: 6px 13px;
  }
  table tr th:first-child,
  table tr td:first-child {
    margin-top: 0;
  }
  table tr th:last-child,
  table tr td:last-child {
    margin-bottom: 0;
  }
`
export const ArticleDetailWrapper = styled.div`
  width: 800px;
  margin: 0 auto;
`
