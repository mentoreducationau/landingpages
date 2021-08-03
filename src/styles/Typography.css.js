import styled, { createGlobalStyle } from 'styled-components'

import fontLight from '../assets/fonts/FuturaPT-Light.ttf'
import fontRegular from '../assets/fonts/FuturaPT-Book.ttf'
import fontBold from '../assets/fonts/FuturaPT-Bold.ttf'
import fontExtraBold from '../assets/fonts/FuturaPT-ExtraBold.ttf'

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'FuturaPT';
    src: url(${fontLight});
    font-style: normal;
    font-weight: 300;
  }
  @font-face {
    font-family: 'FuturaPT';
    src: url(${fontRegular});
    font-style: normal;
    font-weight: 400;
  }
  @font-face {
    font-family: 'FuturaPT';
    src: url(${fontBold});
    font-style: normal;
    font-weight: 700;
  }
  @font-face {
    font-family: 'FuturaPT';
    src: url(${fontExtraBold});
    font-style: normal;
    font-weight: 900;
  }
`

const Headline = styled.h1`
  font-size: 3em;
  font-weight: 700;
`

const Title = styled.h2`
  font-size: 1.5em;
  margin: 0;
  margin-top:  ${props => props.marginTop ? props.marginTop : 0};
  font-weight:  ${props => props.weight ? props.weight : 700};
  color: ${props => props.color ? props.color : "inherit"};
`

const Subtitle = styled.h3`
  font-size: 1em;
  font-weight: 400;
  text-transform: uppercase;
`

const Paragraph = styled.p`
 font-family: FuturaPT;
  font-size: 0.8em;
  font-weight: 400;
  margin-top:  ${props => props.marginTop ? props.marginTop : 0};
`

export { Typography, Headline, Title, Subtitle, Paragraph }