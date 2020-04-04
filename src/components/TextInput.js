import React from 'react'
import styled from '@emotion/styled'
import { colors } from '../theme'

const StyledInput = styled.input`
  color: ${colors.gray};
  padding: 5px 3px;
  border: 1px solid ${colors.gray};
  background: none;
  border-radius: 3px;
`

const TextInput = ({ value }) => {
  return <StyledInput value={value} type="text" onChange={() => {}} />
}

export default TextInput
