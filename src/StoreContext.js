import React, { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'

const initState = { a: 1, b: 2 }
const StoreContext = createContext(initState)

function reducer(state, action) {
  switch (action.type) {
    case 'a':
      return Object.assign({}, state, { a: 200 })
    default:
      return Object.assign({}, state, { a: 2000 })
  }
}

function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState)

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
}
StoreProvider.propTypes = {
  children: PropTypes.func.isRequired,
}

export { StoreContext, StoreProvider }
