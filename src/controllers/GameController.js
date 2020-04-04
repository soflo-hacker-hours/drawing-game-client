import React from 'react'
import queryString from 'query-string'
import LoadingScene from '../components/LoadingScene'
import JoinScene from '../components/JoinScene'
import useGame, { scenes } from '../hooks/useGame'

const GameController = () => {
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

export default GameController
