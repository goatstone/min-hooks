import React, { RefObject } from 'react'
import { StoreContext, StoreContextInterface } from './StoreContext'
import './WidgetAdd.css'

const WidgetAdd: React.FC = () => {
  const text = ['Add ', 'Edit ']

  const { state, actions }: StoreContextInterface = React.useContext(StoreContext)
  const [localState, localSetState] = React.useState(true)
  const ipRef: RefObject<any> = React.createRef()

  const addWidgetName = () => {
    actions.addWidgetName(ipRef.current.value)
  }
  function setNameValue(val: string) {
    localSetState(val.length === 0)
  }
  return (
    <article className="widget-add-control">
      <h4>
        {text[state.nameUpdateMode]}
        Widget Name
      </h4>
      {state.updateName.length === 0 && (
        <React.Fragment>
          <input
            ref={ipRef}
            onChange={e => setNameValue(e.target.value)}
          />
          <button
            type="button"
            className="add-widget"
            onClick={addWidgetName}
            disabled={localState}
          >
            Add
            {state.lastUpdate}
          </button>
        </React.Fragment>
      )}
      {state.updateName.length > 0 && (
        <React.Fragment>
          <input
            defaultValue={state.updateName}
            ref={ipRef}
            onChange={e => setNameValue(e.target.value)}
          />
          <button
            type="button"
            className="edit-widget"
            // onClick={addWidgetName}
            disabled={localState}
          >
            Update
            {state.lastUpdate}
          </button>
        </React.Fragment>
      )}
    </article>
  )
}

export default WidgetAdd
