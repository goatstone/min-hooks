import React from 'react'
import PropTypes from 'prop-types'
import initState from './init-state'
import reducer from './reducer'
import useActions from './use-actions'

const StoreContext = React.createContext<any>(initState)

const StoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initState)
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
