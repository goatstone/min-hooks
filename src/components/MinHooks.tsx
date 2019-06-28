import React from 'react'
import './MinHooks.css'
import {
  StoreContext,
  StoreContextInterface,
} from './StoreContext'
import {
  MessageDisplay,
  MessageControl,
  WidgetListManage,
  WidgetHeader,
  WidgetList,
  WidgetAdd,
} from '.'

const MinHooks: React.FC = () => {
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
