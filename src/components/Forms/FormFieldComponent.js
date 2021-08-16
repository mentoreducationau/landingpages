import React from 'react'
import { CustomFormStyled, FormField, FormButton } from './formComponent.css'

export const FormFieldComponent = ({
  children,
  label,
  name,
  type,
  required = false,
}) => {
  return (
      <>
        <label htmlFor={name}>
            {label} {children}
        </label>
        <input type={type} name={name} id={name} aria-required={required} />
      </>
  )
}

export const CustomForm = ({ buttonText, value, name, onClick }) => {
  return (
    <CustomFormStyled action="">
      <FormField>
        <FormFieldComponent label="Name" name="name" type="text" />
      </FormField>
      <FormField>
        <FormFieldComponent label="Email" name="email" type="email" />
      </FormField>
      <FormField>
        <FormFieldComponent label="Phone" name="phone" type="text" />
      </FormField>
      <FormButton value={value} type="submit" name={name} onClick={onClick}>
        {buttonText}
      </FormButton>
    </CustomFormStyled>
  )
}