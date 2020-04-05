import React from 'react'
import Lobby from './Lobby'

const players = [
  {
    name: 'Jamie',
    avatar: 'hillary',
    color: '#88ed00',
  },
  {
    name: 'Matthew',
    avatar: 'danny',
    color: '#ff6a09',
  },
  {
    name: 'Alex',
    avatar: 'ethan',
    color: '#f6efa3',
  },
]

export default { title: 'Scenes/Lobby' }

export const AsPlayer = () => (
  <div style={{ height: '100vh' }}>
    <Lobby
      players={players}
      gameCode="S9FF5M"
    />
  </div>
)

export const AsHost = () => (
  <div style={{ height: '100vh' }}>
    <Lobby
      players={players}
      gameCode="S9FF5M"
      isHost
    />
  </div>
)
