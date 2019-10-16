import React from 'react'
import { StoreContext } from '../StoreContext'
import './MessageControl.css'

const MessageControl: React.FC = () => {
  const [localState, localSetState] = React.useState('')

  return (
    <StoreContext.Consumer>
      {({ state, actions }) => (
        <article className="message-control">
          <h4>Message Control</h4>
          <fieldset className="message-control-layout-a">
            <label>
              Set Message
              <input
                value={localState}
                onChange={e => localSetState(e.target.value)}
              />
            </label>
            <button
              type="button"
              name="set-message"
              onClick={() => {
                actions.setMessage(localState)
                localSetState('')
              }}
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
    </StoreContext.Consumer>
  )
}

export default MessageControl
