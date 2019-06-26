import React from 'react'
import { StoreContext, StoreContextInterface } from '../../StoreContext'
import './MessageControl.css'

const MessageControl: React.FC = () => {
  const { state, actions }: StoreContextInterface = React.useContext(StoreContext)
  const [localState, localSetState] = React.useState('')

  const setNameValue = ({ target }: any) => {
    localSetState(target.value)
  }
  const setMessage = () => {
    actions.setMessage(localState)
    localSetState('')
  }

  return (
    <article className="message-control">
      <h4>Message Control</h4>
      <fieldset className="message-control-layout-a">
        <label>
          Set Message
          <input
            value={localState}
            onChange={setNameValue}
          />
        </label>
        <button
          type="button"
          onClick={setMessage}
          disabled={localState.length === 0}
          className="set-message"
        >
          Set
        </button>
      </fieldset>
      <fieldset>
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
      </fieldset>
    </article>
  )
}

export default MessageControl
