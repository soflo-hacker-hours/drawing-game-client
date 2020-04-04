import React, { useState } from 'react'
import { css } from 'emotion'
import AppBody from '../components/AppBody'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import Prompt from '../components/Prompt'

const Join = ({ onJoin }) => {
  const [ name, setName ] = useState(name)

  return (
    <AppBody className={css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      p {
        text-align: center;
        margin-bottom: 30px;
      }

      p + p {
        margin-top: -20px;
      }
    `}>
        <Prompt>You're almost ready to join the game!</Prompt>
        <Prompt>Just type your name and choose your avatar.</Prompt>

        <TextInput
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Enter your name"
          size="large"
        />
        <Button
          className={css`
            margin-top: 30px;
          `}
          size="large"
          disabled={!name}
          onClick={() => onJoin(name)}
        >
          Join
        </Button>
    </AppBody>
  )
}

export default Join
