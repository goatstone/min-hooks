import React from 'react'
import PropTypes from 'prop-types'
import defaultState from './state'
import reducer from './reducer'
import useActions from './use-actions'

const StoreContext = React.createContext<any>(defaultState)

const StoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, defaultState)
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
