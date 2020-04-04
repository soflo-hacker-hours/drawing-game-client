import React from 'react'
import styled from '@emotion/styled'
import { colors } from '../theme'

const StyledP = styled.p`
  font-size: 28px;
  color: ${colors.gameBlueBright};
  text-shadow: 0px 0px 3px #88DFFF;
`

const Prompt = ({ children }) => {
  return <StyledP>{children}</StyledP>
}

export default Prompt
