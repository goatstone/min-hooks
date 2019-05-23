import React, { useState, useContext } from 'react'
import './MinHooks.css'
import { StoreContext } from './StoreContext'

function MinHooks() {
  // local state
  const [state, setState] = useState('abc')
  const { a } = useContext(StoreContext)

  return (
    <section className="min-hooks">
      <header>
        MinHooks
      </header>
      { state }
      <button
        onClick={ () => setState('xxx') }
        >
        set state </button>
        z{ a }a
    </section>
  )
}

export default MinHooks
