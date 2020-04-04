import React from 'react'
import Audio from './Audio'
import elevatorMusic from '../assets/elevator_music.mp3'

export default { title: 'Components/Audio' }

export const ElevatorMusic = () => <Audio src={elevatorMusic} loop autoPlay showToggle />
