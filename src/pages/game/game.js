import React from 'react'
import { render } from 'react-dom'
import AppContainer from '../../components/AppContainer'
import Game from '../../components/Game'

const rootElement = document.getElementById('app')

render((
  <AppContainer>
    <Game />
  </AppContainer>
), rootElement)
