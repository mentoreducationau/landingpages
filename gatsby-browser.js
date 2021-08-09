/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import Theme from './src/constant/theme'
import GlobalStyles from './src/styles/GlobalStyles.css'
import { useWindowSize } from './src/hooks/useWindowSize'
import { Typography } from './src/styles/Typography.css'

const App = ({ element }) => {
  const [width] = useWindowSize()
  return (
    <ThemeProvider theme={width < 1200 ? Theme.mobile : Theme.desktop}>
      <GlobalStyles />
      <Typography />
      {element}
    </ThemeProvider>
  )
}

export const wrapRootElement = ({ element }) => {
  return <App element={element} />
}