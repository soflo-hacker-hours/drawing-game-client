import React from 'react'
import styled from '@emotion/styled'

const StyledHeader = styled.header`
  flex: 0;
  height: 100px;
  background-color: #001022;
  padding: 0px 28px;
`

const StyledH1 = styled.h1`
  line-height: 100px;
  font-size: 50px;
  font-family: 'Fredoka One', cursive;
  color: #fff;
  animation-name: neon;
  animation-duration: 1s;
  animation-timing-function: ease-in;
  text-shadow: 0 0 5px #88DFFF, 0 0 20px #228DFF, 0 0 35px #228DFF, 0 0 40px #228DFF, 0 0 50px #228DFF, 0 0 60px #228DFF;
`

const AppHeader = () => {
  return (
    <StyledHeader>
      <StyledH1>Drawing Game</StyledH1>
    </StyledHeader>
  )
}

export default AppHeader
