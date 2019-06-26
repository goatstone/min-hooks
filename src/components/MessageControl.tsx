import React from 'react'
import { StoreContext, StoreContextInterface } from '../StoreContext'

const MessageControl: React.FC = () => {
  const { state, actions }: StoreContextInterface = React.useContext(StoreContext)

  return (
    <div>
      <article className="global-state">
        {state.isShowingMessage ? 'T' : 'F'}
      </article>
      <button
        type="button"
        className="global-state"
        onClick={actions.showMessage}
      >
        set to true
        {state.lastUpdate}
      </button>
      <button
        type="button"
        className="global-state-2"
        onClick={actions.hideMessage}
      >
        set to false
      </button>
    </div>
  )
}

export default MessageControl
