import React from 'react'
import { StoreContext } from '../StoreContext'
import './MessageDisplay.css'

const MessageDisplay: React.FC = () => {
  return (
    <StoreContext.Consumer>
      {({ state }) =>
        (
          <article className="message-display">
            {state.isShowingMessage ? <p>{state.message}</p> : ''}
          </article>
        )
      }
    </StoreContext.Consumer>
  )
}

export default MessageDisplay
