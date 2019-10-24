import React from 'react'
import { StoreContext } from './StoreContext'

const WidgetAdd: React.FC = () => {
  const [widgetName, setWidgetName] = React.useState('')

  return (
    <StoreContext.Consumer>
      {({ state: { cssSheet: { classes: { addItem: addItemCSS } } }, actions }) => (
        <article className={addItemCSS}>
          <h4>
            Add Widget Name
          </h4>
          <fieldset>
            <input
              value={widgetName}
              onChange={e => setWidgetName(e.target.value)}
            />
            <button
              type="button"
              className="add-widget"
              onClick={
                () => {
                  actions.addWidgetName(widgetName)
                  setWidgetName('')
                }
              }
              disabled={widgetName.length === 0}
            >
              Add
            </button>
          </fieldset>
        </article>
      )
      }
    </StoreContext.Consumer>
  )
}

export default WidgetAdd
