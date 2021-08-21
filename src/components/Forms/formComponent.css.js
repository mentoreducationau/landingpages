import styled from "styled-components"
import { GlobalFormField } from "../../styles/FormStyles.css"

export const CustomFormStyled = styled.form`
  width: 100%;
`

export const FormField = styled(GlobalFormField)`
  width: 100%;

  label {
    font: 28px/35px Futura Medium;
    color: #464343;
    padding-left: 1rem;
  }

  input {
    border: 2px solid #707070;
  }
`

export const FormButton = styled.button`
  font: 40px/51px Futura Heavy;
  background: #cc4a28;
  color: white;
  border: 0;
  border-radius: 2px;
  width: 100%;
  text-transform: uppercase;
  margin: 3% auto 0;
  cursor: pointer;
`
