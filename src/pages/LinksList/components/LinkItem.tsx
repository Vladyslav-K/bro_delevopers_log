import React, { SFC, memo } from 'react'
import styled from 'styled-components'

interface IErrorItem {
  link_path: string
  link_description: string
}

const ErrorItem: SFC<IErrorItem> = ({ link_path, link_description }) => {
  return (
    <Container>
      <HeadingContainer>
        <Heading>
          Link: <Link href={link_path}> {link_path} </Link>
        </Heading>
      </HeadingContainer>

      <Description> {link_description} </Description>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  margin: 15px 0;

  line-height: 25px;
`

const Heading = styled.span`
  user-select: none;

  & a {
    user-select: auto;
  }
`

const Link = styled.a`
  max-width: 85%;

  color: white;
  text-decoration: none;

  border-bottom: 2px solid white;

  &:visited {
    color: white;
  }
`

const HeadingContainer = styled.div`
  display: flex;
  align-items: center;

  padding: 10px;

  border-top-right-radius: 10px;
  border-top-left-radius: 10px;

  font-size: 20px;
  color: white;

  background: #444;
`

const Description = styled.span`
  padding: 10px;

  border: 2px solid black;

  font-size: 18px;
`

export default memo(ErrorItem)
