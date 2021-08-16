import React from "react"

import {
  SubscribeFormStyled,
  SubscribeFormField,
  SubscribeButton,
  RequiredIndicatorText,
  RequiredIndicator,
} from "./SubscribeForm.css"

import { FormFieldComponent } from "../FormFieldComponent"

const SubscribeForm = () => {
  return (
    <>
      <div>
        <SubscribeFormStyled action="">
          <div style={{ display: "block" }}>
            <SubscribeFormField>
              <FormFieldComponent
                label="Email Address"
                name="email"
                type="email"
                required={true}
              >
                <RequiredIndicator>*</RequiredIndicator>
              </FormFieldComponent>
            </SubscribeFormField>
            <SubscribeFormField>
              <FormFieldComponent
                label="First Name"
                name="firstname"
                type="text"
              />
            </SubscribeFormField>
            <SubscribeFormField>
              <FormFieldComponent
                label="Last Name"
                name="lastname"
                type="text"
              />
            </SubscribeFormField>
            <SubscribeButton value="Subscribe" type="submit" name="subscribe" />
          </div>
        </SubscribeFormStyled>
      </div>
      <RequiredIndicatorText>
        <RequiredIndicator>*</RequiredIndicator>
        indicates required
      </RequiredIndicatorText>
    </>
  )
}

export default SubscribeForm