import React from 'react'
import Body from './components/Body'
import { Provider } from 'react-redux'
import appstore from './utils/appstore'

const App = () => {
  return (
    <div>
      <Provider store={appstore}>
        <Body/>
      </Provider>
    </div>
  )
}

export default App

