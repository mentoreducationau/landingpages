import React from "react"
import styled from "styled-components"
import Testimonials from "../testimonials"
const Registar = () => {
  return (
    <RegisterContainer>
      <h1>Register now</h1>
      <h3>Fill out your details to register now!</h3>
      <RegisterForm>
        <Input type="text" placeholder="Name" />
        <Input type="text" placeholder="Email" />
        <Button action="submit"> REGISTER</Button>
      </RegisterForm>
      <Testimonials/>
    </RegisterContainer>
  )
}

export default Registar

const RegisterContainer = styled.div`
  width: 25vw;
  height: 100%;
  margin-top: 2rem;
`
const RegisterForm = styled.form`
  width: 80%;
  margin-bottom: 4rem;
`
const Input = styled.input`
  height: 2.5rem;
  width: 100%;
  margin: 1rem 1rem;
  background: white;
  border: 1px darkgrey solid;
  padding-left: 1rem;
  ::placeholder {
    color: black;
  }
`
const Button = styled.button`
margin-right: -1rem;
padding: .65rem 2rem;
float: right;
background: red;
color: white;
border: 0;
border-radius: .1rem;
font-size: 130%;
font-weight: bold;
font-family: Arial, Helvetica, sans-serif;
`