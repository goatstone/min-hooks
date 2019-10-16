import React from 'react'
import { act } from 'react-dom/test-utils'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import WidgetList from '../components/WidgetList'

Enzyme.configure({ adapter: new Adapter() })

const mockdeleteWidgetName = jest.fn()
jest.mock('../components/StoreContext', () => (
  {
    StoreContext: {
      Consumer: props => (props.children({
        state: {
          widgetNames: [],
        },
        actions: {
          deleteWidgetName: mockdeleteWidgetName,
          setNameUpdateMode: () => { },
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
})
