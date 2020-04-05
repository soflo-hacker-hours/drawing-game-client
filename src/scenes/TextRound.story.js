import React from 'react'
import TextRound from './TextRound'
import demoImage from '../services/demoImage.json'

export default { title: 'Scenes/Text Round' }

export const Default = () => (
  <div style={{ height: '100vh' }}>
    <TextRound onSend={() => {}} imageSrc={demoImage.src} />
  </div>
)
