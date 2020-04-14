import React, { SFC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const MainPageButton: SFC = () => {
  return (
    <StyledLink to="/">
      <StyledButton type="button">Go home</StyledButton>
    </StyledLink>
  )
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

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:visited {
    color: white;
  }
`

export default MainPageButton
