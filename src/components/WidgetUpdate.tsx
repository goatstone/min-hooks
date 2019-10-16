import React from 'react'
import { StoreContext } from './StoreContext'
import { nameUpdateModes } from '../state'
import './WidgetUpdate.css'

const WidgetUpdate: React.FC = () => (
  <StoreContext.Consumer>
    {({ state, actions }) => (
      <article className="widget-update-control">
        <h4>
          Update Widget Name
        </h4>
        <fieldset>
          <input
            value={state.updateName}
            name="name"
            onChange={e => actions.setUpdateName(e.target.value)}
          />
          <button
            type="button"
            name="update"
            className="update-widget"
            onClick={() => {
              actions.editWidgetName(state.updateNameKey, state.updateName)
              actions.setNameUpdateMode(nameUpdateModes.ADD, '', '')
            }}
            disabled={state.updateName.length === 0}
          >
            Update
          </button>
        </fieldset>
      </article>
    )}
  </StoreContext.Consumer>
)

export default WidgetUpdate
