import React, { SFC, memo } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Wrapper from '../../layouts/Wrapper'

const MainPage: SFC = () => {
  return (
    <Wrapper>
      <Container>
        <Heading>What do you want to share?</Heading>

        <StyledLink to="/problem-solution">Problem solution</StyledLink>

        <StyledLink to="/error-solution">Error solution</StyledLink>

        <StyledLink to="/add-link">Awesome link</StyledLink>
      </Container>
    </Wrapper>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  width: 100%;

  padding: 80px;

  border: 2px solid #a598b9;
  border-radius: 30px;
`

const StyledLink = styled(Link)`
  min-width: 150px;

  padding: 10px;
  margin: 20px;

  text-decoration: none;
  text-align: center;
  color: #625772;

  border: 4px solid #625772;
  border-radius: 20px;

  &:visited {
    color: #625772;
  }
`

const Heading = styled.span`
  padding: 30px;

  font-size: 25px;
  color: #625772;
`

export default memo(MainPage)
