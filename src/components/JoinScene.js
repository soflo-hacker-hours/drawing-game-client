import React, { useState } from 'react'
import { css } from 'emotion'
import AppBody from './AppBody'

const JoinScene = ({ submitName }) => {
  const [ name, setName ] = useState('')

  const text = name ? 'There you go, good job. Now hurry up.' : 'Type your name. Go ahead, type it.'

  return (
    <AppBody className={css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .container {
        max-width: 520px;
        text-align: center;

        div {
          display: inline-block;
        }
      }

      p {
        text-align: center;
        font-size: 28px;
        color: #228DFF;
        text-shadow: 0px 0px 3px #88DFFF;
        margin-bottom: 20px;
      }

      input, button {
        height: 42px;
        font-size: 24px;
        line-height: 42px;
        vertical-align: middle;
        padding: 0px 12px;
      }

      input {
        border-radius: 4px 0px 0px 4px;
        border: 1px solid #228DFF;
      }

      button {
        border-radius: 0px 4px 4px 0px;
        background-color: #228DFF;
        color: #FFFFFF;
        border: none;
        cursor: pointer;

        &:disabled {
          opacity: 0.5;
        }
      }
    `}>
      <div className="container">
        <p>{text}</p>
        <div>
          <input type="text" onChange={e => setName(e.target.value)} />
          <button disabled={!name} onClick={() => submitName(name)}>Join</button>
        </div>
      </div>
    </AppBody>
  )
}

export default JoinScene
