import React from 'react'
import { StoreContext, StoreContextInterface } from '../StoreContext'

const WidgetEdit: React.FC = () => {
  const { state, actions }: StoreContextInterface = React.useContext(StoreContext)

  return (
    <button
      type="button"
      className="add-widget"
      onClick={() => actions.editWidgetName('abc', 'ss')}
    >
      Edit Widget Name
      {state.lastUpdate}
    </button>
  )
}

export default WidgetEdit
