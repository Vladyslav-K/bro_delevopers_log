import React, { SFC } from 'react'
import styled from 'styled-components'

const SubmitButton: SFC = () => {
  return <StyledButton type="submit">Send</StyledButton>
}

const StyledButton = styled.button`
  min-width: 150px;

  padding: 15px;

  background-color: #444;

  border: 1px solid #444;
  border-radius: 10px;
  outline: none;

  color: white;
  font-size: 20px;
  cursor: pointer;
`

export default SubmitButton
