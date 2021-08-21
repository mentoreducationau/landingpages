import React, { useState } from 'react'
import { CustomFormStyled, FormField, FormButton } from './formComponent.css'
import { uniqueId } from 'lodash'

export const FormFieldComponent = ({
  children,
  label,
  name,
  type,
  required = false,
}) => {
  const [id] = useState(() => uniqueId(`${name}-`))
  return (
      <>
        <label htmlFor={id}>
            {label} {children}
        </label>
        <input type={type} name={name} id={id} aria-required={required} />
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