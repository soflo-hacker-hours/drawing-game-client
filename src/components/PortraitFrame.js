import React from 'react'
import styled from '@emotion/styled'
import { colors } from '../theme'

const StyledDiv = styled.div(props => `
  width: ${props.width}px;
  height: ${props.height}px;
  background-color: ${colors.white};
  overflow: hidden;
  border: 5px solid ${props.color};
  border-radius: 12px;
  padding-top: ${props.top}px;
  box-sizing: content-box;
`)

const PortraitFrame = ({ width, height, top, children, color, ...props }) => {
  return (
    <StyledDiv
      width={width}
      height={height}
      top={top}
      color={color}
      {...props}
    >
      {children}
    </StyledDiv>
  )
}

export default PortraitFrame
