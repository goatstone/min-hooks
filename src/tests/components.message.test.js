import React from 'react'
import { act } from 'react-dom/test-utils'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {
  MessageControl,
} from '../components/Message'

Enzyme.configure({ adapter: new Adapter() })

const mockdeleteWidgetName = jest.fn()
const mocksetNameUpdateMode = jest.fn()
jest.mock('../components/StoreContext', () => (
  {
    StoreContext: {
      Consumer: props => (props.children({
        state: {
          widgetNames: ['X'],
        },
        actions: {
          deleteWidgetName: mockdeleteWidgetName,
          setNameUpdateMode: mocksetNameUpdateMode,
        },
      })
      ),
    },
  }
))

describe('Message Component', () => {
  it('should mount and display Message Control and Display', () => {
    let wrapper
    act(() => {
      wrapper = mount(
        <React.Fragment>
          <MessageControl />
        </React.Fragment>,
      )
    })

    expect(wrapper.find('article').length).toBe(1)
  })
})
