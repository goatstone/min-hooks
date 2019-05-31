import React from 'react'
import './MinHooks.css'
import { StoreContext } from './StoreContext'
import { actionTypes } from './action'
import { StateInterface } from './state'

interface StoreContextInterface {
  state: StateInterface,
  dispatch: any,
  actions: any,
}
const MinHooks: React.FC = () => {
  // local state
  const [localState, localSetState] = React.useState('abc')
  // global state
  const { state, dispatch, actions }: StoreContextInterface = React.useContext(StoreContext)

  return (
    <section className="min-hooks">
      <header>
        MinHooks
      </header>
      {1}
      <article className="local-state">
        {localState}
      </article>
      <button
        type="button"
        className="add-widget"
        onClick={() => actions.addWidgetName('abcdef')
        }
      >
        add widget name
      </button>
      <article>
        {state.widgetNames && state.widgetNames[0]}
      </article>
      <button
        type="button"
        className="local-state"
        onClick={() => localSetState('xxx')
        }
      >
        set local state
      </button>
      <button
        type="button"
        className="global-state"
        onClick={() => dispatch({ type: actionTypes.SHOW_MESSAGE })
        }
      >
        set to true
      </button>
      <button
        type="button"
        className="global-state-2"
        onClick={() => dispatch({ type: actionTypes.HIDE_MESSAGE })
        }
      >
      set to false
      </button>
      <article className="global-state">
        {state.isShowingMessage ? 'T' : 'F'}
      </article>
    </section>
  )
}

export default MinHooks
