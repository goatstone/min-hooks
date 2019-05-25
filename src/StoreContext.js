import React, { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'
import initState from './init-state'
import reducer from './reducer'

const StoreContext = createContext(initState)

function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState)

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
}
StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { StoreContext, StoreProvider }
