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
`

export const FounderDetails = styled.div`
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
`

export const FounderImage = styled.div`
  img {
    width: 100%;
    height: 100%;
    margin: 0;
  }
`

