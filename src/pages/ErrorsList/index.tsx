import React, { FC, useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'
import Pagination from 'react-js-pagination'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'

// error item interface
import { IError } from '../../store/errorsModule'

// get errors action
import { getErrorsFromDB } from '../../utils/Api'

// styled components
import Error from './components/ErrorItem'
import Spinner from '../../components/Spinner'

// items count per page constant
import { ITEMS_COUNT_PER_PAGE } from '../../utils/constants'

// helper functions
import { getQueryPage } from '../../utils/helpers'

interface IErrorList extends RouteComponentProps {
  errorList: IError[]
  allErrorsLength: number
  pending: boolean
}

const ErrorsList: FC<IErrorList> = ({ errorList, allErrorsLength, pending, history, location }) => {
  const [page, setPage] = useState(1)

  const dispatch = useDispatch()
  const getErrors = bindActionCreators(getErrorsFromDB, dispatch)

  useEffect(() => {
    const queryPage = getQueryPage(location.search)

    if (queryPage) {
      getErrors(queryPage)
      setPage(queryPage)
    } else {
      getErrors(page)
    }

    // eslint-disable-next-line
  }, [])

  const handlePaginateChange = (currentPage: number) => {
    setPage(currentPage)
    getErrors(currentPage)

    history.push({
      search: `?page=${currentPage}`,
    })
  }

  return (
    <Container>
      <Heading>Errors</Heading>

      {pending ? (
        <Spinner />
      ) : (
        <StyledList>
          {errorList.map((item, index) => {
            return (
              <Error
                key={index}
                id={item.id}
                error_heading={item.error_heading}
                error_description={item.error_description}
              />
            )
          })}
        </StyledList>
      )}

      {allErrorsLength > 5 && (
        <Pagination
          prevPageText="prev"
          nextPageText="next"
          firstPageText="first"
          lastPageText="last"
          activePage={page}
          itemsCountPerPage={ITEMS_COUNT_PER_PAGE}
          totalItemsCount={allErrorsLength}
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
  errors: {
    errorList: IError[]
    allErrorsLength: number
    pending: boolean
  }
}

export default connect((state: IState) => ({
  errorList: state.errors.errorList,
  allErrorsLength: state.errors.allErrorsLength,
  pending: state.errors.pending,
}))(ErrorsList)
