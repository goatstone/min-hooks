import React from 'react'
import useActions from '../use-actions'
import { ActionsInterface } from '../action'
import { StateInterface } from '../state'
import reducer from '../reducer'

let actions: ActionsInterface
let initState: StateInterface = {
  widgetNames: [],
  lastUpdate: '',
  isShowingMessage: false,
}
// mock goes here
let dispatch = () => { }
describe('useActions', () => {
  beforeEach(() => {
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
  beforeEach(() => {
    actions = useActions(initState, dispatch)
  })
  describe('addWidgeName', () => {
    it('should call dispatch with a specific object', () => {
      actions.addWidgetName('xxx')
    })
    // check mock here
    expect(2).toBe(2)
  })
})
