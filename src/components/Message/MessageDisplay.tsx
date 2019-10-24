import React from 'react'
import { StoreContext } from '../StoreContext'

const MessageDisplay: React.FC = () => (
  <StoreContext.Consumer>
    {({ state }) => (
      <article className={state.cssSheet.classes.messageDisplay}>
        {state.isShowingMessage ? <p>{state.message}</p> : ''}
      </article>
    )
    }
  </StoreContext.Consumer>
)

export default MessageDisplay
