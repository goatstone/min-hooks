import React from 'react'
import { act } from 'react-dom/test-utils'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import WidgetAdd from '../components/WidgetAdd'

Enzyme.configure({ adapter: new Adapter() })

const mockaddWidgetName = jest.fn()
mockaddWidgetName()
jest.mock('../components/StoreContext', () => (
  {
    StoreContext: {
      Consumer: props => (props.children({
        actions: {
          addWidgetName: mockaddWidgetName,
        },
      })
      ),
    },
  }
))
describe('WidgetAdd', () => {
  it('should mount and call an action in its Context', () => {
    const el = mount(
      <WidgetAdd />,
    )
    act(() => {
      el.find('button').prop('onCLick')
    })
    expect(el.find('input').length).toBe(1)
    expect(el.find('button').length).toBe(1)
    expect(mockaddWidgetName.mock.calls.length).toBe(1)
  })
})
