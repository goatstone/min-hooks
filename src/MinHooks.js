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
      {localState}
      <button
        type="button"
        onClick={() => localSetState('xxx')
        }
      >
        set state
      </button>
      <button
        type="button"
        onClick={() => dispatch({ action: 'a' })
        }
      >
        set state
      </button>
      {state && state.a && state.a}
    </section>
  )
}

export default MinHooks
