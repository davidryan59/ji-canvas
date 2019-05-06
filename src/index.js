import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import AppC from './components/AppC'
import rootReducer from './reducers'

import windowResize from './handlers/windowResize'

const store = createStore(rootReducer)

window.addEventListener('resize', e => windowResize(e, store))

render(
  <Provider store={store}>
    <AppC
      onResize={()=>console.log('resized')}
    />
  </Provider>,
  document.getElementById('root')
)
