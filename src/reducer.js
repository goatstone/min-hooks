import actionTypes from './action-types'

function reducer(state, action) {
  switch (action.type) {
    case actionTypes.ADD_WIDGET_NAME:
      return Object.assign({}, state, {
        widgetNames: [action.name, ...state.widgetNames],
      })
    case actionTypes.EDIT_WIDGET_NAME:
      return Object.assign({}, state)
    case actionTypes.DELETE_WIDGET_NAME:
      return Object.assign({}, state)
    case actionTypes.SHOW_MESSAGE:
      return Object.assign({}, state)
    default:
      throw new Error('action type does not exist')
  }
}

export default reducer
