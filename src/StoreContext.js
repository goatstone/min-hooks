import React, { createContext } from 'react'

const initState = { a: 1, b: 2 }
const StoreContext = createContext(initState)

function StoreProvider({ children, value }) {
  return (
    <StoreContext.Provider value={ value }>
        {children}
    </StoreContext.Provider>
  )
}

export { StoreContext, StoreProvider }