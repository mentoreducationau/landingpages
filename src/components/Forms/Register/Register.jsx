import React from "react"
import { CustomForm } from "../FormFieldComponent"
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { RegisterContainer } from "./register.css"
import { H3 } from "../../../styles/Typography.css"

const Registar = () => {

  const handleSubmit = async values => {
    console.log(values)

    try {
      const result = await addToMailchimp(values.email, ...values)
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <RegisterContainer>
      <H3>Register now</H3>
      {/* <h3>Fill out your details to register now!</h3> */}
      <CustomForm buttonText="Register" handleSubmit={handleSubmit} />
    </RegisterContainer>
  )
}

export default Registar
