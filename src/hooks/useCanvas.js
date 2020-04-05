import { useRef, useEffect, useState } from 'react'

const useCanvas = () => {
  const [canvas, setCanvas] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    ratio: 1,
    context: null,
  })
  const resizeObserver = useRef(null)
  const canvasRef = useRef(null)
  const resizeRef = useRef(null)

  useEffect(() => {
    const context = canvasRef.current.getContext('2d', { alpha: true })
    const devicePixelRatio = window.devicePixelRatio || 1
    const backingStoreRatio =
      context.webkitBackingStorePixelRatio ||
      context.mozBackingStorePixelRatio ||
      context.msBackingStorePixelRatio ||
      context.oBackingStorePixelRatio ||
      context.backingStorePixelRatio ||
      1

    const ratio = devicePixelRatio / backingStoreRatio

    resizeObserver.current = new ResizeObserver(entries => {
      const { width, height } = entries[0].contentRect
      const { current } = canvasRef
      const { top, left } = current.getBoundingClientRect()

      current.width = width * ratio
      current.height = height * ratio
      current.style.width = `${width}px`
      current.style.height = `${height}px`
      context.scale(ratio, ratio)

      setCanvas({
        top,
        left,
        width,
        height,
        ratio,
        context,
      })
    })

    resizeObserver.current.observe(resizeRef.current)

    return () => {
      if (resizeObserver.current) {
        resizeObserver.current.disconnect()
      }
    }
  }, [resizeRef])

  return {
    ...canvas,
    canvasRef,
    resizeRef,
  }
}

export default useCanvas
