import React, { FC, useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'
import styled from 'styled-components'

import SyntaxHighlighter from 'react-syntax-highlighter'
import { androidstudio } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import { getCurrentErrorFromDB } from '../../utils/Api'
import { IError } from '../../store/errorsModule'

import Spinner from '../../components/Spinner'

interface IErrorView extends RouteComponentProps<{ id: string }> {
  currentError: IError
}

const ErrorView: FC<IErrorView> = ({ match, currentError }) => {
  const dispatch = useDispatch()
  const { error_heading, error_description, error_solution, error_code } = currentError

  useEffect(() => {
    dispatch(getCurrentErrorFromDB(match.params.id))

    // eslint-disable-next-line
  }, [])

  if (!currentError.id) {
    return <Spinner />
  }

  return (
    <Container>
      <Heading>Error: {error_heading} </Heading>

      <StyledSpan>Description: {error_description} </StyledSpan>

      <StyledSpan>Solution: {error_solution} </StyledSpan>

      {error_code && (
        <>
          <StyledSpan>Code:</StyledSpan>
          <StyledSyntaxHighlighter showLineNumbers style={androidstudio}>
            {error_code}
          </StyledSyntaxHighlighter>
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
  errors: {
    currentError: IError
  }
}

export default connect((state: IState) => ({
  currentError: state.errors.currentError,
}))(ErrorView)
