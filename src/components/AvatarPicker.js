import React, { useState } from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import Avatar from './Avatar'
import Button from './Button'
import PortraitFrame from './PortraitFrame'
import { colors } from '../theme'
import {
  harold,
  danny,
  ethan,
  joel,
  kanye,
  sam,
  steve,
  hillary,
} from '../assets'

const StyledContainerDiv = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
`

const StyledUl = styled.ul`
  list-style: none;
  display: grid;
  grid-auto-flow: column;
  transition: transform 150ms ease-in-out;
`

const StyledLi = styled.li`
  height: 100%;
  flex: 0;
`

const AvatarPicker = ({ disabledIndices, onSelect }) => {
  const [ currentIndex, setCurrentIndex ] = useState(0)
  const width = 180
  const height = 180
  const avatars = [
    harold,
    danny,
    hillary,
    ethan,
    joel,
    kanye,
    sam,
    steve,
  ]

  return (
    <StyledContainerDiv>
      <Button
        disabled={currentIndex === 0}
        size="large"
        onClick={() => setCurrentIndex(Math.max(currentIndex - 1, 0))}
      >
        <FontAwesomeIcon icon={faCaretLeft} />
      </Button>
      <PortraitFrame top={20} width={width} height={height} color={colors.gameAqua}>
        <StyledUl style={{ width: width * avatars.length, transform: `translateX(-${currentIndex * width}px)` }}>
          {avatars.map((src, i) => (
            <StyledLi key={`src_${i}`}>
              <Avatar src={src} />
            </StyledLi>
          ))}
        </StyledUl>
      </PortraitFrame>
      <Button
        disabled={currentIndex === avatars.length - 1}
        size="large"
        onClick={() => setCurrentIndex(Math.min(currentIndex + 1, avatars.length - 1))}
      >
        <FontAwesomeIcon icon={faCaretRight} />
      </Button>
    </StyledContainerDiv>
  )
}

export default AvatarPicker
