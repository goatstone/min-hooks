import actionTypes from './action-types'

function replaceName(state, action) {
  const newArray = [...state.widgetNames]
  const indexOfWidgetName = state.widgetNames.indexOf(action.previousName)
  newArray[indexOfWidgetName] = action.newName
  return newArray
}
function reducer(state, action) {
  switch (action.type) {
    case actionTypes.ADD_WIDGET_NAME:
      return Object.assign({}, state, {
        widgetNames: [action.name, ...state.widgetNames],
      })
    case actionTypes.EDIT_WIDGET_NAME:
      return Object.assign(
        {},
        state,
        { widgetNames: replaceName(state, action) },
      )
    case actionTypes.DELETE_WIDGET_NAME:
      return Object.assign({}, state)
    case actionTypes.SHOW_MESSAGE:
      return Object.assign({}, state)
    default:
      throw new Error('action type does not exist')
  }
}
export default reducer
