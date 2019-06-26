import React from 'react'
import { StoreContext, StoreContextInterface } from '../StoreContext'
import './WidgetAdd.css'

const WidgetAdd: React.FC = () => {
  const { state, actions }: StoreContextInterface = React.useContext(StoreContext)
  const [localState, localSetState] = React.useState('')

  const setNameValue = ({ target }: any) => {
    localSetState(target.value)
  }
  const addWidgetName = () => {
    actions.addWidgetName(localState)
    localSetState('')
  }
  return (
    <article className="widget-add-control">
      <h4>Add Widget Name</h4>
      <input
        value={localState}
        onChange={setNameValue}
      />
      <button
        type="button"
        className="add-widget"
        onClick={addWidgetName}
        disabled={localState.length === 0}
      >
        Add Widget Name
        {state.lastUpdate}
      </button>
    </article>
  )
}

export default WidgetAdd
