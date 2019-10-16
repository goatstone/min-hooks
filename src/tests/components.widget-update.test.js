import React from 'react'
import { act } from 'react-dom/test-utils'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import WidgetUpdate from '../components/WidgetUpdate'

Enzyme.configure({ adapter: new Adapter() })

const mockdeleteWidgetName = jest.fn()
const mocksetNameUpdateMode = jest.fn()
jest.mock('../components/StoreContext', () => (
  {
    StoreContext: {
      Consumer: props => (props.children({
        state: {
          updateName: ['X'],
        },
        actions: {
          editWidgetName: mockdeleteWidgetName,
          setUpdateName: mocksetNameUpdateMode,
        },
      })
      ),
    },
  }
))

describe('WidgeUpdate', () => {
  it('should mount and display a list', () => {
    let wrapper
    act(() => {
      wrapper = mount(
        <WidgetUpdate />,
      )
    })

    expect(wrapper.find('article').length).toBe(1)
  })
})
