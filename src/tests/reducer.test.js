import reducer from '../reducer'
import actionTypes from '../action-types'

let preState

describe('reducer', () => {
  beforeEach(() => {
    preState = { widgetNames: [], lastUpdate: '' }
  })
  it('should return new state with string added', () => {
    const expectedString = 'abc'
    const newState = reducer(
      preState,
      {
        type: actionTypes.ADD_WIDGET_NAME,
        name: expectedString,
      },
    )
    expect(newState.widgetNames.length).toBe(1)
    expect(newState.widgetNames[newState.widgetNames.length - 1])
      .toBe(expectedString)
  })
  it('should return proper values', () => {
    const newState = reducer(preState,
      { type: actionTypes.EDIT_WIDGET_NAME })
    expect(newState).toBeTruthy()
  })
  it('', () => {
    const newState = reducer(preState,
      { type: actionTypes.DELETE_WIDGET_NAME })
    expect(newState).toBeTruthy()
  })
  it('', () => {
    const newState = reducer(preState,
      { type: actionTypes.SHOW_MESSAGE })
    expect(newState).toBeTruthy()
  })
})
