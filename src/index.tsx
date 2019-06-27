import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import MinHooks from './components/MinHooks'
import { StoreProvider } from './components/StoreContext'

ReactDOM.render(
  <StoreProvider>
    <MinHooks />
  </StoreProvider>,
  document.getElementById('root'),
)
