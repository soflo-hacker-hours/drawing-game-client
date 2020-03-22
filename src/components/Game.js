import React from 'react'
import queryString from 'query-string'
import LoadingScene from './LoadingScene'
import useGame, { scenes } from '../hooks/useGame'

const Game = () => {
  const { id } = queryString.parse(window.location.search)
  const { state, actions } = useGame(id)

  let renderBody = null

  switch (state.scene) {
    case scenes.loading:
      renderBody = <LoadingScene />
      break
  }

  return renderBody
}

export default Game
