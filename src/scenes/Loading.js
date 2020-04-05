import React from 'react'
import { css } from 'emotion'
import AppBody from '../components/AppBody'
import Prompt from '../components/Prompt'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { colors } from '../theme'

const LoadingScene = () => {
  return (
    <AppBody className={css`
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    `}>
      <Prompt
        className={css`
          margin-bottom: 20px;
        `}
      >
        hold on to your butts
      </Prompt>
      <FontAwesomeIcon icon={faSpinner} spin size="5x" color={colors.gameAqua} />
    </AppBody>
  )
}

export default LoadingScene
