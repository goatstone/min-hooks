import reducer from '../reducer'
import { actionTypes, Iaction } from '../reducer'
import { StateInerface } from '../state'

let preState: StateInerface

describe('reducer', () => {
  beforeEach(() => {
    preState = {
      widgetNames: [],
      lastUpdate: '',
      isShowingMessage: false,
    }
  })
  it('should return a state with string added', () => {
    const expectedString = 'abc'
    const action: Iaction = {
      type: actionTypes.ADD_WIDGET_NAME,
      widgetName: expectedString,
    }
    const newState = reducer(preState, action)
    expect(newState.widgetNames.length).toBe(1)
    expect(newState.widgetNames[newState.widgetNames.length - 1])
      .toBe(expectedString)
  })
  it('should return a state with an edited value', () => {
    const widgetName = 'abc'
    const newWidgetName = 'xyz'
    preState.widgetNames.push(widgetName)
    const action: Iaction = {
      type: actionTypes.EDIT_WIDGET_NAME,
      widgetName,
      newWidgetName,
    }
    const newState = reducer(preState, action)
    expect(newState).toBeTruthy()
    expect(newState.widgetNames[newState.widgetNames.length - 1])
      .toBe(newWidgetName)
  })
  it('should delete a given name', () => {
    const nameDeleted = 'abc'
    const preStateA = {
      widgetNames: ['x', nameDeleted, 'aaaaa'],
    }
    const action: Iaction = {
      type: actionTypes.DELETE_WIDGET_NAME,
      widgetName: nameDeleted,
    }
    const newState = reducer(preStateA, action)
    expect(newState.widgetNames.length).toBe(preStateA.widgetNames.length - 1)
    expect(newState.widgetNames.includes(nameDeleted)).toBe(false)
  })
  it('should do nothing if the name to delete does not exist', () => {
    const nameDeleted = 'abc'
    const preStateA = {
      widgetNames: ['x', 'a', 'aaaaa'],
    }
    const action: Iaction = {
      type: actionTypes.DELETE_WIDGET_NAME,
      widgetName: nameDeleted,
    }
    const newState = reducer(preStateA, action)
    expect(newState.widgetNames.length).toBe(preStateA.widgetNames.length)
    expect(newState.widgetNames.includes(nameDeleted)).toBe(false)
  })
  it('should return a state with the isShowingMessage value true', () => {
    preState.isShowingMessage = false
    const action: Iaction =
      { type: actionTypes.SHOW_MESSAGE }
    const newState = reducer(preState,
      action)
    expect(newState.isShowingMessage).toBe(true)
  })
  it('should return a state with the isShowingMessage value false', () => {
    preState.isShowingMessage = true
    const action: Iaction =
      { type: actionTypes.HIDE_MESSAGE }
    const newState = reducer(preState, action)
    expect(newState.isShowingMessage).toBe(false)
  })
  it('should throw an error when an incorrect action type is used', () => {
    expect(() => reducer({}, { type: 'DOES_NOT_EXIST' })).toThrow()
  })
})
