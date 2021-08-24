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

const BannerHeadline = styled.h1`
  font-family: Futura Medium;
  font-size: 30px;
  line-height: 35px;
  color: #464343;
  margin: 0;
  text-align: left;

  @media (min-width: 768px) {
    font-size: 60px;
    line-height: 77px;
    text-align: center;
  }
`

const Headline = styled.h1`
  font-family: Futura Heavy;
  font-size: 30px;
  line-height: 35px;

  @media (min-width: 768px) {
    font-size: 36px;
    line-height: 45px;
  }
`

const Title = styled.h2`
  font-family: Futura Heavy;
  font-size: 30px;
  line-height: 35px;
  letter-spacing: 0px;
  margin: 0 auto;
  margin-bottom: 40px;
  color: #707070;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 50px;
    line-height: 60px;
  }
`

const Subtitle = styled.h4`
  font-family: Futura Heavy;
  font-size: 25px;
  line-height: 30px;
  margin-bottom: 13px;
  color: #707070;

  @media (min-width: 768px) {
    font-size: 36px;
    line-height: 45px;
  }
`
const SubtitleBold = styled.h4`
  font-family: Futura Bold;
  font-size: 22px;
  line-height: 30px;
  color: #153e35;
  
  @media (min-width: 768px) {
    font-size: 36px;
    line-height: 45px;
    margin-bottom: 13px;
  }
`

const TabTitle = styled.h3`
  font-family: Futura Medium;
  font-size: 11px;
  line-height: 13px;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 30px;
    line-height: 38px;
  }
`

const H3 = styled.h3`
  font-family: Futura Heavy;
  font-size: 25px;
  line-height: 30px;
  color: #707070;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 36px;
    line-height: 45px;
  }
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
  font-family: "Futura Medium";
  font-size: 20px;
  line-height: 26px;
  color: #707070;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 31px;
  }
`

const ParagraphMedium = styled.p`
  font-family: Futura Medium;
  font-size: 22px;
  line-height: 27px;
  color: #535353;
  letter-spacing: 0px;

  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 45px;
  }
`

const ParagraphHeavy = styled.p`
  font-family: Futura Heavy;
  font-size: 190px;
  line-height: 0.8;
  letter-spacing: 0px;
  color: #cc4a28;
  opacity: 1;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 315px;
  }
`

const DivHeavy = styled.div`
  font-family: Futura Heavy;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: 0px;
  color: #707070;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 41px;
    text-align: left;
  }
`

const SpanHeavy = styled.span`
  font-family: Futura Heavy;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: 0px;
  color: #cc4a28;

  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 41px;
  }
`

export {
  Typography,
  BannerHeadline,
  Headline,
  Title,
  TabTitle,
  H3,
  H4,
  H5,
  Subtitle,
  SubtitleBold,
  Paragraph,
  ParagraphMedium,
  ParagraphHeavy,
  DivHeavy,
  SpanHeavy,
}
