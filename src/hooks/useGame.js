import { useState, useEffect } from 'react'
import { debug } from '../services/api'

const scenes = {
  loading: 'LOADING',
  join: 'JOIN',
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

  useEffect(() => {
    const getInitialState = async () => {
      const state = await debug('JOIN_GAME_PROMPT')
      if (state.hasOwnProperty('name')) {
        setGameState({
          ...gameState,
          scene: scenes.join,
        })
      } else if (state.players) {
        setGameState({
          ...gameState,
          scene: scenes.lobby,
        })
      }
    }

    getInitialState()
  }, [])

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
      createNewPlayer: async () => {
        setGameState({
          ...gameState,
          scene: scenes.loading,
        })

        const joinResponse = await debug('DID_JOIN_GAME')

        setGameState({
          ...gameState,
          scene: scenes.lobby,
        })
      },
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
