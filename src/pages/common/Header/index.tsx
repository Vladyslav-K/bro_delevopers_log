import React, { SFC, memo } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Logo from './images/logo.png'

const Header: SFC = () => {
  return (
    <StyledHeader>
      <HeaderContent>
        <LogoContainer>
          <StyledLink to="/">
            <StyledImg src={Logo} alt="logo" />
          </StyledLink>
        </LogoContainer>

        <StyledAppBar>
          <Link to="/problems">Problems</Link>
          <Link to="/errors">Errors</Link>
          <Link to="/links">Links</Link>
        </StyledAppBar>
      </HeaderContent>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  display: flex;
  position: static;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 70px;

  background-color: #444;

  transform: translateZ(0);

  user-select: none;
`

const HeaderContent = styled.div`
  display: flex;
  align-items: center;

  max-width: 1440px;
  width: 100%;
`

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
`

const StyledImg = styled.img`
  width: 70px;
  height: 70px;
`

const StyledAppBar = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 0;

  width: 100%;

  a {
    padding: 0 15px;

    color: white;
    text-decoration: none;

    &:visited {
      color: white;
    }
  }
`

const LogoContainer = styled.div`
  display: flex;
  flex: 1;
`

export default memo(Header)
