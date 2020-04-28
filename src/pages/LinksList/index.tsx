import React, { FC, useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'
import Pagination from 'react-js-pagination'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'

// link item interface
import { ILink } from '../../store/linksModule'

// get links action
import { getLinksFromDB } from '../../utils/Api'

// styled components
import Link from './components/LinkItem'
import Spinner from '../../components/Spinner'

// items count per page constant
import { ITEMS_COUNT_PER_PAGE } from '../../utils/constants'

// helper functions
import { getQueryPage } from '../../utils/helpers'

interface ILinkList extends RouteComponentProps {
  linkList: ILink[]
  allLinksLength: number
  pending: boolean
}

const LinksList: FC<ILinkList> = ({ linkList, allLinksLength, pending, history, location }) => {
  const [page, setPage] = useState(1)

  const dispatch = useDispatch()
  const getLinks = bindActionCreators(getLinksFromDB, dispatch)

  useEffect(() => {
    const queryPage = getQueryPage(location.search)

    if (queryPage) {
      getLinks(queryPage)
      setPage(queryPage)
    } else {
      getLinks(page)
    }
    // eslint-disable-next-line
  }, [])

  const handlePaginateChange = (currentPage: number) => {
    setPage(currentPage)
    getLinks(currentPage)

    history.push({
      search: `?page=${currentPage}`,
    })
  }

  return (
    <Container>
      <Heading>Links</Heading>

      {pending ? (
        <Spinner />
      ) : (
        <StyledList>
          {linkList.map((item, index) => {
            return <Link key={index} link_path={item.link_path} link_description={item.link_description} />
          })}
        </StyledList>
      )}

      {allLinksLength > 5 && (
        <Pagination
          prevPageText="prev"
          nextPageText="next"
          firstPageText="first"
          lastPageText="last"
          activePage={page}
          itemsCountPerPage={ITEMS_COUNT_PER_PAGE}
          totalItemsCount={allLinksLength}
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
  links: {
    linkList: ILink[]
    allLinksLength: number
    pending: boolean
  }
}

export default connect((state: IState) => ({
  linkList: state.links.linkList,
  allLinksLength: state.links.allLinksLength,
  pending: state.links.pending,
}))(LinksList)
