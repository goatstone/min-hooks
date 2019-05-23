import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import MinHooks from './MinHooks'
import { StoreProvider } from './StoreContext'

ReactDOM.render(
  <StoreProvider>
    <MinHooks />
  </StoreProvider>,
  document.getElementById('root'),
)
