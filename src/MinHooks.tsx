import React from 'react'
import './MinHooks.css'
import {
  StoreContext,
  StoreContextInterface,
} from './StoreContext'
import {
  LocalState,
  Message,
  WidgetControl,
  WidgetListManage,
  WidgetHeader,
  Widgets,
  MessageControl,
  WidgetList,
  WidgetEdit,
  WidgetAdd,
} from './components'

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
          <h3>Widget Name List</h3>
          <WidgetList />
        </WidgetListManage>
        <WidgetControl>
          <h3>Widget Control</h3>
          <WidgetAdd />
          <WidgetEdit />
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
        <MessageControl />
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
