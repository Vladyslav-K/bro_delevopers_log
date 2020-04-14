import React, { SFC, memo } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Logo from './images/logo.svg'

const Header: SFC = () => {
  return (
    <StyledHeader>
      <HeaderContent>
        <LogoLink to="/">
          <StyledImg src={Logo} alt="logo" />
        </LogoLink>

        <StyledAppBar>
          <Link to="/problems">Problem solutions</Link>
          <Link to="/">Error solutions</Link>
          <Link to="/">Useful links</Link>
        </StyledAppBar>
      </HeaderContent>
    </StyledHeader>
  )
}

const HeaderContent = styled.div`
  display: flex;
  align-items: center;

  max-width: 1440px;
  width: 100%;
`

const StyledHeader = styled.header`
  display: flex;
  position: static;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 80px;

  background-color: #625772;

  transform: translateZ(0);
`

const StyledImg = styled.img`
  width: 80px;
`

const LogoLink = styled(Link)`
  margin-right: auto;
`

const StyledAppBar = styled.div`
  display: flex;
  justify-content: space-around;

  max-width: 35%;
  width: 100%;

  a {
    color: white;
    text-decoration: none;

    &:visited {
      color: white;
    }
  }
`

export default memo(Header)
