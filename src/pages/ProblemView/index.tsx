import React, { FC, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { androidstudio } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import styled from 'styled-components'

import { getCurrentProblemFromDB } from '../../utils/Api'
import { IProblem } from '../../store/problemsModule'

import Spinner from '../../components/Spinner'

type IDType = { id: string }

interface IProblemView extends RouteComponentProps<IDType> {
  currentProblem: IProblem
  pending: boolean
}

const ProblemView: FC<IProblemView> = ({ match, currentProblem, pending }) => {
  const dispatch = useDispatch()
  const { problem_heading, problem_description, problem_solution, problem_code } = currentProblem

  useEffect(() => {
    dispatch(getCurrentProblemFromDB(match.params.id))
    // eslint-disable-next-line
  }, [])

  if (pending) {
    return <Spinner />
  }

  return (
    <Container>
      <Heading>Problem: {problem_heading} </Heading>

      <StyledSpan>Description: {problem_description} </StyledSpan>

      <StyledSpan>Solution: {problem_solution} </StyledSpan>

      {problem_code && (
        <>
          <StyledSpan>Code:</StyledSpan>
          <StyledSyntaxHighlighter showLineNumbers style={androidstudio}>
            {problem_code}
          </StyledSyntaxHighlighter>
        </>
      )}
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
  font-size: 25px;
  color: #625772;
`

const Heading = styled.span`
  font-size: 35px;
  margin: 20px 0;
`

const StyledSpan = styled.span`
  margin: 20px 0;
`

const StyledSyntaxHighlighter = styled(SyntaxHighlighter)`
  display: flex !important;

  padding: 20px !important;

  font-size: 18px;
`

interface IState {
  problems: {
    currentProblem: IProblem
    pending: boolean
  }
}

export default connect(
  (state: IState) => ({
    currentProblem: state.problems.currentProblem,
    pending: state.problems.pending,
  }),
  null,
)(ProblemView)
