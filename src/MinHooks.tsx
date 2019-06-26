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
  Widgets,
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
      <Widgets>
        <WidgetHeader />
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
      </Widgets>
      <MessageControl />
      <MessageDisplay />
    </section>
  )
}

export default MinHooks
