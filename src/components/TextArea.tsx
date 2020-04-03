import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { FieldError } from 'react-hook-form'

interface TextAreaProps {
  label: string
  name: string
  placeholder: string
  error: FieldError | undefined
  ref: ((instance: HTMLTextAreaElement | null) => void) | React.RefObject<HTMLTextAreaElement> | null | undefined
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
  const { label, name, placeholder, error } = props

  return (
    <TextAreaContainer>
      <LabelContainer>
        <StyledLabel htmlFor={name}>{label}</StyledLabel>
        {error && <RequiredSpan>Required</RequiredSpan>}
      </LabelContainer>

      <StyledTextArea cols={40} rows={5} id={name} name={name} placeholder={placeholder} ref={ref} error={error} />
    </TextAreaContainer>
  )
})

export default TextArea

const TextAreaContainer = styled.div`
  margin: 20px;
`

const StyledTextArea = styled.textarea<{ error: FieldError | undefined }>`
  max-width: 1440px;
  min-width: 400px;
  min-height: 90px;

  padding: 15px;

  border: ${props => (props.error ? '1px solid red' : '1px solid #a598b9')};
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
