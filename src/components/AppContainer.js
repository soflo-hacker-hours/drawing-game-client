import React from 'react'
import styled from '@emotion/styled'
import AppHeader from './AppHeader'
import AppBody from './AppBody'
import '../index.css'

const StyledDiv = styled.div`
  height: 100%;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
`

const AppContainer = ({ children }) => {
  return (
    <StyledDiv>
      <AppHeader />
      <AppBody>
        {children}
      </AppBody>
    </StyledDiv>
  )
}

export default AppContainer
