import React, { FC, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { androidstudio } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import styled from 'styled-components'

// get current problem action
import { getCurrentProblemFromDB } from '../../utils/Api'

// problem interface
import { IProblem } from '../../store/problemsModule'

// styled spinner component
import Spinner from '../../components/Spinner'

interface IProblemView extends RouteComponentProps<{ id: string }> {
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

  return (
    <Container>
      {pending ? (
        <Spinner />
      ) : (
        <>
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
        </>
      )}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  min-height: calc(100vh - 110px);
  min-width: 1000px;

  padding: 0 25px;

  line-height: 30px;
  font-size: 20px;
`

const Heading = styled.span`
  font-size: 25px;
  margin: 40px 0 10px 0;
`

const StyledSpan = styled.span`
  margin: 10px 0;
`

const StyledSyntaxHighlighter = styled(SyntaxHighlighter)`
  display: flex !important;

  padding: 20px !important;

  font-size: 16px;
`

interface IState {
  problems: {
    currentProblem: IProblem
    pending: boolean
  }
}

export default connect((state: IState) => ({
  currentProblem: state.problems.currentProblem,
  pending: state.problems.pending,
}))(ProblemView)
