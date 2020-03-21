import React from 'react'
import styled from '@emotion/styled'
import AppHeader from './AppHeader'
import AppBody from './AppBody'
import Canvas from './Canvas'
import Game from './Game'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

const StyledDiv = styled.div`
  height: 100%;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
`

const App = () => {
  return (
    <Router>
      <StyledDiv>
        <AppHeader />
        <AppBody>
          <Switch>
            <Route exact path="/" component={Game} />
          </Switch>
        </AppBody>
      </StyledDiv>
    </Router>
  )
}

export default App
