import React from 'react'
import styled from '@emotion/styled'

const StyledDiv = styled.div`
  padding: 0px;

  img {
    display: block;
    max-width: 100%;
  }
`

const Avatar = ({ src, ...props }) => {
  return (
    <StyledDiv {...props}>
      <img src={src} />
    </StyledDiv>
  )
}

export default Avatar
