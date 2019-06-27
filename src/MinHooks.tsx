import React from 'react'
import './MinHooks.css'
import {
  StoreContext,
  StoreContextInterface,
} from './StoreContext'
import {
  WidgetListManage,
  WidgetHeader,
  MessageDisplay,
  MessageControl,
  WidgetList,
  WidgetAdd,
} from './components'

const MinHooks: React.FC = () => {
  // global state
  const { state }: StoreContextInterface = React.useContext(StoreContext)

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
        </div>
        <MessageControl />
        <MessageDisplay />
      </div>

    </section>
  )
}

export default MinHooks
