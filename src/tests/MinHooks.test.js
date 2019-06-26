import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

let MinHooks
let StoreProvider

beforeEach(() => {
  jest.resetModules()
})

describe('<MinHooks />', () => {
  let element
  beforeAll(() => {
    jest.mock('../state', () => ({
      widgetNames: [],
      lastUpdated: '',
      isShowingMessage: false,
    }))
    /* eslint prefer-destructuring: 0 */
    StoreProvider = require('../StoreContext').StoreProvider
    MinHooks = require('../MinHooks').default
    element = mount(
      <StoreProvider>
        <MinHooks />
      </StoreProvider>,
    )
  })
  it('should have a particular shape', () => {
    expect(element.find('section.min-hooks header').length).toBe(1)
    expect(element.find('section.min-hooks article').length).toBe(4)
  })
  it('should respond to a global button show false', () => {
    expect(element.find('article.message-display'))
    expect(element.find('article.message-display').text()).toBe('')

    element.find('article.message-control button.show-message').simulate('click')

    expect(element.find('article.message-display').text()).toBe('message')
  })
})
