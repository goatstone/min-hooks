import React from 'react'
import { StoreContext, StoreContextInterface } from '../StoreContext'
import './WidgetAdd.css'

const WidgetAdd: React.FC = () => {
  const { state, actions }: StoreContextInterface = React.useContext(StoreContext)
  const [localState, localSetState] = React.useState('')

  return (
    <article className="widget-add-control">
      <h4>Add Widget Name</h4>
      <input
        value={localState}
        onChange={e => localSetState(e.target.value)}
      />
      <button
        type="button"
        className="add-widget"
        onClick={() => actions.addWidgetName(localState)}
      >
        Add Widget Name
        {state.lastUpdate}
      </button>
    </article>
  )
}

export default WidgetAdd
