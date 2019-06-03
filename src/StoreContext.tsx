import React from 'react'
import PropTypes from 'prop-types'
import defaultState from './state'
import reducer from './reducer'
import useActions from './use-actions'
import { ActionsInterface } from './action'

const StoreContext = React.createContext<any>(defaultState)

const StoreProvider: React.FC = ({ children }) => {
  // any, any here to remove errors with dispatch type TODO improve type
  const [state, dispatch]: [any, any] = React.useReducer(reducer, defaultState)
  const actions: ActionsInterface = useActions(state, dispatch)

  return (
    <StoreContext.Provider value={{ state, actions }}>
      {children}
    </StoreContext.Provider>
  )
}
StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { StoreContext, StoreProvider }