import React from 'react'
import './MinHooks.css'
import { StoreContext } from './StoreContext'
import { actionTypes } from './action'
import { StateInterface } from './state'

interface StoreContextInterface {
  state: StateInterface,
  dispatch: any,
  actions: any,
}
const MinHooks: React.FC = () => {
  // local state
  const [localState, localSetState] = React.useState('abc')
  // global state
  const { state, dispatch, actions }: StoreContextInterface = React.useContext(StoreContext)

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
              <li key={el}>
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
          onClick={() => dispatch({ type: actionTypes.SHOW_MESSAGE })
          }
        >
          set to true
        </button>
        <button
          type="button"
          className="global-state-2"
          onClick={() => dispatch({ type: actionTypes.HIDE_MESSAGE })
          }
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
