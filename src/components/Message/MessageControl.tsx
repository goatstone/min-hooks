import React from 'react'
import { StoreContext, StoreContextInterface } from '../../StoreContext'
import './MessageControl.css'

const MessageControl: React.FC = () => {
  const { state, actions }: StoreContextInterface = React.useContext(StoreContext)
  const [localState, localSetState] = React.useState('')

  const setNameValue = ({ target }: any) => {
    localSetState(target.value)
  }
  const setMessage = (message: string) => {
    actions.setMessage(message)
    localSetState('')
  }

  return (
    <article className="message-control">
      <h4>Display Message</h4>
      <input
        value={localState}
        onChange={setNameValue}
      />
      <button
        type="button"
        onClick={e => setMessage(e.target.value)}
        disabled={false}
        className="set-message"
      >
        Set
      </button>
      <button
        type="button"
        onClick={actions.showMessage}
        disabled={state.isShowingMessage}
        className="show-message"
      >
        Show
      </button>
      <button
        type="button"
        onClick={actions.hideMessage}
        disabled={!state.isShowingMessage}
        className="hide-message"
      >
        Hide
      </button>
    </article>
  )
}

export default MessageControl
