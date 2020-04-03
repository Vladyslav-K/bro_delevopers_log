import React, { SFC, memo } from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

// pages
import MainPage from './MainPage'
import LinkPage from './LinkPage'
import ErrorPage from './ErrorPage'
import ProblemPage from './ProblemPage'

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
        </Switch>
      </MainContainer>
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

const MainContainer = styled.main`
  max-width: 1440px;
  margin: auto;
`

export default memo(App)
