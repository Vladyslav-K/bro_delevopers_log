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

const StyledFooter = styled.footer`
  display: flex;
  flex: 0 0 auto;
  position: static;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 40px;

  color: white;
  background-color: #444;

  transform: translateZ(0);

  user-select: none;
`

const FooterContent = styled.div`
  display: flex;
  justify-content: center;

  max-width: 1440px;
  width: 100%;
`

const SmallText = styled.span`
  font-size: 10px;
`

export default Footer
