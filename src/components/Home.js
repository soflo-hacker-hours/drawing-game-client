import React from 'react'
import { css, cx } from 'emotion'
import AppContainer from './AppContainer'
import AppBody from './AppBody'
import { v4 as uuidv4 } from 'uuid'

const Home = () => {
  const gameId = uuidv4()

  return (
    <AppContainer>
      <AppBody className={css`
        display: flex;
        align-items: center;
        justify-content: center;
      `}>
        <a href={`/game.html?id=${gameId}`} className={css`
          background: #228DFF;
          border: none;
          color: #fff;
          font-family: 'Fredoka One', cursive;
          font-size: 24px;
          padding: 14px 20px;
          border-radius: 6px;
          cursor: pointer;
          transition: all 80ms ease-in-out;
          text-decoration: none;

          &:focus {
            outline: 0;
          }

          &:hover {
            background: #49a1ff;
            box-shadow: 0px 0px 3px 1px #98caff;
          }
        `}>
          New Game Who Dis
        </a>
      </AppBody>
    </AppContainer>
  )
}

export default Home
