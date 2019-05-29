import React, { useState, useContext } from 'react'
import './MinHooks.css'
import { StoreContext } from './StoreContext'
import actionTypes from './action-types'

function MinHooks() {
  // local state
  const [localState, localSetState] = useState('abc')
  // global state
  const { state, dispatch, actions } = useContext(StoreContext)

  return (
    <section className="min-hooks">
      <header>
        MinHooks
      </header>
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
        {state.isMessageShowing ? 'T' : 'F'}
      </article>
    </section>
  )
}

export default MinHooks
