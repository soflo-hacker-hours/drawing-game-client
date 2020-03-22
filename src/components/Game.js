import React from 'react'
import queryString from 'query-string'
import LoadingScene from './LoadingScene'
import JoinScene from './JoinScene'
import useGame, { scenes } from '../hooks/useGame'

const Game = () => {
  const { id } = queryString.parse(window.location.search)
  const { state, actions } = useGame(id)

  let renderBody = null
  switch (state.scene) {
    case scenes.loading:
      renderBody = <LoadingScene />
      break
    case scenes.join:
      renderBody = <JoinScene submitName={actions.createNewPlayer} />
      break
  }

  return renderBody
}

export default Game
