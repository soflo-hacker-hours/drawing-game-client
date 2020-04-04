import React from 'react'
import { css } from 'emotion'
import AppBody from '../components/AppBody'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const LoadingScene = () => {
  return (
    <AppBody className={css`
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      p {
        font-size: 28px;
        color: #228DFF;
        text-shadow: 0px 0px 3px #88DFFF;
        margin-bottom: 20px;
      }
    `}>
      <p>hold on to your butts</p>
      <FontAwesomeIcon icon={faSpinner} spin size="5x" color="#88DFFF" />
    </AppBody>
  )
}

export default LoadingScene
