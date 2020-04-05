import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { colors } from '../theme'

const sizes = {
  small: `
    font-size: 14px;
  `,
  medium: `
    font-size: 20px;
  `,
  large: `
    font-size: 28px;
  `
}

const StyledP = styled.p(props => `
  ${sizes[props.size]}
  color: ${colors.gameAqua};

  span::selection {
    background-color: ${colors.gameAquaLight};
  }
`)

const Prompt = ({ size, children, ...props }) => {
  return <StyledP size={size} {...props}>{children}</StyledP>
}

Prompt.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large'])
}

Prompt.defaultProps = {
  size: 'large',
}

export default Prompt
