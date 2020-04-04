import React from 'react'
import { css } from 'emotion'
import styled from '@emotion/styled'

const StyledButton = styled.button`
  border: none;
  background: none;
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
