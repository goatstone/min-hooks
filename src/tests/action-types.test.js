import { actionTypes } from '../reducer'

describe('actionTypes', () => {
  it('should return and object', () => {
    expect(actionTypes).toHaveProperty('ADD_WIDGET_NAME')
    expect(actionTypes).toHaveProperty('EDIT_WIDGET_NAME')
    expect(actionTypes).toHaveProperty('DELETE_WIDGET_NAME')
    expect(actionTypes).toHaveProperty('SHOW_MESSAGE')
  })
})
