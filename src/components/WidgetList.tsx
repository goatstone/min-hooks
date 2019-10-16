import React from 'react'
import { StoreContext } from './StoreContext'
import { nameUpdateModes } from '../state'
import './WidgetList.css'

const WidgetList: React.FC = () => (
  <StoreContext.Consumer>
    {({ state, actions }: any) => (
      <article className="widget-list">
        <div className="widget-list-grid">
          {
            state.widgetNames.map((el: any) => (
              <React.Fragment key={`${el}`}>
                <div>
                  {el}
                </div>
                <div>
                  <button
                    type="button"
                    className="delete-widget"
                    name="delete"
                    onClick={() => actions.deleteWidgetName(el)}
                  >
                    Delete
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    className="edit-widget"
                    name="edit"
                    onClick={
                      () => (
                        actions
                          .setNameUpdateMode(nameUpdateModes.UPDATE, el, el)
                      )
                    }
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
  </StoreContext.Consumer>
)

export default WidgetList
