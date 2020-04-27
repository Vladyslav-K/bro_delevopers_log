import React, { SFC, memo } from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

// registration pages
import MainPage from '../pages/MainPage'
import LinkPage from '../pages/LinkPage'
import ErrorPage from '../pages/ErrorPage'
import ProblemPage from '../pages/ProblemPage'

// list pages
import ProblemsList from '../pages/ProblemsList'
import ErrorsList from '../pages/ErrorsList'
import LinksList from '../pages/LinksList'

// view pages
import ProblemView from '../pages/ProblemView'
import ErrorView from '../pages/ErrorView'

// header and footer components
import Header from '../pages/common/Header'
import Footer from '../pages/common/Footer'

const App: SFC = () => {
  return (
    <Wrapper>
      <Header />
      <MainContainer>
        <Switch>
          <Route exact path="/" component={MainPage} />

          <Route exact path="/add-link" component={LinkPage} />
          <Route exact path="/links" component={LinksList} />

          <Route exact path="/error-solution" component={ErrorPage} />
          <Route exact path="/errors/:id" component={ErrorView} />
          <Route exact path="/errors" component={ErrorsList} />

          <Route exact path="/problem-solution" component={ProblemPage} />
          <Route exact path="/problems/:id" component={ProblemView} />
          <Route exact path="/problems" component={ProblemsList} />
        </Switch>
      </MainContainer>

      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
`

const MainContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 0 auto;

  max-width: 1200px;
  width: 100%;

  margin: 0 auto;
`

export default memo(App)
