import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { JSDOM } from 'jsdom'

Enzyme.configure({ adapter: new Adapter() })
const jsdom = new JSDOM('<!doctype html><html><body></body></html>')
const { window } = jsdom

beforeEach(() => {
  jest.resetModules()
})

describe('index', () => {
  beforeAll(() => {
    global.window = window
    global.document = window.document
  })
  it('should have the value set in initState', () => {
    Object.defineProperty(document, 'getElementById', {
      value: () => document.createElement('div'),
    })
    try {
      require('../index')
    } catch (error) {
      // fail the test on error
      expect(false).toBe(true)
    }
  })
})
