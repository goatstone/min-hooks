import React, { useState } from 'react'
import './MinHooks.css'

function MinHooks() {
  // local state
  const [state, setState] = useState('abc')

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
    </section>
  )
}

export default MinHooks
