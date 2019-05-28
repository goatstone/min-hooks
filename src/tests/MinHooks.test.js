import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

let MinHooks
let StoreProvider
const mockexpectedA = '32'

beforeEach(() => {
  jest.resetModules()
})

describe.skip('<MinHooks />', () => {
  let element
  beforeAll(() => {
    jest.mock('../init-state', () => ({
      a: mockexpectedA, b: 2,
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
    expect(element.find('article').length).toBe(2)
    expect(element.find('button').length).toBe(2)
    expect(element.find('header').length).toBe(1)
  })
  it('should have the value set in initState', () => {
    expect(element.find('article.global-state').text()).toBe(mockexpectedA)
  })
  it('should respond to local button ', () => {
    expect(element.find('article.local-state').text()).toBe('abc')
    element.find('button.local-state').simulate('click')
    expect(element.find('article.local-state').text()).toBe('xxx')
  })
  it('should respond to a global button', () => {
    expect(element.find('article.global-state').text()).toBe(mockexpectedA)
    expect(element.find('button.global-state').length).toBe(1)
    element.find('button.global-state').simulate('click')
    expect(element.find('article.global-state').text()).toBe('2000')
  })
})
