import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { FieldError } from 'react-hook-form'

interface TextAreaProps {
  label: string
  name: string
  placeholder: string
  error?: FieldError | undefined
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

      <TextContainer>
        <StyledTextArea cols={40} rows={3} id={name} name={name} placeholder={placeholder} ref={ref} error={error} />
      </TextContainer>
    </TextAreaContainer>
  )
})

export default TextArea

const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 80%;

  margin: 10px 0;
`

const StyledTextArea = styled.textarea<{ error: FieldError | undefined }>`
  max-width: 100%;
  min-width: 450px;
  min-height: 60px;
  width: 100%;

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
const TextContainer = styled.div`
  display: flex;
`
