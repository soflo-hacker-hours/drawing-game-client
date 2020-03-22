import { useState } from 'react'

const scenes = {
  loading: 'LOADING',
  noGame: 'NO_GAME',
  lobby: 'LOBBY',
  captionRound: 'CAPTION_ROUND',
  imageRound: 'IMAGE_ROUND',
  end: 'END',
}

const useGameState = (id, player) => {
  const [ gameState, setGameState ] = useState({
    id,
    player,
    scene: scenes.loading,
    isHost: false,
    players: [],
  })

  return {
    state: gameState,
    actions: {
      setIsLoading: bool => {
        setGameState({
          ...gameState,
          isLoading: bool !== undefined ? !!bool : !gameState.isLoading,
        })

        return gameState
      },
      createNewGame: () => {
        setGameState({
          ...gameState,
          isHost: true,
        })

        return gameState
      },
      createNewPlayer: () => {},
      setPlayers: players => {
        setGameState({
          ...gameState,
          players,
        })
      },
    }
  }
}

export { scenes }
export default useGameState
