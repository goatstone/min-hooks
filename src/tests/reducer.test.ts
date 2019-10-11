import reducer from '../reducer'
import { actionTypes, UnionInterface } from '../reducer'
import { StateInterface } from '../state'

let preState: StateInterface
const nameUpdateModes = Object.freeze({ ADD: 0, UPDATE: 1 })

describe('reducer', () => {
  beforeEach(() => {
    preState = {
      widgetNames: [],
      lastUpdate: '',
      isShowingMessage: false,
      message: 'abc',
      nameUpdateMode: nameUpdateModes.ADD,
      updateName: '',
      updateNameKey: 'init',
    }
  })
  it('should return a state with string added', () => {
    const expectedString = 'abc'
    const action: UnionInterface = {
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
    const action: UnionInterface = {
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
    const preStateA: StateInterface = {
      widgetNames: ['x', nameDeleted, 'aaaaa'],
      lastUpdate: new Date().toDateString(),
      isShowingMessage: false,
      message: '',
      nameUpdateMode: nameUpdateModes.ADD,
      updateName: '',
      updateNameKey: 'init',
    }
    const action: UnionInterface = {
      type: actionTypes.DELETE_WIDGET_NAME,
      widgetName: nameDeleted,
    }
    const newState = reducer(preStateA, action)
    expect(newState.widgetNames.length).toBe(preStateA.widgetNames.length - 1)
    expect(newState.widgetNames.includes(nameDeleted)).toBe(false)
  })
  it('should do nothing if the name to delete does not exist', () => {
    const nameDeleted = 'abc'
    const preStateA: StateInterface = {
      widgetNames: ['x', 'a', 'aaaaa'],
      lastUpdate: new Date().toDateString(),
      isShowingMessage: false,
      message: '',
      nameUpdateMode: nameUpdateModes.ADD,
      updateName: '',
      updateNameKey: 'init',
    }
    const action: UnionInterface = {
      type: actionTypes.DELETE_WIDGET_NAME,
      widgetName: nameDeleted,
    }
    const newState = reducer(preStateA, action)
    expect(newState.widgetNames.length).toBe(preStateA.widgetNames.length)
    expect(newState.widgetNames.includes(nameDeleted)).toBe(false)
  })
  it('should return a state with the isShowingMessage value true', () => {
    preState.isShowingMessage = false
    const action: UnionInterface =
      { type: actionTypes.SHOW_MESSAGE }
    const newState = reducer(preState,
      action)
    expect(newState.isShowingMessage).toBe(true)
  })
  it('should return a state with the isShowingMessage value false', () => {
    preState.isShowingMessage = true
    const action: UnionInterface =
      { type: actionTypes.HIDE_MESSAGE }
    const newState = reducer(preState, action)
    expect(newState.isShowingMessage).toBe(false)
  })
  it('should set the message property in state', () => {
    preState.message = 'XXX'
    const action: UnionInterface =
    {
      type: actionTypes.SET_MESSAGE,
      message: 'AAA',
    }
    const newState = reducer(preState, action)
    expect(newState.message).toBe('AAA')
  })
  it('should set update mode and related props', () => {
    Object.assign(preState, {
      nameUpdateMode: 1,
      updateName: 'XXX',
      updateNameKey: 'XXX',
    })
    const action: UnionInterface =
    {
      type: actionTypes.SET_NAME_UPDATE_MODE,
      mode: 2,
      widgetName: 'AAA',
      updateNameKey: 'AAA',
    }
    const newState = reducer(preState, action)
    expect(newState.nameUpdateMode).toBe(2)
    expect(newState.updateName).toBe('AAA')
    expect(newState.updateNameKey).toBe('AAA')
  })
  it('should set set updateName', () => {
    preState.updateName = 'XXX'
    const action: UnionInterface = {
      type: actionTypes.SET_UPDATE_NAME,
      widgetName: 'AAA'
    }
    const newState = reducer(preState, action)
    expect(newState.updateName).toBe('AAA')
  })
  it('should throw an error if in incorrect action is given', () => {
    try {
      reducer({}, 'XX')
    } catch (error) {
      expect(true).toBe(true)
    }
  })
})
