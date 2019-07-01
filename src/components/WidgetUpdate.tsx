import React from 'react'
import { StoreContext, StoreContextInterface } from './StoreContext'
import { nameUpdateModes } from '../state'
import './WidgetUpdate.css'

const WidgetUpdate: React.FC = () => {
  const { state, actions }: StoreContextInterface = React.useContext(StoreContext)
  // update the list of names and set back to ADD mode
  const updateWidgetName = () => {
    actions.editWidgetName(state.updateNameKey, state.updateName)
    actions.setNameUpdateMode(nameUpdateModes.ADD, '', '')
  }
  // update value in input field
  const setUpdateName = (e: any) => {
    actions.setUpdateName(e.target.value)
  }
  return (
    <article className="widget-update-control">
      <h4>
        Update Widget Name
      </h4>
      <input
        value={state.updateName}
        onChange={setUpdateName}
      />
      <button
        type="button"
        className="update-widget"
        onClick={updateWidgetName}
        disabled={state.updateName.length === 0}
      >
        Update
        {state.lastUpdate}
      </button>
    </article>
  )
}

export default WidgetUpdate
