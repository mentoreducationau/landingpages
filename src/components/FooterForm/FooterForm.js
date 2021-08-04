import React from "react"
import {
  FooterformContainer,
  InputForm,
  InputContainer,
  QuotedBoxRight,
  QuotedBoxLeft,
  InputLabel,
  Textarea,
  FooterFormbutton,
  FooterFormbuttonWrapper
} from "./FooterForm.css"

const FooterForm = () => {
  return (
    <FooterformContainer>
      <InputContainer>
        <QuotedBoxLeft>
          <InputLabel>Name</InputLabel>
          <InputForm />
          <InputLabel>Phone</InputLabel>
          <InputForm />
        </QuotedBoxLeft>
        <QuotedBoxRight>
          <InputLabel>Email</InputLabel>
          <InputForm />
        </QuotedBoxRight>
        <InputLabel>How can we help?</InputLabel>
        <Textarea />
        <FooterFormbuttonWrapper>
          <FooterFormbutton>REACH OUT</FooterFormbutton>

        </FooterFormbuttonWrapper>
      </InputContainer>
    </FooterformContainer>
  )
}

export default FooterForm
