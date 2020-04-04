import React from 'react'
import styled from '@emotion/styled'

const StyledH1 = styled.h1`
  -webkit-font-smoothing: subpixel-antialiased;
  text-rendering: optimizeLegibility;
  font-size: 28px;
`

const StyledH2 = styled.h2`
  -webkit-font-smoothing: subpixel-antialiased;
  text-rendering: optimizeLegibility;
  font-size: 22px;
`

const StyledH3 = styled.h3`
  -webkit-font-smoothing: subpixel-antialiased;
  text-rendering: optimizeLegibility;
  font-size: 16px;
`

const Heading = ({ level, children, ...props }) => {
  let renderedNode = null

  switch (level) {
    case 1:
      renderedNode = <StyledH1 {...props}>{children}</StyledH1>
      break
    case 2:
      renderedNode = <StyledH2 {...props}>{children}</StyledH2>
      break
    case 3:
      renderedNode = <StyledH3 {...props}>{children}</StyledH3>
      break
    default:
      renderedNode = <StyledH3 {...props}>{children}</StyledH3>
      break
  }

  return renderedNode
}

export default Heading
