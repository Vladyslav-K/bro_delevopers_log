import React, { SFC } from 'react'
import styled from 'styled-components'

const SubmitButton: SFC = () => {
  return <StyledButton type="submit">Send</StyledButton>
}

const StyledButton = styled.button`
  min-width: 150px;

  margin-top: 15px;
  padding: 15px;

  background-color: #a598b9;

  border: 1px solid #a598b9;
  border-radius: 10px;
  outline: none;

  color: white;
  font-size: 20px;
  cursor: pointer;
`

export default SubmitButton
