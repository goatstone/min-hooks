import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import MinHooks from '../components/MinHooks'
import { StoreProvider } from '../components/StoreContext'

Enzyme.configure({ adapter: new Adapter() })

describe('Top Level Components', () => {
  it('should mount without error', () => {
    try {
      mount(
        <StoreProvider>
          <MinHooks />
        </StoreProvider>,
      )
    } catch (e) {
      expect(true).toBe(false)
    }
  })
})
