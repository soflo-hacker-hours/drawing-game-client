import React, { useState } from 'react'
import { css } from 'emotion'
import AppBody from '../components/AppBody'
import Prompt from '../components/Prompt'
import TextInput from '../components/TextInput'
import Button from '../components/Button'

const PhraseRound = ({ onSend }) => {
  const [ phrase, setPhrase ] = useState('')

  return (
    <AppBody className={css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `}>
      <Prompt>Enter a phrase! Make sure it's unique.</Prompt>
      <Prompt className={css`
        margin-bottom: 30px;
      `}>When you're ready, hit send.</Prompt>
      <TextInput className={css`
        width: 100%;
        max-width: 520px;
      `} placeholder="example: hold on to your butts" size="large" value={phrase} onChange={e => setPhrase(e.target.value)} />
      <Button
        disabled={!phrase}
        size="large"
        onClick={() => onSend(phrase)}
        className={css`
          margin-top: 30px;
        `}
      >
        Send
      </Button>
    </AppBody>
  )
}

export default PhraseRound
