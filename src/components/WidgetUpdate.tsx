import React from 'react'
import { StoreContext, StoreContextInterface } from './StoreContext'
import './WidgetUpdate.css'
import { nameUpdateModes } from '../state'

const WidgetUpdate: React.FC = () => {
  const { state, actions }: StoreContextInterface = React.useContext(StoreContext)
  const updateNameKey = 'abc' // TODO make dyanamic
  const updateWidgetName = () => {
    actions.editWidgetName(state.updateName, updateNameKey)
    // set the mode back to Add Widget
    actions.setNameUpdateMode(nameUpdateModes.ADD, '')
  }
  return (
    <article className="widget-update-control">
      <h4>
        Update Widget Name
      </h4>
      {state.updateName.length > 0 && (
        <React.Fragment>
          <input
            defaultValue={state.updateName}
            onChange={updateWidgetName}
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
        </React.Fragment>
      )}
    </article>
  )
}

export default WidgetUpdate
