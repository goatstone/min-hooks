import React from 'react'
import { StoreContext, StoreContextInterface } from '../../StoreContext'
import './MessageDisplay.css'

const MessageDisplay: React.FC = () => {
  const { state }: StoreContextInterface = React.useContext(StoreContext)
  return (
    <article className="message-display">
      {state.isShowingMessage ? <p>{state.message}</p> : ''}
    </article>
  )
}

export default MessageDisplay
