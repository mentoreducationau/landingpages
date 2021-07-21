import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    word-wrap: break-word;
  }
  html {
    min-height: 100%;
  }
  html,
  body {
    font-size: 16px;
    line-height: 1.5;
    font-style: normal;
    font-stretch: normal;
    font-family: 'Ubuntu', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    letter-spacing: normal;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    overscroll-behavior-y: none;
  }
  ul,
  menu,
  dir {
    padding-left: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0;
  }
  *:focus,
  *:active {
    outline: 0 !important;
  }
  a,
  button {
   transition: opacity .3s;
  }
  a:hover,
  a:active,
  button:hover,
  button:active {
    opacity: .9;
  }
  img {
    max-width: 100%;
  }
  img[src*="base64\\,"] {
    image-rendering: -moz-crisp-edges;
    image-rendering: crisp-edges;
  }
  
  /* ------------------------------------------- */
  
  html, .root {
    font-size: 24px;
    line-height: 31px;
  }
  body, .article {
    font-family: sans-serif;
    font-size: 1rem;
    line-height: 1.2916667rem;
    max-width: 560px;
    margin: auto;
  }
  h1, .h1 {
    font-size: 4.25rem;
    line-height: 5.1666667rem;
    margin-top: 1.2916667rem;
    margin-bottom: 2.5833334rem;
  }
  h2, .h2 {
    font-size: 2.625rem;
    line-height: 3.875rem;
    margin-top: 1.2916667rem;
    margin-bottom: 1.2916667rem;
  }
  h3, .h3 {
    font-size: 1.625rem;
    line-height: 2.5833333rem;
    margin-top: 1.2916667rem;
    margin-bottom: 0rem;
  }
  h4, .h4 {
    font-size: 1rem;
    line-height: 1.2916667rem;
    margin-top: 1.2916667rem;
    margin-bottom: 0rem;
  }
  h5, .h5 {
    font-size: 1rem;
    line-height: 1.2916667rem;
    margin-top: 1.2916667rem;
    margin-bottom: 0rem;
  }
  p, ul, ol, pre, table, blockquote {
    margin-top: 0rem;
    margin-bottom: 1.2916667rem;
  }
  ul ul, ol ol, ul ol, ol ul {
    margin-top: 0rem;
    margin-bottom: 0rem;
  }
  /* Let's make sure all's aligned */
  hr, .hr {
    border: 1px solid;
    margin: -1px 0;
  }
  a, b, i, strong, em, small, code {
    line-height: 0;
  }
  sub, sup {
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sup {
    top: -0.5em;
  }
  sub {
    bottom: -0.25em;
  }
`

export default GlobalStyles