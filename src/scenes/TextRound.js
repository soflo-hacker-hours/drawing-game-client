import React, { useState } from 'react'
import { css } from 'emotion'
import AppBody from '../components/AppBody'
import Prompt from '../components/Prompt'
import TextInput from '../components/TextInput'
import Button from '../components/Button'

const TextRound = ({ imageSrc, onSend }) => {
  const [ phrase, setPhrase ] = useState('')

  return (
    <AppBody className={css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `}>
      <Prompt
        className={css`
          margin-bottom: 30px;
        `}
      >
        Guess the phrase!
      </Prompt>
      <img className={css`
        display: block;
        margin-bottom: 30px;
        height: 40%;
        max-height: 100%;
      `} src={imageSrc} />

      <TextInput size="large" value={phrase} onChange={e => setPhrase(e.target.value)} />

      <Button disabled={!phrase} className={css`
        margin-top: 30px;
      `} size="large" onClick={() => onSend(phrase)}>Send</Button>

    </AppBody>
  )
}

export default TextRound
