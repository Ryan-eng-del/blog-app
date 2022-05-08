import styled from 'styled-components'
export const MdStyleWrapper = styled.div`
  @media (max-width: 640px) {
    :root {
      --document-padding-x: 4ch;
    }
  }

  #write {
    /* size of writing area: */
    padding-left: var(--document-padding-x);
    padding-right: var(--document-padding-x);
    max-width: var(--main-content-max-width);
    box-sizing: border-box;
  }

  /**
 * ---------------------
 * Block Elements
 */

  /* yaml */
  pre {
    padding-bottom: 0.5rem;
    color: var(--accent-color);
    border-bottom: 2px solid var(--border-color);
    font-family: var(--monospace-font);
  }

  /* headings */
  /* <> */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--heading-font);
    color: var(--header-color);
  }

  /* <> */
  h1 {
    padding: 5% 4% 4% 4%;
    text-align: center;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    font-size: var(--h1-fontsize);
    border: 4px solid var(--primary-colour);
  }

  h1:not(:first-child) {
    margin-top: 3rem;
  }

  /* <> */
  h2 {
    content: '';
    text-align: center;
    font-size: var(--h2-fontsize);
    margin: 1.5rem 10%;
  }
  h2:after {
    content: '';
    /* height: 1px; */
    width: 70%;
    display: block;
    margin: 0.2em auto 0;
    border-bottom: 2px solid var(--primary-colour);
  }

  /* <> */
  h3 {
    margin-top: 1.5rem;
    margin-bottom: 0.5em;
    font-size: var(--h3-fontsize);
  }
  /* <> */
  h3 span {
    padding: 0 1em;
    border-left: 2px solid var(--primary-colour);
    border-right: 2px solid var(--primary-colour);
  }

  h4 {
    color: var(--header-color);
    margin-top: 1rem;
    margin-bottom: 0.4em;
    font-size: var(--h4-fontsize);
  }
  /* <> */
  h4 span {
    padding: 1px 0 0.1em 0;
    border-bottom: 2px dashed var(--primary-colour);
  }

  h5 {
    color: var(--header-color);
    margin-top: 1rem;
    margin-bottom: 0.2em;
    font-size: var(--h5-fontsize);
  }

  h6 {
    font-style: oblique;
    color: var(--header-color);
    margin-top: 1rem;
    margin-bottom: 0.2em;
    font-size: var(--h6-fontsize);
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

  /* table */
  table {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  table tr:nth-child(2n),
  thead {
    background-color: var(--side-bar-bg-color);
  }

  td,
  th {
    border-style: solid;
    border-color: var(--border-color);
    border-width: 1px;
    padding: 0.35rem 0.7rem;
  }

  li p {
    margin: 0;
  }

  blockquote {
    font-style: italic; /* <> */
    margin: 1rem 0;
    padding-left: 2ch;
    margin-left: 0.5ch;
    position: relative;
    overflow: visible; /* <> */
    border-left: 4px solid var(--primary-colour);
    color: var(--accent-color);
  }

  /* horizontal line */
  hr {
    border: none;
    border-bottom: 2px solid var(--hr-color);
    margin-top: 1.4rem;
    margin-bottom: 1.4rem;
  }

  /* list markers */
  ol > li::marker,
  ul > li::marker {
    color: var(--primary-colour);
    font-weight: bold;
  }

  p {
    margin: 0.1em 0;
  }

  a {
    color: var(--link-color);
  }
`
export const ArticleDetailWrapper = styled.div``
