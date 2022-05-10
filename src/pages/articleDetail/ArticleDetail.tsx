import React, { useState } from 'react'
import Editor from 'md-editor-rt'
import 'md-editor-rt/lib/style.css'
import 'highlight.js/styles/atom-one-dark.css'
import { ArticleDetailWrapper, MdStyleWrapper } from './ArticleDetailStyle'

import { translateMarkdown } from '../../utils/translateMarkdown'

export const ArticleDetail: React.FC = (props) => {
  const [mdContent, setMdContent] = useState('')
  const handleMdChange = (mdContent: string) => {
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
