import React from 'react'
import { StoreContext, StoreContextInterface } from './StoreContext'
import { nameUpdateModes } from '../state'
import './WidgetList.css'

const WidgetList: React.FC = () => {
  const { state, actions }: StoreContextInterface = React.useContext(StoreContext)
  const editWidgetName = (widgetName: string) => {
    actions.setNameUpdateMode(nameUpdateModes.UPDATE, widgetName, 'a')
  }
  const deletWidgetName = (target: string) => {
    actions.deleteWidgetName(target)
  }
  return (
    <article className="widget-list">
      <div className="widget-list-grid">
        {
          state.widgetNames.map(el => (
            <React.Fragment key={`${el}${Math.random()}`}>
              <div>
                {el}
              </div>
              <div>
                <button
                  type="button"
                  className="delete-widget"
                  onClick={() => deletWidgetName(el)}
                >
                  Delete
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="edit-widget"
                  onClick={() => editWidgetName(el)}
                >
                  Edit
                </button>
              </div>
            </React.Fragment>
          ))
        }
      </div>
    </article>
  )
}

export default WidgetList
