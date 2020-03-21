import React from 'react'
import queryString from 'query-string'
import Canvas from './Canvas'

const Game = () => {
  const queryParams = queryString.parse(window.location.search)

  if (!queryParams.id) {
    return null
  }

  return <Canvas />
}

export default Game
