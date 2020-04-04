import React, { useState, useRef, useEffect } from 'react'

const Audio = ({ src, showToggle, volume, ...props }) => {
  const [ isPlaying, setIsPlaying ] = useState(true)
  const audioRef = useRef(null)

  useEffect(() => {
    const audio = audioRef.current
    audio.volume = 0.03
  }, [])

  if (audioRef.current) {
    if (isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }

  return (
    <>
      <audio ref={audioRef} {...props}>
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      {!showToggle ? null : (
        <div>
          <button onClick={() => setIsPlaying(!isPlaying)}>toggle</button>
        </div>
      )}
    </>
  )
}

export default Audio
