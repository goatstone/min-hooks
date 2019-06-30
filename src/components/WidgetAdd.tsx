import React from 'react'
import { StoreContext, StoreContextInterface } from './StoreContext'
import './WidgetAdd.css'

const WidgetAdd: React.FC = () => {
  const { actions }: StoreContextInterface = React.useContext(StoreContext)
  const [widgetName, setWidgetName] = React.useState('')
  // set global value
  const addWidgetName = () => {
    actions.addWidgetName(widgetName)
    setWidgetName('')
  }
  // maintain local values
  const setNameValue = (name: string) => setWidgetName(name)

  return (
    <article className="widget-add-control">
      <h4>
        Add Widget Name
      </h4>
      <input
        value={widgetName}
        onChange={e => setNameValue(e.target.value)}
      />
      <button
        type="button"
        className="add-widget"
        onClick={addWidgetName}
        disabled={widgetName.length === 0}
      >
        Add
      </button>
    </article>
  )
}

export default WidgetAdd
