import styled from "styled-components"
import { Paragraph } from '../../styles/Typography.css'

export const NosubstituteContainer = styled.div`
  width: 100%;
  margin: 4rem 2rem;
  max-width: 99vw;

  h2 {
    text-align: center;
  }
`

export const FoundersDetailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 27px 81px;
  column-gap: 25px;
  row-gap: 41px;

  @media screen and (max-width: 768px) {
    display: block;
    padding: 27px 0;
  }
`
export const QuotedPara = styled(Paragraph)`
  font-family: Futura Medium;
  grid-column: 1 / 3;
  font-size: 27px;
  line-height: 34px;
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

  h3 {
    font: normal normal bold 30px/24px Futura;
    letter-spacing: 0px;
    margin-bottom: 3px;
    margin-top: 0;
  }

  span {
    font: oblique normal 500 23px/24px Futura Medium;
    letter-spacing: 0px;
  }

  p {
    font: normal normal 500 21px/21px Futura Medium;
    letter-spacing: 0px;
    margin-top: 17px;
  }

  @media (max-width: 768px) {
    margin: 10px;
    h3, span {
      text-align: center;
      text-transform: uppercase;
      font-style: normal;
    }
  }
`

export const FounderImage = styled.img`
    width: 100%;
    height: 100%;
    margin: 0;
    grid-column: 2 / 3;

    @media (max-width: 768px) {
      width: 50%;
      float: left;
      margin: 10px;
    }
`

