import React, { SFC, memo, useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import Pagination from 'react-js-pagination'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'

// problem item interface
import { IProblem } from '../../store/problemsModule'

// get problems action
import { getProblemsFromDB } from '../../utils/Api'

// styled components
import ProblemItem from './components/ProblemItem'
import Spinner from '../../components/Spinner'

// items count per page constant
import { ITEMS_COUNT_PER_PAGE } from '../../utils/constants'

interface IProblemList {
  problemList: IProblem[]
  allProblemsLength: number
  pending: boolean
}

const ProblemsList: SFC<IProblemList> = ({ problemList, allProblemsLength, pending }) => {
  const [page, setPage] = useState(1)

  const dispatch = useDispatch()
  const getProblems = bindActionCreators(getProblemsFromDB, dispatch)

  useEffect(() => {
    getProblems(page)
    // eslint-disable-next-line
  }, [])

  const handlePaginateChange = (page: number) => {
    getProblems(page)
    setPage(page)
  }

  return (
    <Container>
      <Heading>Problems</Heading>

      {pending ? (
        <Spinner />
      ) : (
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
      )}

      {allProblemsLength > 5 && (
        <Pagination
          prevPageText="prev"
          nextPageText="next"
          firstPageText="first"
          lastPageText="last"
          activePage={page}
          itemsCountPerPage={ITEMS_COUNT_PER_PAGE}
          totalItemsCount={allProblemsLength}
          onChange={handlePaginateChange}
        />
      )}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  min-height: calc(100vh - 110px);
  width: 100%;

  padding: 0 25px;
`

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  max-width: 900px;
  height: 100%;
  width: 100%;
`

const Heading = styled.span`
  font-size: 30px;
  margin: 30px 0;
`

interface IState {
  problems: IProblemList
}

export default connect((state: IState) => ({
  problemList: state.problems.problemList,
  allProblemsLength: state.problems.allProblemsLength,
  pending: state.problems.pending,
}))(memo(ProblemsList))
