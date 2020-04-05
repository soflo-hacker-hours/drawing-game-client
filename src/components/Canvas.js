import React, { useState } from 'react'
import { css } from 'emotion'
import useCanvas from '../hooks/useCanvas'

const Canvas = ({ onDraw }) => {
  const { context, top, left, resizeRef, canvasRef } = useCanvas()
  const [ isPainting, setIsPainting ] = useState(false)

  if (context) {
    context.lineWidth = 5
    context.lineJoin = 'round'
    context.lineCap = 'round'
    context.shadowColor = 'black'
    context.shadowBlur = 5
  }

  return (
    <div ref={resizeRef} style={{ width: '100%', height: '100%' }}>
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
          context.arc(clientX - left, clientY - top, 2.5, 0, 2 * Math.PI, false)
          context.fill()
          context.closePath()
        }}
        onMouseDown={e => {
          e.preventDefault()

          const { clientX, clientY, target } = e

          context.beginPath()
          context.moveTo(clientX - left, clientY - top)

          setIsPainting(true)
        }}
        onMouseMove={e => {
          const { clientX, clientY, target } = e

          if (!isPainting) {
            return
          }

          context.lineTo(clientX - left, clientY - top)
          context.stroke()
        }}
        onMouseUp={() => {
          context.closePath()

          setIsPainting(false)
          onDraw(canvasRef.current)
        }}
        onMouseLeave={() => {
          context.closePath()

          setIsPainting(false)
          onDraw(canvasRef.current)
        }}
      ></canvas>
    </div>
  )
}

Canvas.propTypes = {}

Canvas.defaultProps = {}

export default Canvas
