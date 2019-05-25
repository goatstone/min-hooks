import React, { useState, useContext } from 'react'
import './MinHooks.css'
import { StoreContext } from './StoreContext'

function MinHooks() {
  // local state
  const [localState, localSetState] = useState('abc')
  // global state
  const { state, dispatch } = useContext(StoreContext)

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
        className="local-state"
        onClick={() => localSetState('xxx')
        }
      >
        set state
      </button>
      <button
        type="button"
        className="global-state"
        onClick={() => dispatch({ action: 'a' })
        }
      >
        set state
      </button>
      <article className="global-state">
        {state.a}
      </article>
    </section>
  )
}

export default MinHooks
