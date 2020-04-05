import React from 'react'
import styled from '@emotion/styled'
import Heading from './Heading'
import { colors } from '../theme'

const StyledH1 = styled(Heading)`
  line-height: 100px;
  font-size: 50px;
  color: #fff;
  animation-name: neon;
  animation-duration: 1s;
  animation-timing-function: ease-in;
  text-shadow: 0 0 5px ${colors.gameAquaLight}, 0 0 20px ${colors.gameAqua}, 0 0 35px ${colors.gameAqua}, 0 0 40px ${colors.gameAqua}, 0 0 50px ${colors.gameAqua}, 0 0 60px ${colors.gameAqua};
`

const AppTitle = ({ label, ...props }) => {
  return <StyledH1 {...props}>{label}</StyledH1>
}

export default AppTitle
