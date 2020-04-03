import React, { SFC } from 'react'
import styled from 'styled-components'

const Footer: SFC = () => {
  return (
    <StyledFooter>
      <FooterContent>
        <span>
          Bugs Don't Meet Us* <SmallText>*(almost)</SmallText>
        </span>
      </FooterContent>
    </StyledFooter>
  )
}

const FooterContent = styled.div`
  display: flex;
  justify-content: center;

  max-width: 1440px;
  width: 100%;
`

const StyledFooter = styled.footer`
  display: flex;
  position: static;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 50px;

  color: white;
  background-color: #625772;

  transform: translateZ(0);
`

const SmallText = styled.span`
  font-size: 10px;
`

export default Footer
