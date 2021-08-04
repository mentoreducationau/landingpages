import styled from "styled-components"

export const NosubstituteContainer = styled.div`
  width: 100%;
  margin: 4rem 2rem;
  max-width: 99vw;

  h2 {
    text-align: center;
  }
`
export const QuotedPara = styled.p`
  margin-top : 40px;
  font: normal normal 500 36px/45px Futura;
  letter-spacing: 0px;
  color: #535353;
  max-width: 90%;
  margin: auto;
  margin-top: 40px;
`

export const QuotedBox = styled.div`
  display : flex;
  margin-top : 40px;
  padding: 0 81px;
  justify-content: center;

  @media screen and (max-width: 1440px) {
    align-items: center;
  }
`

export const QuotedBoxLeft = styled.div`
  width: 50%;
  color: #535353;
  padding-right: 20px;

  h3 {
    font: normal normal bold 40px/32px Futura;
    letter-spacing: 0px;
    margin-bottom: 3px;
  }

  span {
    font: oblique normal 500 31px/32px Futura;
    letter-spacing: 0px;

  }

  p {
    font: normal normal 500 28px/29px Futura;
    letter-spacing: 0px;
    margin-top: 17px;
    
  }
`

export const QuotedBoxRight = styled.div`
  width: 50%;

  img {
    width: 100%;
  }
`

