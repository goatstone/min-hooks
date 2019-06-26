import React from 'react'
import './MinHooks.css'
import {
  StoreContext,
  StoreContextInterface,
} from './StoreContext'
import {
  WidgetControl,
  WidgetListManage,
  WidgetHeader,
  MessageDisplay,
  MessageControl,
  WidgetList,
  WidgetEdit,
  WidgetAdd,
} from './components'

const MinHooks: React.FC = () => {
  // global state
  const { state, actions }: StoreContextInterface = React.useContext(StoreContext)

  return (
    <section className="min-hooks">
      <WidgetHeader />

      <div className="min-hooks-body">

        <div className="widgets-container">
          <WidgetAdd />
          <WidgetListManage>
            <h3>Widget Name List</h3>
            {state.lastUpdate}
            <WidgetList />
          </WidgetListManage>
          <WidgetControl>
            <WidgetEdit />
            <button
              type="button"
              className="add-widget"
              onClick={() => actions.deleteWidgetName('abc')}
            >
              Delete Widget Name
            </button>
          </WidgetControl>
        </div>

        <MessageControl />
        <MessageDisplay />

      </div>

    </section>
  )
}

export default MinHooks
