import React from 'react'
import { css } from 'emotion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import Prompt from '../components/Prompt'
import { colors } from '../theme'

const WaitingMessage = () => {
  return (
    <div className={css`
      display: flex;
    `}>
      <Prompt>Waiting on other players...</Prompt>
      <FontAwesomeIcon  className={css`
        margin-left: 20px;
      `} icon={faSpinner} spin size="2x" color={colors.gameAqua} />
    </div>
  )
}

export default WaitingMessage
