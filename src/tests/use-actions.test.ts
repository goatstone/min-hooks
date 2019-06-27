import useActions from '../action'
import { AppActionsInterface } from '../action'
import { StateInterface } from '../state'
import { actionTypes } from '../reducer'

let actions: AppActionsInterface
let initState: StateInterface = {
  widgetNames: [],
  lastUpdate: '',
  isShowingMessage: false,
  message: ''
}

describe('useActions', () => {
  beforeEach(() => {
    const dispatch = jest.fn()
    actions = useActions(initState, dispatch)
  })
  it('should be a function', () => {
    expect(typeof useActions).toBe('function')
  })
  it('should return an object with specific properties', () => {
    expect(actions).toHaveProperty('addWidgetName')
  })
})
describe('actions', () => {
  let dispatch: any
  beforeEach(() => {
    dispatch = jest.fn()
    actions = useActions(initState, dispatch)
  })
  describe('addWidgeName', () => {
    it('should call dispatch with a specific object if argument value does not exist', () => {
      const iS = {
        widgetNames: []
      }
      const actionsA = useActions(initState, dispatch)
      const expectedDispatchArg = {
        type: actionTypes.ADD_WIDGET_NAME,
        widgetName: 'xxx'
      }
      actionsA.addWidgetName(expectedDispatchArg.widgetName)
      expect(dispatch).toBeCalledWith(expectedDispatchArg)
    })
    it('should call dispatch with a specific object if argument value does exist', () => {
      const widgetname = 'xxx'
      const testState = {
        widgetNames: [widgetname],
        lastUpdate: '',
        isShowingMessage: false,
        message: ''
      }
      const actions = useActions(testState, dispatch)
      const expectedDispatchArg = {
        type: actionTypes.SHOW_MESSAGE,
        message: 'Name exists in list.'
      }
      actions.addWidgetName(widgetname)
      expect(dispatch).toBeCalledWith(expectedDispatchArg)
    })
  })
  describe('editWidgeName', () => {
    it('should call dispatch with a specific object', () => {
      const expectedDispatchArg = {
        type: actionTypes.EDIT_WIDGET_NAME,
        widgetName: 'abc',
        newWidgetName: 'abcd'
      }
      actions.editWidgetName('abc', 'abcd')
        expect(dispatch).toBeCalledWith(expectedDispatchArg)
    })
  })
  describe('deleteWidgeName', () => {
    it('should call dispatch with a specific object', () => {
      const expectedDispatchArg = {
        type: actionTypes.DELETE_WIDGET_NAME,
        widgetName: 'xxx'
      }
      actions.deleteWidgetName(expectedDispatchArg.widgetName)
      expect(dispatch).toBeCalledWith(expectedDispatchArg)
    })
  })
  describe('showMessage', () => {
    it('should call dispatch with a specific object', () => {
      const expectedDispatchArg = {
        type: actionTypes.SHOW_MESSAGE,
        message: 'xxx'
      }
      actions.showMessage(expectedDispatchArg.message)
      expect(dispatch).toBeCalledWith(expectedDispatchArg)
    })
  })
  describe('hideMessage', () => {
    it('should call dispatch with a certain object', () => {
      const expectedDispatchArg = {
        type: actionTypes.HIDE_MESSAGE,
      }
      actions.hideMessage()
      expect(dispatch).toBeCalledWith(expectedDispatchArg)
    })
  })
})
