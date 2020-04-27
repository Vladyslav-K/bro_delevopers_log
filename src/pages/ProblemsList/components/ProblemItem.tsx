import React, { SFC, memo } from 'react'
import { push } from 'connected-react-router'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

interface IProblemItem {
  problem_heading: string
  problem_description: string
  id: string
}

const ProblemItem: SFC<IProblemItem> = ({ problem_heading, problem_description, id }) => {
  const dispatch = useDispatch()

  const handleClick = (id: string) => {
    dispatch(push(`/problems/${id}`))
  }
  return (
    <Container>
      <HeadingContainer>
        <Heading> {problem_heading} </Heading>

        <ViewLink onClick={() => handleClick(id)}>View</ViewLink>
      </HeadingContainer>

      <Description> {problem_description} </Description>
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
  max-width: 85%;
`

const ViewLink = styled.span`
  user-select: none;
  cursor: pointer;
  border-bottom: 2px solid white;
`

const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
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

  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;

  font-size: 18px;
`

export default memo(ProblemItem)
