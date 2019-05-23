import React, { createContext } from 'react'
import PropTypes from 'prop-types'

const initState = { a: 1, b: 2 }
const StoreContext = createContext(initState)

function StoreProvider({ children, value }) {
  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  )
}
StoreProvider.propTypes = {
  children: PropTypes.func.isRequired,
  value: PropTypes.func.isRequired,
}

export { StoreContext, StoreProvider }
