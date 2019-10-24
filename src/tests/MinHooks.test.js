import React from 'react'
import { act } from 'react-dom/test-utils'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import MinHooks from '../components/MinHooks'
import { nameUpdateModes } from '../state'

Enzyme.configure({ adapter: new Adapter() })

const mocknameUpdateMode = jest.fn(() => nameUpdateModes.UPDATE)
const mocksetMessage = jest.fn()
const mockshowMessage = jest.fn()
const mockisShowingMessage = jest.fn(() => true)
jest.mock('../components/StoreContext', () => (
  {
    StoreContext: {
      Consumer: props => (props.children({
        state: {
          updateName: 'X',
          nameUpdateMode: mocknameUpdateMode(),
          lastUpdate: '',
          widgetNames: ['X'],
          isShowingMessage: mockisShowingMessage(),
          message: 'X',
          cssSheet: { classes: { container: 'X' } },
        },
        actions: {
          showMessage: mockshowMessage,
          setMessage: mocksetMessage,
        },
      })
      ),
    },
  }
))

describe('<MinHooks />', () => {
  it('should mount and have certain elements', () => {
    let wrapper
    act(() => {
      wrapper = mount(
        <MinHooks />,
      )
    })
    expect(wrapper.find('section').length).toBe(1)
    expect(wrapper.find('WidgetHeader').length).toBe(1)
    expect(wrapper.find('WidgetList').length).toBe(1)
    expect(wrapper.find('MessageControl').length).toBe(1)
    expect(wrapper.find('MessageDisplay').length).toBe(1)
  })
  it('should contain information from state', () => {
    let wrapper
    act(() => {
      wrapper = mount(
        <MinHooks />,
      )
    })
    expect(wrapper.find('WidgetList').length).toBe(1)
    expect(wrapper.contains('X')).toBe(true)
  })
  it('should display AddWidget, hide WidgetAdd depending on state', () => {
    let wrapper
    act(() => {
      mocknameUpdateMode.mockReturnValueOnce(nameUpdateModes.UPDATE)
      wrapper = mount(
        <MinHooks />,
      )
    })
    expect(wrapper.find('WidgetUpdate').length).toBe(1)
    expect(wrapper.find('WidgetAdd').length).toBe(0)
  })
  it('should display EditWidget hide WidgetUpdate depending on state', () => {
    let wrapper
    act(() => {
      mocknameUpdateMode.mockReturnValueOnce(nameUpdateModes.ADD)
      wrapper = mount(
        <MinHooks />,
      )
    })
    expect(wrapper.find('WidgetUpdate').length).toBe(0)
    expect(wrapper.find('WidgetAdd').length).toBe(1)
  })
})
