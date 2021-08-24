import styled from "styled-components"

export const FormIntroContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;
  margin-top: 41px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 43px;
  }
  
`

export const FormDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  * {
    text-align: left;
  }

  h4 {
    margin-bottom: 10px;
  }

  p {
    font: 20px/26px "Futura Medium";
    color: #535353;
    letter-spacing: 0px;
  }

  div {
    color: #fc0000;
    margin: 6px 0;
  }
`

export const InputContainer = styled.div`
  @media (min-width: 768px) {
    flex-direction: row;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 40px;
`

export const QuotedBoxLeft = styled.div`
  @media (min-width: 768px) {
    width: 50%;
    padding-right: 21px;
  }

  width: 100%;
  color: #535353;
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
  @media (min-width: 768px) {
    font-size: 28px;
    line-height: 35px;
  }

  font-family: Futura Medium;
  font-size: 21px;
  line-height: 26px;
  letter-spacing: 0px;
  color: #464343;
  margin-bottom: 15px;
  margin-left: 10px;
  display: inline-block;
  width: 100%;
`

export const QuotedBoxRight = styled.div`
  @media (min-width: 768px) {
    width: 50%;
    padding-left: 21px;
  }

  width: 100%;
`

export const Textarea = styled.textarea`
  height: 200px;
  border: 3px solid #707070;
  width: 100%;
  padding-left: 9px;
  padding-right: 9px;
`
export const FooterFormbuttonWrapper = styled.div`
  @media (min-width: 768px) {
    text-align: right;
  }

  width: 100%;
  margin-top: 50px;
`

export const FooterFormbutton = styled.button`
  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 51px;
    padding: 10px 70px;
    width: fit-content;
  }

  font-size: 30px;
  line-height: 38px;
  font-family: Futura Heavy;
  letter-spacing: 0px;
  color: #ffffff;
  text-transform: uppercase;
  background: #cc4a28;
  border: none;
  border-radius: 2px;
  padding: 10px;
  width: 100%;
  cursor: pointer;
`
