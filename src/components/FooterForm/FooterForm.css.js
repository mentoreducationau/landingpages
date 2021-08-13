import styled from "styled-components"

export const FooterformContainer = styled.div`
  width: 100%;
  margin: 4rem 2rem;
  max-width: 99vw;

  h2 {
    text-align: center;
  }
`

export const FormIntroContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 43px;
  padding: 0 81px;
  margin-top: 41px;
`

export const FormDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h4 {
    margin-bottom: 10px;
    font-weight: 900;
    font-size: 36px;
    line-height: 46px;
    letter-spacing: 0px;
    text-align: left;
    letter-spacing: 0px;
    color: #707070;
    opacity: 1;
  }

  p {
    line-height: 23px;
    color: #535353;
    letter-spacing: 0px;
    font-weight: 500;
    font-size: 18px;
  }

  div {
    letter-spacing: 0px;
    color: #cc4a28;
    opacity: 1;
    font-size: 27px;
    font-weight: 900;
    margin: 6px 0;
    line-height: 33px;
  }
`

export const InputForm = styled.input`
  border: 3px solid #707070;
  height: 59px;
  margin-bottom: 23px;
  width: 100%;
  padding-left: 9px;
  padding-right: 9px;
`

export const InputLabel = styled.label`
  font-size: 21px;
  line-height: 26px;
  letter-spacing: 0px;
  color: #464343;
  margin-bottom: 15px;
  margin-left: 10px;
  display: inline-block;
  width: 100%;
`

export const InputContainer = styled.div`
  display: flex;
  margin-top: 40px;
  padding: 0 81px;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (max-width: 1440px) {
  }
`

export const QuotedBoxLeft = styled.div`
  width: 50%;
  color: #535353;
  padding-right: 21px;
`

export const QuotedBoxRight = styled.div`
  width: 50%;
  padding-left: 21px;
`

export const Textarea = styled.textarea`
  height: 200px;
  border: 3px solid #707070;
  width: 100%;
  padding-left: 9px;
  padding-right: 9px;
`
export const FooterFormbuttonWrapper = styled.div`
  width: 100%;
  text-align: right;
  margin-top: 50px;
`

export const FooterFormbutton = styled.button`
  background: #cc4a28;
  border: none;
  border-radius: 2px;
  font-size: 40px;
  font-family: Futura Heavy;
  letter-spacing: 0px;
  color: #ffffff;
  text-transform: uppercase;
  padding: 20px 50px;
  cursor: pointer;
`
