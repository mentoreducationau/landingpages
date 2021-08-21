import React from "react"
import { CustomForm } from "../FormFieldComponent"
import { RegisterContainer } from "./register.css"
import { H3 } from "../../../styles/Typography.css"

const Registar = () => {
  return (
    <RegisterContainer>
      <H3>Register now</H3>
      {/* <h3>Fill out your details to register now!</h3> */}
      <CustomForm buttonText="Register" />
    </RegisterContainer>
  )
}

export default Registar
