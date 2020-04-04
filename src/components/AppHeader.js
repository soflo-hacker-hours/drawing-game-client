import React from 'react'
import styled from '@emotion/styled'
import AppTitle from './AppTitle'

const StyledHeader = styled.header`
  flex: 0;
  height: 100px;
  background-color: #001022;
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
