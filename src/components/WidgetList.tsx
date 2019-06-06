import React from 'react'
import { StoreContext, StoreContextInterface } from '../StoreContext'

const WidgetList: React.FC = () => {
  const { state }: StoreContextInterface = React.useContext(StoreContext)

  return (
    <ul>
      {
        state.widgetNames.map(el => (
          <li key={`${el}${Math.random()}`}>
            {el}
          </li>
        ))
      }
    </ul>
  )
}

export default WidgetList
