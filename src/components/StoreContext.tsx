import React from 'react'
import PropTypes from 'prop-types'
import defaultState, { StateInterface } from '../state'
import reducer, { dispatchInterface } from '../reducer'
import useAction, { AppActionsInterface } from '../action'

export interface StoreContextInterface {
  readonly state: StateInterface
  readonly actions: AppActionsInterface
}

const StoreContext = React.createContext<any>(defaultState)

const StoreProvider: React.FC = ({ children }) => {
  // any, any here to remove errors with dispatch type TODO improve type
  const [state, dispatch]: [StateInterface, dispatchInterface] = React
    .useReducer(reducer, defaultState)
  const actions: AppActionsInterface = useAction(state, dispatch)

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
