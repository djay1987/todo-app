import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import promise from 'redux-promise' // espera a promise ser resolvida para depois disparar o reducer
import multi from 'redux-multi' // array de actions
import thunk from 'redux-thunk' // faz com que retorne um método que recebe por parâmetro o dispatch

import App from './main/app'
import reducers from './main/reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers, devTools)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('app'))