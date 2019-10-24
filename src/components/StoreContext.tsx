import React from 'react'
import PropTypes from 'prop-types'
import jss from 'jss'
import preset from 'jss-preset-default'
import defaultState, { StateInterface } from '../state'
import reducer, { dispatchInterface } from '../reducer'
import useAction, { AppActionsInterface } from '../use-action'
import mainStyle from './style'

export interface StoreContextInterface {
  readonly state: StateInterface
  readonly actions: AppActionsInterface
}
//       jss set up
jss.setup(preset())
const sheet = jss.createStyleSheet(mainStyle)
sheet.attach()
defaultState.cssSheet = sheet

const StoreContext = React.createContext<any>(defaultState)

const StoreProvider: React.FC = ({ children }) => {
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
