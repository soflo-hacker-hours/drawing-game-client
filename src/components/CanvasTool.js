import React from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { colors } from '../theme'

const activeStates = {
  'inactive': `
    border-color: ${colors.lightGray};
    color: ${colors.lightGray};
    background-color: ${colors.offWhite};
    cursor: pointer;

    &:hover {
      border-color: ${colors.gameAqua};
      color: ${colors.gameAqua};
    }
  `,
  'active': `
    border-color: ${colors.gameAqua};
    color: ${colors.gameAqua};
    background-color: ${colors.white};
    pointer-events: none;
  `
}

const StyledButton = styled.button(props => `
  ${activeStates[props.activeState]}
  border-width: 3px;
  border-style: solid;
  border-radius: 6px;
  padding: 12px;
  margin-right: 10px;
`)

const CanvasTool = ({ isActive, icon, onClick }) => {
  return (
    <StyledButton activeState={isActive ? 'active' : 'inactive'} onClick={onClick}>
      <FontAwesomeIcon size="2x" icon={icon} />
    </StyledButton>
  )
}

export default CanvasTool
