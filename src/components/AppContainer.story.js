import React from 'react'
import AppContainer from './AppContainer'

export default { title: 'Components/App Container' }

export const Default = () => (
  <div style={{height: '100vh'}}>
    <AppContainer>
      <div style={{ height: '100%', backgroundColor: '#aaa' }}></div>
    </AppContainer>
  </div>
)
