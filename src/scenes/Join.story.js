import React from 'react'
import Join from './Join'

export default { title: 'Scenes/Join' }

export const Default = () => (
  <div style={{height: '100vh'}}>
    <Join onJoin={name => {
      console.log(`${name} joined!`)
    }} />
  </div>
)
