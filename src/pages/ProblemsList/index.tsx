import React, { SFC, memo, Dispatch, useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { IProblem } from '../../store/problemsModule'
import { getProblemsFromDB } from '../../utils/Api'

import ProblemItem from './components/ProblemItem'
import Spinner from '../../components/Spinner'

interface IProblemList {
  getProblemList: () => void
  problemList: IProblem[]
  pending: boolean
}

const ProblemsList: SFC<IProblemList> = ({ getProblemList, problemList, pending }) => {
  useEffect(() => {
    getProblemList()
    // eslint-disable-next-line
  }, [])

  if (pending) {
    return <Spinner />
  }

  return (
    <Container>
      <Heading>Problems</Heading>

      <StyledList>
        {problemList.map((item, index) => {
          return (
            <ProblemItem
              key={index}
              id={item.id}
              problem_heading={item.problem_heading}
              problem_description={item.problem_description}
            />
          )
        })}
      </StyledList>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledList = styled.div`
  display: flex;
  flex-direction: column;

  min-height: calc(100vh - 260px);
  max-width: 800px;
  height: 100%;
  width: 100%;
`

const Heading = styled.span`
  font-size: 40px;
  color: #625772;

  margin: 30px 0;
`

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    getProblemList: () => dispatch(getProblemsFromDB()),
  }
}

interface IState {
  problems: {
    problemList: IProblem[]
    pending: boolean
  }
}

export default connect(
  (state: IState) => ({
    problemList: state.problems.problemList,
    pending: state.problems.pending,
  }),
  mapDispatchToProps,
)(memo(ProblemsList))
