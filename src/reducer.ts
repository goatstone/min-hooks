import { actionTypes } from './action'
import { StateInterface } from './state'

function replaceName(state: StateInterface, action: any) {
  const newArray = [...state.widgetNames]
  const indexOfWidgetName = state.widgetNames.indexOf(action.previousName)
  newArray[indexOfWidgetName] = action.newName
  return newArray
}
function deleteName(state: StateInterface, action: any) {
  const newArray = [...state.widgetNames]
  newArray.splice(action.name, 1)
  return newArray
}
function reducer(state: StateInterface, action: any) {
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
      return Object.assign({}, state, { widgetNames: deleteName(state, action) })
    case actionTypes.SHOW_MESSAGE:
      return Object.assign({}, state, { isShowingMessage: true })
    case actionTypes.HIDE_MESSAGE:
      return Object.assign({}, state, { isShowingMessage: false })
    default:
      throw new Error(`action ${action.type} type does not exist`)
  }
}
export default reducer
