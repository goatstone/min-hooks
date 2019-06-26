import React from 'react'
import { StoreContext, StoreContextInterface } from '../StoreContext'
import './WidgetList.css'

const WidgetList: React.FC = () => {
  const { state }: StoreContextInterface = React.useContext(StoreContext)

  return (
    <article className="widget-list">
      <div className="widget-list-grid">
        {
          state.widgetNames.map(el => (
            <React.Fragment>
              <div key={`${el}${Math.random()}`}>
                {el}
              </div>
              <div>DEL</div>
              <div>EDIT</div>
            </React.Fragment>
          ))
        }
      </div>
    </article>
  )
}

export default WidgetList
