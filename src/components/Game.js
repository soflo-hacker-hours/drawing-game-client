import React from 'react'
import queryString from 'query-string'
import Home from './Home'
import Canvas from './Canvas'

const Game = ({ location: { search } }) => {
  const queryParams = queryString.parse(search)

  if (!queryParams.id) {
    return <Home />
  }

  return <Canvas />
}

export default Game
