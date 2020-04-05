import React from 'react'
import DrawRound from './DrawRound'

export default { title: 'Scenes/Draw Round' }

export const Default = () => (
  <div style={{ height: '100vh' }}>
    <DrawRound phrase="The brown fox jumps over the lazy dog" onSend={() => {}} />
  </div>
)
