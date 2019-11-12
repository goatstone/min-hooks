import React from 'react'
import WidgetAdd from './WidgetAdd'
import WidgetUpdate from './WidgetUpdate'

function AddUpdate({ mode, updateModes }: any) {
  return (
    <div className="widgets-container">
      {
        mode === updateModes.ADD
        && <WidgetAdd />
      }
      {
        mode === updateModes.UPDATE
        && <WidgetUpdate />
      }
    </div>
  )
}

export default AddUpdate
