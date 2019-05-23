import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import MinHooks from './MinHooks'
import { StoreProvider } from './StoreContext'

const initState = { a: 13, b: 5 }

ReactDOM.render(
  <StoreProvider value={ initState }>
    <MinHooks />
  </StoreProvider>,
  document.getElementById('root'))
