import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Editor from 'md-editor-rt'
import 'md-editor-rt/lib/style.css'
import 'highlight.js/styles/atom-one-dark.css'
import { ArticleDetailWrapper, MdStyleWrapper } from './ArticleDetailStyle'

import { translateMarkdown } from '../../utils/translateMarkdown'

export const ArticleDetail: React.FC = (props) => {
  const [mdContent, setMdContent] = useState('')
  const param = useParams()
  const handleMdChange = (mdContent: string) => {
    console.log(mdContent)
    setMdContent(mdContent)
  }
  return (
    <>
      <ArticleDetailWrapper>
        <MdStyleWrapper
          id="write"
          dangerouslySetInnerHTML={{
            __html: translateMarkdown(mdContent)
          }}
        ></MdStyleWrapper>
        <section style={{ width: 800 }} id="write">
          <Editor
            modelValue={mdContent}
            onChange={handleMdChange}
            preview={false}
          />
        </section>
      </ArticleDetailWrapper>
    </>
  )
}
