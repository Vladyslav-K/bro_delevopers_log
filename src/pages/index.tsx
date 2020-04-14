import React, { SFC, memo } from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

// registration pages
import MainPage from './MainPage'
import LinkPage from './LinkPage'
import ErrorPage from './ErrorPage'
import ProblemPage from './ProblemPage'

// list pages
import ProblemsList from './ProblemsList'

// view pages
import ProblemView from './ProblemView'

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
          <Route exact path="/error-solution" component={ErrorPage} />
          <Route exact path="/problem-solution" component={ProblemPage} />
          <Route exact path="/problems" component={ProblemsList} />
          <Route exact path="/problems/:id" component={ProblemView} />
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
  flex: 1 0 auto;
  max-width: 1440px;

  margin: 0 auto;
`

export default memo(App)
