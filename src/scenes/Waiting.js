import React from 'react'
import { css } from 'emotion'
import AppBody from '../components/AppBody'
import Prompt from '../components/Prompt'
import WaitingMessage from '../components/WaitingMessage'

const Waiting = () => {
  return (
    <AppBody className={css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `}>
      <Prompt>Thanks!</Prompt>
      <WaitingMessage />
    </AppBody>
  )
}

export default Waiting
