import React, { useState, useCallback, createContext } from 'react'
import { css } from 'emotion'
import useCanvas from '../hooks/useCanvas'

const Canvas = () => {
  const { context, width, height, resizeRef, canvasRef } = useCanvas()
  const [ isPainting, setIsPainting ] = useState(false)
  const [ paintHistory, setPaintHistory ] = useState([])

  if (context) {
    context.lineWidth = 5
    context.lineJoin = 'round'
    context.lineCap = 'round'
    context.shadowColor = 'black'
    context.shadowBlur = 5
  }

  return (
    <div ref={resizeRef} style={{ width: '100%', height: '100%' }}>
      <button className={css`
        position: absolute;
        top: 0px;
        left: 0px;
        padding: 12px;
        z-index: 1;
      `} onClick={() => {
        // const history = [...paintHistory]
        // history.pop()

        // const image = new Image()
        // image.src = history[history.length - 1]
        // context.drawImage(image, 0, 0)

      }}>UNDO</button>
      <canvas
        ref={canvasRef}
        className={css`
          width: 100%;
          height: 100%;
          background-color: transparent;
          cursor: crosshair;
        `}
        onClick={e => {
          const { clientX, clientY, target } = e

          context.beginPath()
          context.arc(clientX - target.offsetLeft, clientY - target.offsetTop, 2.5, 0, 2 * Math.PI, false)
          context.fill()
          context.closePath()
        }}
        onMouseDown={e => {
          e.preventDefault()

          const { clientX, clientY, target } = e

          context.beginPath()
          context.moveTo(clientX - target.offsetLeft, clientY - target.offsetTop)

          setIsPainting(true)
        }}
        onMouseMove={e => {
          const { clientX, clientY, target } = e

          if (!isPainting) {
            return
          }

          context.lineTo(clientX - target.offsetLeft, clientY - target.offsetTop)
          context.stroke()
        }}
        onMouseUp={() => {
          context.closePath()

          // setPaintHistory([ ...paintHistory, canvasRef.current.toDataURL() ])

          setIsPainting(false)
        }}
      ></canvas>
    </div>
  )
}

Canvas.propTypes = {}

Canvas.defaultProps = {}

export default Canvas
