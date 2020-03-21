import React from 'react'
import styled from '@emotion/styled'
import { css, cx } from 'emotion'
import { Link } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid'

const StyledDiv = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Home = () => {
  const gameId = uuidv4()

  return (
    <StyledDiv>
      <Link to={`/?id=${gameId}`} className={css`
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
      </Link>
    </StyledDiv>
  )
}

export default Home
