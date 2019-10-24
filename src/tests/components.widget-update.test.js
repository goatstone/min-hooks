import React from 'react'
import { act } from 'react-dom/test-utils'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import WidgetUpdate from '../components/WidgetUpdate'

Enzyme.configure({ adapter: new Adapter() })

const mocksetNameUpdateMode = jest.fn()
const mockeditWidgetName = jest.fn()
const mocksetUpdateName = jest.fn()
jest.mock('../components/StoreContext', () => (
  {
    StoreContext: {
      Consumer: props => (props.children({
        state: {
          updateName: ['X'],
          cssSheet: {
            classes: { updateItem: 'X' },
          },
        },
        actions: {
          setNameUpdateMode: mocksetNameUpdateMode,
          editWidgetName: mockeditWidgetName,
          setUpdateName: mocksetUpdateName,
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
  it('should trigger the correct action method', () => {
    let wrapper
    act(() => {
      wrapper = mount(
        <WidgetUpdate />,
      )
    })
    wrapper.find('input[name="name"]').prop('onChange')({ target: { value: 'X' } })
    wrapper.find('button[name="update"]').prop('onClick')()

    expect(mocksetUpdateName.mock.calls.length).toBe(1)
    expect(mockeditWidgetName.mock.calls.length).toBe(1)
    expect(mocksetNameUpdateMode.mock.calls.length).toBe(1)
  })
})
