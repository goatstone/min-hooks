import React from 'react'
import './MinHooks.css'
import { StoreContext } from './StoreContext'
import { StateInterface } from './state'

interface StoreContextInterface {
  readonly state: StateInterface
  readonly actions: any
}
const MinHooks: React.FC = () => {
  // local state
  const [localState, localSetState] = React.useState('abc')
  // global state
  const { state, actions }: StoreContextInterface = React.useContext(StoreContext)

  return (
    <section className="min-hooks">
      <header>
        Widgets
      </header>
      <section>
        <h3>Widget Names</h3>
        <ul>
          {
            state.widgetNames.map(el => (
              <li key={`${el}${Math.random()}`}>
                {el}
              </li>
            ))
          }
        </ul>
      </section>
      <section className="actions">
        <h3>Actions</h3>
        <button
          type="button"
          className="add-widget"
          onClick={() => actions.addWidgetName('abc')}
        >
          Add Widget Name
        </button>
        <button
          type="button"
          className="add-widget"
          onClick={() => actions.editWidgetName('abc', 'ss')}
        >
          Edit Widget Name
        </button>
        <button
          type="button"
          className="add-widget"
          onClick={() => actions.deleteWidgetName('abc')}
        >
          Delete Widget Name
        </button>
      </section>
      <section>
        <h3>Show Message</h3>
        <button
          type="button"
          className="global-state"
          onClick={actions.showMessage}
        >
          set to true
        </button>
        <button
          type="button"
          className="global-state-2"
          onClick={actions.hideMessage}
        >
          set to false
        </button>
        <article className="global-state">
          {state.isShowingMessage ? 'T' : 'F'}
        </article>
      </section>
      <section>
        <h3>Local State</h3>
        <button
          type="button"
          className="local-state"
          onClick={() => localSetState('xxx')
          }
        >
          set local state
        </button>
        <article className="local-state">
          {localState}
        </article>
      </section>
    </section>
  )
}

export default MinHooks
