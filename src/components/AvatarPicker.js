import React, { useState } from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import Avatar from './Avatar'
import Button from './Button'
import { colors } from '../theme'
import harold from '../assets/harold.png'
import danny from '../assets/danny.png'
import ethan from '../assets/ethan.png'
import joel from '../assets/joel.png'
import kanye from '../assets/kanye.png'
import sam from '../assets/sam.png'
import steve from '../assets/steve.png'
import hillary from '../assets/hillary.png'

const StyledContainerDiv = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
`

const StyledDiv = styled.div(props => `
  width: ${props.width}px;
  height: ${props.height}px;
  background-color: #f0f0f0;
  overflow: hidden;
  border: 5px solid ${colors.gameAqua};
  border-radius: 12px;
  padding-top: ${props.top}px;
  box-sizing: content-box;
`)

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
      <StyledDiv top={20} width={width} height={height}>
        <StyledUl style={{ width: width * avatars.length, transform: `translateX(-${currentIndex * width}px)` }}>
          {avatars.map((src, i) => (
            <StyledLi key={`src_${i}`}>
              <Avatar src={src} />
            </StyledLi>
          ))}
        </StyledUl>
      </StyledDiv>
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
