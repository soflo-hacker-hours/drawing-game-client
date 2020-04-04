import React from 'react'
import { render } from 'react-dom'
import AppContainer from '../../components/AppContainer'
import GameController from '../../controllers/GameController'

const rootElement = document.getElementById('app')

render((
  <AppContainer>
    <GameController />
  </AppContainer>
), rootElement)
