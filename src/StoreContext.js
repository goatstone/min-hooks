import React, { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'
import initState from './init-state'
import reducer from './reducer'
import useActions from './use-action'

const StoreContext = createContext(initState)

function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState)
  const actions = useActions(state, dispatch)

  return (
    <StoreContext.Provider value={{ state, dispatch, actions }}>
      {children}
    </StoreContext.Provider>
  )
}
StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { StoreContext, StoreProvider }
