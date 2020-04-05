import React, { useState } from 'react'
import { css } from 'emotion'
import { colors } from '../theme'
import AppBody from '../components/AppBody'
import Prompt from '../components/Prompt'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import PortraitFrame from '../components/PortraitFrame'

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
      <div
        className={css`
          border: 3px solid ${colors.gameAqua};
          border-radius: 6px;
          height: 40%;
          max-height: 100%;
          margin-bottom: 30px;
        `}
      >
        <img
          className={css`
            height: 100%;
            display: block;
          `}
          src={imageSrc}
        />
      </div>

      <TextInput placeholder="Enter your guess here" size="large" value={phrase} onChange={e => setPhrase(e.target.value)} />

      <Button disabled={!phrase} className={css`
        margin-top: 30px;
      `} size="large" onClick={() => onSend(phrase)}>Send</Button>

    </AppBody>
  )
}

export default TextRound
