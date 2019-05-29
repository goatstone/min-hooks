import useActions from '../use-actions'

let actions
describe('useActions', () => {
  beforeEach(() => {
    actions = useActions({}, () => {})
  })
  it('should be a function', () => {
    expect(typeof useActions).toBe('function')
  })
  it('should return an object with specific properties', () => {
    expect(actions).toHaveProperty('addWidgetName')
  })
})
