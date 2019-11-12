import React from 'react'
import {
  StoreContext,
} from './StoreContext'
import {
  MessageDisplay,
  MessageControl,
  WidgetHeader,
  WidgetList,
  AddUpdate,
  Frame,
} from '.'
import { nameUpdateModes } from '../state'

const MinHooks: React.FC = () => (
  <StoreContext.Consumer>
    {({ state }) => (
      <section className={state.cssSheet.classes.container}>
        <WidgetHeader />
        <Frame
          className="frame"
        >
          <AddUpdate
            mode={state.nameUpdateMode}
            updateModes={nameUpdateModes}
          />
          <WidgetList />
          <MessageControl />
          <MessageDisplay />
        </Frame>
      </section>
    )}
  </StoreContext.Consumer>
)

export default MinHooks
