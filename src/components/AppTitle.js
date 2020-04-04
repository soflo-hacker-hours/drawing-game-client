import React from 'react'
import styled from '@emotion/styled'

const StyledH1 = styled.h1`
  line-height: 100px;
  font-size: 50px;
  color: #fff;
  animation-name: neon;
  animation-duration: 1s;
  animation-timing-function: ease-in;
  text-shadow: 0 0 5px #88DFFF, 0 0 20px #228DFF, 0 0 35px #228DFF, 0 0 40px #228DFF, 0 0 50px #228DFF, 0 0 60px #228DFF;
`

const AppTitle = ({ label, ...props }) => {
  return <StyledH1 {...props}>{label}</StyledH1>
}

export default AppTitle
