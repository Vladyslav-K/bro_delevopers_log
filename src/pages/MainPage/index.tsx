import React, { SFC, memo } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const MainPage: SFC = () => {
  return (
    <Container>
      <Heading>What do you want to share?</Heading>

      <StyledLink to="/problem-solution">Problem solution</StyledLink>

      <StyledLink to="/error-solution">Error solution</StyledLink>

      <StyledLink to="/add-link">Useful link</StyledLink>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  height: calc(100vh - 130px);
`

const StyledLink = styled(Link)`
  min-width: 150px;

  padding: 10px;
  margin: 20px;

  text-decoration: none;
  text-align: center;
  color: black;

  border: 4px solid black;
  border-radius: 20px;

  &:visited {
    color: black;
  }
`

const Heading = styled.span`
  padding: 30px;

  font-size: 25px;
  color: black;
`

export default memo(MainPage)
