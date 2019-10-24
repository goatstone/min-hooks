import React from 'react'
import { act } from 'react-dom/test-utils'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {
  MessageControl,
  MessageDisplay,
} from '../components/Message'

Enzyme.configure({ adapter: new Adapter() })

const mockshowMessage = jest.fn()
const mocksetMessage = jest.fn()
const mockisShowingMessage = jest.fn(() => true)
jest.mock('../components/StoreContext', () => (
  {
    StoreContext: {
      Consumer: props => (props.children({
        state: {
          widgetNames: ['X'],
          isShowingMessage: mockisShowingMessage(),
          message: 'X',
          cssSheet: { classes: { messageDisplay: 'X' } },
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

describe('Message Component', () => {
  it('should mount and display Message Control and Display', () => {
    let wrapper
    act(() => {
      wrapper = mount(
        <React.Fragment>
          <MessageControl />
          <MessageDisplay />
        </React.Fragment>,
      )
    })

    expect(wrapper.find('article').length).toBe(2)
  })
  describe('MessageControl', () => {
    it('should call the correct action methods', () => {
      let wrapper
      act(() => {
        wrapper = mount(
          <React.Fragment>
            <MessageControl />
          </React.Fragment>,
        )
        wrapper.find('input[name="message"]').prop('onChange')({ target: { value: 'X' } })
        wrapper.find('button[name="set-message"]').prop('onClick')()
        wrapper.find('button[name="show-message"]').prop('onClick')()
      })

      expect(wrapper.find('input[name="message"]').length).toBe(1)
      expect(wrapper.find('button[name="set-message"]').length).toBe(1)
      expect(wrapper.find('button[name="show-message"]').length).toBe(1)
      expect(mocksetMessage.mock.calls.length).toBe(1)
      expect(mockshowMessage.mock.calls.length).toBe(1)
    })
  })
  describe('Message Display', () => {
    it('should should display the message depending on state', () => {
      let wrapper
      act(() => {
        wrapper = mount(
          <MessageDisplay />,
        )
      })
      expect(wrapper.find('article').length).toBe(1)
      expect(wrapper.find('article').text()).toBe('X')
    })
    it('should hide the display depending on state', () => {
      let wrapper
      mockisShowingMessage.mockReturnValueOnce(false)
      act(() => {
        wrapper = mount(
          <MessageDisplay />,
        )
      })
      expect(wrapper.find('article').text()).toBe('')
    })
  })
})
