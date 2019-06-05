import React from 'react'
import useActions from '../use-actions'
import { ActionsInterface } from '../action'
import { StateInterface } from '../state'
import reducer from '../reducer'
import { actionTypes } from '../reducer'

let actions: ActionsInterface
let initState: StateInterface = {
  widgetNames: [],
  lastUpdate: '',
  isShowingMessage: false,
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
  let dispatch
  beforeEach(() => {
    dispatch = jest.fn()
    actions = useActions(initState, dispatch)
  })
  describe('addWidgeName', () => {
    it('should call dispatch with a specific object', () => {
      const expectedDispatchArg = {
        type: actionTypes.ADD_WIDGET_NAME,
        widgetName: 'xxx'
      }
      actions.addWidgetName(expectedDispatchArg.widgetName)
      expect(dispatch).toBeCalledWith(expectedDispatchArg)
    })
  })
  describe('editWidgeName', () => {
    it('should call dispatch with a specific object', () => {
      const expectedDispatchArg = {
        type: actionTypes.EDIT_WIDGET_NAME,
        widgetName: 'xxx'
      }
      actions.editWidgetName(expectedDispatchArg.widgetName)
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
    it ('should call dispatch with a certain object', () => {
      const expectedDispatchArg = {
        type: actionTypes.HIDE_MESSAGE,
      }
      actions.hideMessage()
      expect(dispatch).toBeCalledWith(expectedDispatchArg)
    })
  })
})
