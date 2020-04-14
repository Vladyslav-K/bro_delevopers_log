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
    <Container onClick={() => handleClick(id)}>
      <Heading> {problem_heading} </Heading>
      <Line />
      <Description> {problem_description} </Description>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin: 15px;
  padding: 10px;

  border: 2px solid #a598b9;
  border-radius: 10px;

  line-height: 30px;
  cursor: pointer;
  color: #625772;
`

const Heading = styled.span`
  font-size: 35px;
  margin-bottom: 10px;
`

const Description = styled.span`
  font-size: 25px;
`

const Line = styled.hr`
  width: 100%;
  border-color: #a598b9;
`

export default memo(ProblemItem)
