import styled from "styled-components"
import { GlobalFormField } from "../../styles/FormStyles.css"

export const CustomFormStyled = styled.form`
  width: 100%;
  margin: 0;
`

export const FormField = styled(GlobalFormField)`
  width: 100%;

  label {
    font-family: Futura Medium;
    font-size: 18px;
    line-height: 23px;
    color: #464343;
    padding-left: 1rem;
    margin-bottom: 8px;

    @media (min-width: 768px) {
      font-size: 28px;
      line-height: 35px;
    }
  }

  input {
    border: 2px solid #707070;
    height: 50px;
  }
`

export const FormButton = styled.button`
  font-family: Futura Heavy;
  font-size: 30px;
  line-height: 38px;
  background: #cc4a28;
  color: white;
  border: 0;
  border-radius: 2px;
  width: 100%;
  height: 50px;
  text-transform: uppercase;
  margin: 6% auto 0;
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 51px;
  }
`
