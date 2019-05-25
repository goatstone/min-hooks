import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import reducer from '../reducer'

Enzyme.configure({ adapter: new Adapter() })

beforeEach(() => {
  jest.resetModules()
})

describe('reducer', () => {
  beforeAll(() => {
  })
  it('should return proper values', () => {
    const a = reducer({ a: 2 }, { type: 'A' })
    expect(a.a).toBe(200)
  })
  it('should return proper values', () => {
    const a = reducer({ a: 2 }, { type: 'XX' })
    expect(a.a).toBe(2000)
  })
})
