import React from 'react'
import { act } from 'react-dom/test-utils'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import WidgetList from '../components/WidgetList'

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

describe('WidgetList', () => {
  it('should mount and display a list', () => {
    let wrapper
    act(() => {
      wrapper = mount(
        <WidgetList />,
      )
    })

    expect(wrapper.find('article').length).toBe(1)
  })
  it('should call the the correct context action methods', () => {
    let wrapper
    act(() => {
      wrapper = mount(
        <WidgetList />,
      )
    })
    wrapper.find('button[name="delete"]').prop('onClick')('widget name')
    wrapper.find('button[name="edit"]').prop('onClick')('X', 'X', 'X')

    expect(mockdeleteWidgetName.mock.calls.length).toBe(1)
    expect(mocksetNameUpdateMode.mock.calls.length).toBe(1)
  })
})
