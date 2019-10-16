import React from 'react'
import { act } from 'react-dom/test-utils'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import WidgetList from '../components/WidgetList'

Enzyme.configure({ adapter: new Adapter() })

const mockaddWidgetName = jest.fn()
jest.mock('../components/StoreContext', () => (
  {
    StoreContext: {
      Consumer: props => (props.children({
        actions: {
          // addWidgetName: mockaddWidgetName,
        },
      })
      ),
    },
  }
))

describe.skip('WidgetList', () => {
  it('should mount and display a list', () => {
    const el = mount(
      <WidgetList />,
    )

    expect(el.find('input').length).toBe(1)
  })
})
