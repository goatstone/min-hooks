import React from 'react'
import './MinHooks.css'
import { StoreContext, StoreContextInterface } from './StoreContext'
import LocalState from './components/LocalState'
import Message from './components/Message'
import WidgetControl from './components/WidgetControl'
import WidgetListManage from './components/WidgetListManage'
import WidgetHeader from './components/WidgetHeader'
import Widgets from './components/Widgets'


/*
  <Widgets>
    <WidgetHeader />
    <WidgetManager>
      <h3>header</h3>
      <WidgetList>
    </WidgetManager>
    <WidgetControl>
      <h3>header</h3>
      <WidgetAdd />
      <WidgetEdit />
    </WidgetControl>
    <WidgetMessage>
  </Widgets>
*/

const MinHooks: React.FC = () => {
  // local state
  const [localState, localSetState] = React.useState('abc')
  // global state
  const { state, actions }: StoreContextInterface = React.useContext(StoreContext)

  return (
    <section className="min-hooks">
      <Widgets>
        <WidgetHeader />
        <WidgetListManage>
          <h3>
            Widget Name List
          </h3>
          <ul>
            {
              state.widgetNames.map(el => (
                <li key={`${el}${Math.random()}`}>
                  {el}
                </li>
              ))
            }
          </ul>
        </WidgetListManage>
        <WidgetControl>
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
        </WidgetControl>
      </Widgets>
      <Message>
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
      </Message>
      <LocalState>
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
      </LocalState>
    </section>
  )
}

export default MinHooks
