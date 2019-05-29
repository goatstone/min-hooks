import reducer from '../reducer'
import actionTypes from '../action-types'

let preState

describe('reducer', () => {
  beforeEach(() => {
    preState = {
      widgetNames: [],
      lastUpdate: '',
      isMessageShowing: false,
    }
  })
  it('should return a state with string added', () => {
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
  it('should return a state with an edited value', () => {
    const previousName = 'abc'
    const newName = 'xyz'
    preState.widgetNames.push(previousName)
    const newState = reducer(preState,
      {
        type: actionTypes.EDIT_WIDGET_NAME,
        previousName,
        newName,
      })
    expect(newState).toBeTruthy()
    expect(newState.widgetNames[newState.widgetNames.length - 1])
      .toBe(newName)
  })
  it('should delete a given name', () => {
    const nameDeleted = 'abc'
    preState.widgetNames.push(nameDeleted)
    const newState = reducer(preState,
      {
        type: actionTypes.DELETE_WIDGET_NAME,
        name: nameDeleted,
      })
    expect(newState.widgetNames.length).toBe(preState.widgetNames.length - 1)
    expect(newState.widgetNames.includes(nameDeleted)).toBe(false)
  })
  it('should return a state with the isMessageShowing value true', () => {
    preState.isMessageShowing = false
    const newState = reducer(preState,
      { type: actionTypes.SHOW_MESSAGE })
    expect(newState.isMessageShowing).toBe(true)
  })
  it('should return a state with the isMessageShowing value false', () => {
    preState.isMessageShowing = true
    const newState = reducer(preState,
      { type: actionTypes.HIDE_MESSAGE })
    expect(newState.isMessageShowing).toBe(false)
  })
})
