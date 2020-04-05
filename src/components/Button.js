import React from 'react'
import { css } from 'emotion'
import styled from '@emotion/styled'
import { colors } from '../theme'

const StyledButton = styled.button`
  border: none;
  background: none;
  background-color: ${colors.gameAqua};
  color: ${colors.white};
  border: none;
  border-radius: 4px;
  padding: ${({ size }) => {
    switch (size) {
      case 'small':
        return '4px 8px'
      case 'large':
        return '12px 16px'
      case 'medium':
      default:
        return '8px 12px'
    }
  }};
  cursor: pointer;
  font-weight: normal;
  font-size: ${props => {
    let fontSize

    switch (props.size) {
      case 'small':
        fontSize = 12
        break
      case 'large':
        fontSize = 22
        break
      case 'medium':
      default:
        fontSize = 16
        break
    }

    return fontSize
  }}px;

  &:disabled {
    opacity: 0.3;
    cursor: default;
  }
`

const Button = ({ size, children, ...props }) => {
  return (
    <StyledButton
      size={size}
      {...props}>
      {children}
    </StyledButton>
  )
}

export default Button
