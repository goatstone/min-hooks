import { StateInterface } from './state'

const actionTypes = {
  ADD_WIDGET_NAME: 'ADD_WIDGET_NAME',
  EDIT_WIDGET_NAME: 'EDIT_WIDGET_NAME',
  DELETE_WIDGET_NAME: 'DELETE_WIDGET_NAME',
  SHOW_MESSAGE: 'SHOW_MESSAGE',
  HIDE_MESSAGE: 'HIDE_MESSAGE',
}
export { actionTypes }

export interface Iaction {
  type: string
  widgetName: string
  newWidgetName?: string
}

function replaceName(state: StateInterface, action: Iaction): string[] {
  const newArray = [...state.widgetNames]
  const indexOfWidgetName = state.widgetNames.indexOf(action.widgetName)
  newArray[indexOfWidgetName] = action.newWidgetName
  return newArray
}
function deleteName(state: StateInterface, action: Iaction): string[] {
  const newArray = [...state.widgetNames]
  const indexOfWidgetName = state.widgetNames.indexOf(action.widgetName)
  if (indexOfWidgetName !== -1) newArray.splice(indexOfWidgetName, 1)
  return newArray
}
function reducer(state: StateInterface, action: Iaction): void {
  switch (action.type) {
    case actionTypes.ADD_WIDGET_NAME:
      return Object.assign({}, state, {
        widgetNames: [action.widgetName, ...state.widgetNames],
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
