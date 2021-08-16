import styled, { createGlobalStyle } from "styled-components"

import fontLight from "../assets/fonts/FuturaPT-Light.ttf"
import fontRegular from "../assets/fonts/FuturaPT-Book.ttf"
import FuturaMedium from "../assets/fonts/FuturaPTMedium.otf"
import fontBold from "../assets/fonts/FuturaPT-Bold.ttf"
import fontExtraBold from "../assets/fonts/FuturaPT-ExtraBold.ttf"
import FuturaHeavy from "../assets/fonts/FuturaPTHeavy.otf"

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
  font: 36px/45px Futura Heavy;
`

const Title = styled.h2`
  font: 50px/60px Futura Heavy;
  letter-spacing: 0px;
  margin: 0 auto;
  margin-bottom: 40px;
  text-align: center;
  color: #707070;
`

const Subtitle = styled.h4`
  font: 36px/45px Futura Heavy;
  margin-bottom: 13px;
  color: #707070;
`

const H3 = styled.h3`
  font: 36px/45px Futura Heavy;
  color: #707070;
  margin: 0;
`
const H4 = styled.h4`
  font: 24px/31px Futura Heavy;
  margin: 0;
`
const H5 = styled.h5`
  font-family: Futura Heavy;
  margin: 0;
  color: #707070;
`

const Paragraph = styled.p`
  font: 24px/31px "Futura Medium";
  color: #707070;
`

const ParagraphMedium = styled.p`
  font: 32px/45px Futura Medium;
  color: #535353;
  letter-spacing: 0px;
`

const ParagraphHeavy = styled.p`
  font: 315px/300px Futura Heavy;
  letter-spacing: 0px;
  color: #cc4a28;
  opacity: 1;
  margin: 0;
`

const DivHeavy = styled.div`
  font: 32px/41px Futura Heavy;
  letter-spacing: 0px;
  color: #707070;
`

const SpanHeavy = styled.span`
  font: 32px/41px Futura Heavy;
  letter-spacing: 0px;
  color: #cc4a28;
`

export {
  Typography,
  Headline,
  Title,
  H3,
  H4,
  H5,
  Subtitle,
  Paragraph,
  ParagraphMedium,
  ParagraphHeavy,
  DivHeavy,
  SpanHeavy,
}
