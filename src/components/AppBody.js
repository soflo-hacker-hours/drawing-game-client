import React from 'react'
import styled from '@emotion/styled'

const StyledDiv = styled.div`
  height: 100%;
`

const AppBody = ({ children }) => {
  return (
    <StyledDiv>
      {children}
    </StyledDiv>
  )
}

export default AppBody
