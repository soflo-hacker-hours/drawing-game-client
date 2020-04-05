import React from 'react'
import styled from '@emotion/styled'
import AppTitle from './AppTitle'
import { colors } from '../theme'

const StyledHeader = styled.header`
  flex: 0;
  height: 100px;
  background-color: ${colors.gameAquaDark};
  padding: 0px 28px;
`

const AppHeader = () => {
  return (
    <StyledHeader>
      <AppTitle label="Drawing Game" />
    </StyledHeader>
  )
}

export default AppHeader
