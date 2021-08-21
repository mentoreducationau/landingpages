import styled from "styled-components"
import { Paragraph } from '../../styles/Typography.css'

export const FoundersDetailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;

  @media screen and (max-width: 768px) {
    display: block;
    padding: 27px 0;
  }

  .gatsby-image-wrapper {
    width: 100%;
    height: auto;
    aspect-ratio: 4/3;
    @media (max-width: 768px) {
      width: 50%;
      float: left;
      margin: 10px;
    }
  }
`
export const QuotedPara = styled(Paragraph)`
  font-size: 28px;
  line-height: 45px;
  grid-column: 1 / 3;
  letter-spacing: 0px;
  color: #535353;
  margin: auto;
  text-transform: uppercase;

  @media (max-width: 768px) {
    margin-bottom: 21px;
  }
`

export const FounderDetails = styled.div`
  grid-column: 1 / 2;
  grid-row: 2;
  color: #535353;

  span {
    font: italic 32px/41px Futura Medium;
    color: #cc4a28;
    letter-spacing: 0px;
    margin:0;
  }

  p {
    margin-top: 17px;
  }

  @media (max-width: 768px) {
    margin: 10px;
    h3,
    span {
      text-align: center;
      text-transform: uppercase;
      font-style: normal;
    }
  }
`