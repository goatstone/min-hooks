import React from 'react'
import { StoreContext, StoreContextInterface } from '../StoreContext'

const WidgetAdd: React.FC = () => {
  const { state, actions }: StoreContextInterface = React.useContext(StoreContext)

  return (
    <button
      type="button"
      className="add-widget"
      onClick={() => actions.addWidgetName('abc')}
    >
      Add Widget Name
      {state.lastUpdate}
    </button>
  )
}

export default WidgetAdd
