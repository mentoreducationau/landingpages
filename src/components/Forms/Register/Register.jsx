import React from "react"
import { RegisterContainer} from "./register.css"
import { CustomForm } from "../FormFieldComponent"
import CourseGuide from "../CourseGuide/CourseGuide"

const Registar = () => {
  return (
    <RegisterContainer>
      <h1>Register now</h1>
      {/* <h3>Fill out your details to register now!</h3> */}
      <CustomForm buttonText="Register" />
      <CourseGuide/>
    </RegisterContainer>
  )
}

export default Registar
