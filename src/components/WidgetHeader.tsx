import React from 'react'
import { StoreContext } from './StoreContext'

const WidgetHeader: React.FC = () => (
  <StoreContext.Consumer>
    {({ state: { cssSheet: { classes: { header: headerCSS } } } }) => (
      <header className={headerCSS}>
        <h3>
          Widgets Names
          <img src="min-hooks-art.png" alt="" width="30" />
        </h3>
      </header>
    )}
  </StoreContext.Consumer>
)

export default WidgetHeader
