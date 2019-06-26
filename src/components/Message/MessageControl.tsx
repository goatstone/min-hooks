import React from 'react'
import { StoreContext, StoreContextInterface } from '../../StoreContext'
import './MessageControl.css'

const MessageControl: React.FC = () => {
  const { state, actions }: StoreContextInterface = React.useContext(StoreContext)

  return (
    <article className="message-control">
      <h4>Display Message</h4>
      <button
        type="button"
        onClick={actions.showMessage}
        disabled={state.isShowingMessage}
      >
        Show
      </button>
      <button
        type="button"
        onClick={actions.hideMessage}
        disabled={!state.isShowingMessage}
      >
        Hide
      </button>
    </article>
  )
}

export default MessageControl
