import styled from "styled-components"

export const RegisterContainer = styled.div`
  width: 25vw;
  height: 100%;
  margin-top: 2rem;
`
export const RegisterForm = styled.form`
  width: 80%;
  margin-bottom: 4rem;
`
export const Input = styled.input`
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
export const Button = styled.button`
  margin-right: -1rem;
  padding: 0.65rem 2rem;
  float: right;
  background: red;
  color: white;
  border: 0;
  border-radius: 0.1rem;
  font-size: 130%;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
`
