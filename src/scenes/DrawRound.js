import React, { useState } from 'react'
import { css } from 'emotion'
import styled from '@emotion/styled'
import { faPencilAlt, faEraser, faCircle } from '@fortawesome/free-solid-svg-icons'
import { colors } from '../theme'
import AppBody from '../components/AppBody'
import Canvas from '../components/Canvas'
import Prompt from '../components/Prompt'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import CanvasTool from '../components/CanvasTool'

const StyledCanvasDiv = styled.div`
  border: 8px solid ${colors.gameAqua};
  border-radius: 16px;
  height: 300px;
  max-height: 100%;
  width: 600px;
  max-width: 100%;
  position: relative;
`

const DrawRound = ({ phrase, onSend }) => {
  const [ canvasNode, setCanvasNode ] = useState(null)
  const [ isAdditionMode, setIsAdditionMode ] = useState(true)
  const [ penSize, setPenSize ] = useState(4)

  return (
    <AppBody
      className={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      `}
    >

      <Prompt
        className={css`
          margin-top: 30px;
        `}
      >
        Draw the following phrase:
      </Prompt>

      <TextInput
        disabled
        size="large"
        className={css`
          margin: 10px 0px 30px;
          width: 600px;
          max-width: 100%;
        `}
        value={phrase}
        onChange={() => {}}
      />

      <div
        className={css`
          display: flex;
          align-items: left;
          margin-bottom: 10px;
        `}
      >
        <CanvasTool size="2x" isActive={isAdditionMode} icon={faPencilAlt} onClick={() => setIsAdditionMode(true)} />
        <CanvasTool size="2x" isActive={!isAdditionMode} icon={faEraser} onClick={() => setIsAdditionMode(false)} />

        <div
          className={css`
            display: flex;
            align-items: left;
            margin-left: 30px;
          `}
        >
          <CanvasTool size="1x" isActive={penSize === 2} icon={faCircle} onClick={() => setPenSize(2)} />
          <CanvasTool size="2x" isActive={penSize === 4} icon={faCircle} onClick={() => setPenSize(4)} />
          <CanvasTool size="3x" isActive={penSize === 8} icon={faCircle} onClick={() => setPenSize(8)} />
        </div>
      </div>

      <StyledCanvasDiv>
        <Canvas lineWidth={penSize} color={isAdditionMode ? colors.gameAquaDark : colors.white} onDraw={setCanvasNode} />
      </StyledCanvasDiv>

      <Prompt
        className={css`
          margin-top: 30px;
        `}
      >
        When you are done, click send!
      </Prompt>

      <Button
        disabled={!canvasNode}
        className={css`
          margin: 30px 0px;
        `}
        size="large"
        onClick={() => {
          onSend(canvasNode.toDataURL())
        }}
      >
        Send
      </Button>
    </AppBody>
  )
}

export default DrawRound
