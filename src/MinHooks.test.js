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

describe('<MinHooks />', () => {
  let element
  beforeAll(() => {
    jest.mock('./init-state', () => ({
      a: mockexpectedA, b: 2,
    }))
    /* eslint prefer-destructuring: 0 */
    StoreProvider = require('./StoreContext').StoreProvider
    MinHooks = require('./MinHooks').default
    element = mount(
      <StoreProvider>
        <MinHooks />
      </StoreProvider>,
    )
  })
  it('should have a particular shape', () => {
    expect(element.find('article').length).toBe(1)
    expect(element.find('header').length).toBe(1)
  })
  it('should have the value set in initState', () => {
    expect(element.find('article').text()).toBe(mockexpectedA)
  })
})
