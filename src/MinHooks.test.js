import React from 'react'
import ReactDOM from 'react-dom'
import MinHooks from './MinHooks'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<MinHooks />, div)
  ReactDOM.unmountComponentAtNode(div)
})
