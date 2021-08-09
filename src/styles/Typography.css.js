import styled, { createGlobalStyle } from 'styled-components'

import fontLight from '../assets/fonts/FuturaPT-Light.ttf'
import fontRegular from '../assets/fonts/FuturaPT-Book.ttf'
import FuturaMedium from "../assets/fonts/FuturaPTMedium.otf"
import fontBold from '../assets/fonts/FuturaPT-Bold.ttf'
import fontExtraBold from '../assets/fonts/FuturaPT-ExtraBold.ttf'
import FuturaHeavy from '../assets/fonts/FuturaPTHeavy.otf'

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Futura Light';
    src: url(${fontLight});
    font-style: normal;
    font-weight: 300;
    font-display: fallback; // to avoid flickering as suggested in docs
  }
  @font-face {
    font-family: 'Futura';
    src: url(${fontRegular});
    font-style: normal;
    font-weight: 400;
    font-display: fallback;
  }
  @font-face {
    font-family: 'Futura Medium';
    src: url(${FuturaMedium});
    font-style: normal;
    font-weight: 500;
    font-display: fallback;
  }
  @font-face {
    font-family: 'Futura Bold';
    src: url(${fontBold});
    font-style: normal;
    font-weight: 700;
    font-display: fallback;
  }
  @font-face {
    font-family: 'Futura Extra Bold';
    src: url(${fontExtraBold});
    font-style: normal;
    font-weight: 900;
    font-display: fallback;
  }
  @font-face {
    font-family: 'Futura Heavy';
    src: url(${FuturaHeavy});
    font-style: normal;
    font-weight: 900;
    font-display: fallback;
  }
`

const Headline = styled.h1`
  font-size: 3em;
  font-weight: 700;
`

const Title = styled.h2`
  font: normal normal 900 49px/63px Futura Heavy;
  letter-spacing: 0px;
  margin: 0;
  margin-top:  ${props => props.marginTop ? props.marginTop : 0};
  font-weight:  ${props => props.weight ? props.weight : 900};
  color: ${props => props.color ? props.color : "inherit"};
`

const Subtitle = styled.h3`
  font-size: 1em;
  font-weight: 400;
  text-transform: uppercase;
`

const Paragraph = styled.p`
  font-family: Futura Bold;
  font-size: 0.8em;
  font-weight: 400;
  margin-top:  ${props => props.marginTop ? props.marginTop : 0};
`

export { Typography, Headline, Title, Subtitle, Paragraph }