import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { FieldError } from 'react-hook-form'

interface InputProps {
  label: string
  name: string
  placeholder: string
  error: FieldError | undefined
  ref: ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { label, name, placeholder, error } = props

  return (
    <InputContainer>
      <LabelContainer>
        <StyledLabel htmlFor={name}>{label}</StyledLabel>
        {error && <RequiredSpan>Required</RequiredSpan>}
      </LabelContainer>

      <StyledInput id={name} name={name} type="text" placeholder={placeholder} ref={ref} error={error} />
    </InputContainer>
  )
})

export default Input

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 80%;

  margin: 20px 0;
`

const StyledInput = styled.input<{ error: FieldError | undefined }>`
  padding: 15px;

  border: ${(props) => (props.error ? '2px solid red' : '2px solid #444')};
  border-radius: 10px;
  outline: none;

  font-size: 16px;

  &:focus {
    border-color: blue;
  }
`
const StyledLabel = styled.label`
  font-size: 18px;
`

const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 10px;
`
const RequiredSpan = styled.span`
  color: red;
`
