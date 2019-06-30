import React, { useEffect } from 'react'
import { StoreContext, StoreContextInterface } from './StoreContext'
import './WidgetUpdate.css'
// import { nameUpdateModes } from '../state'

const WidgetUpdate: React.FC = () => {
  const { state, actions }: StoreContextInterface = React.useContext(StoreContext)

  const initK = state.updateName
  console.log('lc', initK)

  const [localState, setLocalState] = React.useState('abc')
  //   const ipRef: RefObject<any> = React.createRef()

  const updateNameKey = 'abc' // TODO make dyanamic
  const updateWidgetName = () => {
    console.log('lc', initK)
    // ipRef.current.value = ''
    actions.editWidgetName(state.updateName, updateNameKey)
    // set the mode back to Add Widget
    // actions.setNameUpdateMode(nameUpdateModes.ADD, '')
  }
  const fA = (e: any) => {
    // update the name to be edited, stored in state
    // setLocalState('xxxx')
    // actions.setUpdateName(e.target.value)
    console.log(12, e.target.value)
  }
  const prevUn = state.updateName
  useEffect(() => {
    console.log('u ffff', prevUn, state.updateName)
    if (prevUn !== state.updateName) {
      setLocalState('aaaa')
    }
  })
  function la(e: any) {
    setLocalState(e.target.value)
    console.log('e', e)
  }
  return (
    <article className="widget-update-control">
      <h4>
        Update Widget Name
        {localState}
      </h4>
      <input
        value={localState}
        onChange={la}
      />
      <input
        value={state.updateName}
        onChange={fA}
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
