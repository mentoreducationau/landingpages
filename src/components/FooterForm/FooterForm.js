import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import {
  FooterformContainer,
  InputForm,
  InputContainer,
  QuotedBoxRight,
  QuotedBoxLeft,
  InputLabel,
  Textarea,
  FooterFormbutton,
  FooterFormbuttonWrapper,
  FormIntroContainer,
  FormDescription
} from "./FooterForm.css"

import { Title } from '../../styles/Typography.css'

const FooterForm = () => {
  return (
    <FooterformContainer>
      <Title weight={700} color="#707070">
        Need more <span style={{ color: "#FF1010" }}>assistance</span> or to
        talk to an expert?
      </Title>
      <FormIntroContainer>
        <StaticImage src="../../../static/footer-img.jpg" alt="form-image" />
        <FormDescription>
          <h4>We understand</h4>
          <div>Help</div>
          <p>
            Sometimes you just want to talk to someone who understands what all
            of this is information means and can explain it in a way you can
            understand.
          </p>
          <div>Can’t find enough information?</div>
          <p>
            If you have more questions or queries we have Education Advise
            experts waiting to answer any and all of your queries.
          </p>
        </FormDescription>
      </FormIntroContainer>
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
