import styled from "styled-components"
import { Paragraph } from '../../styles/Typography.css'

export const FoundersDetailGrid = styled.div`
  display: grid;
  grid-template-columns: 100%;
  row-gap: 40px;

  @media (min-width: 768px) {
    gap: 40px;
    grid-template-columns: repeat(2, 1fr);
  }

  .gatsby-image-wrapper {
    width: 100%;
    height: auto;
    @media (min-width: 768px) {
      aspect-ratio: 4/3;
    }
  }
`
export const QuotedPara = styled(Paragraph)`
  @media (min-width: 768px) {
    font-size: 28px;
    line-height: 45px;
  }

  font-size: 22px;
  line-height: 27px;
  grid-column: 1 / 3;
  letter-spacing: 0px;
  text-align: center;
  color: #535353;
  margin: auto;
  text-transform: uppercase;

  svg:not(:root) {
    width: 7%;
    max-width: fit-content;
  }
`

export const FounderDetails = styled.div`
  @media (min-width: 768px) {
    grid-row: 2;

    span {
      font-size: 32px;
      line-height: 41px;
      font-style: italic;
    }
  }

  grid-column: 1 / 2;
  color: #535353;

  span {
    font-family: Futura Heavy;
    font-size: 22px;
    line-height: 27px;
    color: #cc4a28;
    letter-spacing: 0px;
    margin: 0;
  }

  p {
    margin-top: 17px;
  }
`