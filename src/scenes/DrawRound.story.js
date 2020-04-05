import React from 'react'
import DrawRound from './DrawRound'

export default { title: 'Scenes/Draw Round' }

export const Default = () => (
  <div style={{ height: '100vh' }}>
    <DrawRound phrase="hold on to your butts" onSend={() => {}} />
  </div>
)
