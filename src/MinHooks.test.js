import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

beforeEach(() => {
  jest.resetModules()
})

describe('<MinHooks />', () => {
  let MinHooks
  let StoreProvider
  let mockexpectedA = '32'
  beforeAll(() => {
    jest.mock('./init-state', () => ({
        a: mockexpectedA, b: 2  
    }))
    StoreProvider = require('./StoreContext').StoreProvider
    MinHooks = require('./MinHooks').default
  })
  it('should have the value set in init', () => {
    const is = require('./init-state')
    const w = mount(
      <StoreProvider>
        <MinHooks />
      </StoreProvider>
    )

    expect(w.find('article').length).toBe(1)
    expect(w.find('article').text()).toBe(mockexpectedA)
  })
})
