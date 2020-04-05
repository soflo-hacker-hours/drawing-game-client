import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { css } from 'emotion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import AppBody from '../components/AppBody'
import PortraitFrame from '../components/PortraitFrame'
import Prompt from '../components/Prompt'
import Avatar from '../components/Avatar'
import Button from '../components/Button'
import WaitingMessage from '../components/WaitingMessage'
import assets from '../assets'
import { colors } from '../theme'

const StyledUl = styled.ul`
  list-style: none;
`

const StyledLi = styled.li`
  display: inline-block;
  margin: 12px;
`

const Lobby = ({ players, gameCode, isHost }) => {
  return (
    <AppBody className={css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `}>

      <WaitingMessage />

      <Prompt
        className={css`
          margin-bottom: 30px;
          margin-top: 10px;
        `}
        size="medium"
      >
        Share game code: <span style={{userSelect: 'all'}}>{gameCode}</span>
      </Prompt>

      <StyledUl>
        {players.map(player => (
          <StyledLi key={player.name}>
            <h4
              className={css`
                font-size: 18px;
                text-align: center;
                color: ${colors.gameAquaDark};
              `}
            >
              {player.name}
            </h4>
            <PortraitFrame width={100} height={100} top={10} color={player.color}>
              <Avatar src={assets[player.avatar]} />
            </PortraitFrame>
          </StyledLi>
        ))}
      </StyledUl>

      {!isHost ? null : (
        <Button className={css`
          margin-top: 30px;
        `}>Start Game</Button>
      )}

    </AppBody>
  )
}

Lobby.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object),
  gameCode: PropTypes.string,
}

Lobby.defaultProps = {
  players: [],
  gameCode: '',
}

export default Lobby
