import initState from '../state'

describe('State', () => {
  it('should have certain properties', () => {
    expect(initState).toHaveProperty('widgetNames')
    expect(initState).toHaveProperty('lastUpdate')
    expect(initState).toHaveProperty('isShowingMessage')
  })
  it('the properties should be of particular types', () => {
    expect(Array.isArray(initState.widgetNames)).toBe(true)
    expect(typeof initState.lastUpdate).toBe('string')
    expect(typeof initState.isShowingMessage).toBe('boolean')
  })
})
