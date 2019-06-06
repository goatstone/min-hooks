import React from 'react'
import './MinHooks.css'
import { StoreContext } from './StoreContext'
import { StateInterface } from './state'

interface StoreContextInterface {
  readonly state: StateInterface
  readonly actions: any
}
/*
  <Widgets>
    <WidgetHeader />
    <WidgetManager>
      <h3>header</h3>
      <WidgetList>
    </WidgetManager>
    <WidgetControl>
      <h3>header</h3>
      <WidgetAdd />
      <WidgetEdit />
    </WidgetControl>
    <WidgetMessage>
  </Widgets>
*/
const WidgetHeader: React.FC = () => (
  <section>
    <header>
      Widgets
    </header>
  </section>
)
const Widgets: React.FC = ({ children } : any) => (
  <section className="min-hooks">
    {children}
  </section>
)
const WidgetListManage: React.FC = ({ children } : any) => (
  <section className="widget-manage">
    {children}
  </section>
)
const WidgetControl: React.FC = ({ children } : any) => (
  <section className="widget-control">
    {children}
  </section>
)
const Message: React.FC = ({ children } : any) => (
  <section className="message">
    {children}
  </section>
)
const LocalState: React.FC = ({ children } : any) => (
  <section className="local-state">
    {children}
  </section>
)
const MinHooks: React.FC = () => {
  // local state
  const [localState, localSetState] = React.useState('abc')
  // global state
  const { state, actions }: StoreContextInterface = React.useContext(StoreContext)

  return (
    <section className="min-hooks">
      <Widgets>
        <WidgetHeader />
        <WidgetListManage>
          <h3>
            Widget Name List
          </h3>
          <ul>
            {
              state.widgetNames.map(el => (
                <li key={`${el}${Math.random()}`}>
                  {el}
                </li>
              ))
            }
          </ul>
        </WidgetListManage>
        <WidgetControl>
          <h3>Actions</h3>
          <button
            type="button"
            className="add-widget"
            onClick={() => actions.addWidgetName('abc')}
          >
            Add Widget Name
          </button>
          <button
            type="button"
            className="add-widget"
            onClick={() => actions.editWidgetName('abc', 'ss')}
          >
            Edit Widget Name
          </button>
          <button
            type="button"
            className="add-widget"
            onClick={() => actions.deleteWidgetName('abc')}
          >
            Delete Widget Name
          </button>
        </WidgetControl>
      </Widgets>
      <Message>
        <h3>Show Message</h3>
        <button
          type="button"
          className="global-state"
          onClick={actions.showMessage}
        >
          set to true
        </button>
        <button
          type="button"
          className="global-state-2"
          onClick={actions.hideMessage}
        >
          set to false
        </button>
        <article className="global-state">
          {state.isShowingMessage ? 'T' : 'F'}
        </article>
      </Message>
      <LocalState>
        <h3>Local State</h3>
        <button
          type="button"
          className="local-state"
          onClick={() => localSetState('xxx')
          }
        >
          set local state
        </button>
        <article className="local-state">
          {localState}
        </article>
      </LocalState>
    </section>
  )
}

export default MinHooks
