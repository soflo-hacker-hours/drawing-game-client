import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { colors } from '../theme'

const sizes = {
  small: `
    padding: 5px 3px;
  `,
  medium: `
    padding: 7px 10px;
  `,
  large: `
    font-size: 28px;
    padding: 8px 12px;
  `,
}

const StyledInput = styled.input(props => `
  ${sizes[props.size]}
  color: ${colors.gray};
  border: 1px solid ${colors.gray};
  background: none;
  border-radius: 3px;

  &::placeholder {
    color: ${colors.lightGray};
  }

  &:focus {
    border-color: ${colors.gameAqua};
    color: ${colors.gameAqua};
  }

  &::selection {
    background-color: ${colors.gameAquaLight};
  }
`)

const TextInput = ({ value, size, ...props }) => {
  return <StyledInput spellCheck={false} size={size} value={value} type="text" onChange={() => {}} {...props} />
}

TextInput.propTypes = {
  value: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
}

TextInput.defaultProps = {
  value: '',
  size: 'medium',
}

export default TextInput
