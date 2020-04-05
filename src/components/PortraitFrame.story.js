import React from 'react'
import PortraitFrame from './PortraitFrame'

export default { title: 'Components/Portrait Frame' }

export const Default = () => (
  <PortraitFrame top={0} width={200} height={200} color="red">
    <img src="https://placekitten.com/200/200" />
  </PortraitFrame>
)
