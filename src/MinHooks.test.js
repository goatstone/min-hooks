import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { StoreProvider } from './StoreContext'

import MinHooks from './MinHooks'

Enzyme.configure({ adapter: new Adapter() });

beforeEach(() => {
  jest.resetModules()
})

describe('<MinHooks />', () => {
  it('render certain elements', () => {
    const w = mount(
      <StoreProvider>
        <MinHooks />
      </StoreProvider>
    )
    expect(w.find('header').length).toBe(1)
    expect(w.find('button').length).toBe(2)
  })

})
