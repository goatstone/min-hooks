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
        name: 'xxx'
      }
      actions.addWidgetName(expectedDispatchArg.name)
      expect(dispatch).toBeCalledWith(expectedDispatchArg)
    })
  })
})
