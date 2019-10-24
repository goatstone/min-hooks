import React from 'react'
import {
  StoreContext,
} from './StoreContext'
import {
  MessageDisplay,
  MessageControl,
  WidgetListManage,
  WidgetHeader,
  WidgetList,
  WidgetAdd,
  WidgetUpdate,
} from '.'
import { nameUpdateModes } from '../state'

const MinHooks: React.FC = () => (
  <StoreContext.Consumer>
    {({ state }) => (
      <section className={state.cssSheet.classes.container}>
        <WidgetHeader />
        <div className="min-hooks-body">
          {/* <div className="min-hooks-body"> */}
          <div className="widgets-container">
            {
              state.nameUpdateMode === nameUpdateModes.ADD
              && <WidgetAdd />
            }
            {
              state.nameUpdateMode === nameUpdateModes.UPDATE
              && <WidgetUpdate />
            }
            <WidgetListManage>
              <h4>Widget Name List</h4>
              {state.lastUpdate}
              <WidgetList />
            </WidgetListManage>
          </div>
          <MessageControl />
          <MessageDisplay />
        </div>

      </section>
    )}
  </StoreContext.Consumer>
)

export default MinHooks
