import { StateInterface } from './state'

enum actionTypes {
  ADD_WIDGET_NAME = 'ADD_WIDGET_NAME',
  EDIT_WIDGET_NAME = 'EDIT_WIDGET_NAME',
  DELETE_WIDGET_NAME = 'DELETE_WIDGET_NAME',
  SHOW_MESSAGE = 'SHOW_MESSAGE',
  HIDE_MESSAGE = 'HIDE_MESSAGE',
  SET_MESSAGE = 'SET_MESSAGE',
  SET_NAME_UPDATE_MODE = 'SET_NAME_UPDATE_MODE',
}
export { actionTypes }
export interface SetMessageActionInterface {
  type: typeof actionTypes.SET_MESSAGE
  message: string
}
export interface HideMessageActionInterface {
  type: typeof actionTypes.HIDE_MESSAGE
}
export interface ShowMessageActionInterface {
  type: typeof actionTypes.SHOW_MESSAGE
}
export interface DeleteNameActionInterface {
  type: typeof actionTypes.DELETE_WIDGET_NAME
  widgetName: string
}
export interface Iaction {
  type: typeof actionTypes.ADD_WIDGET_NAME
  widgetName: string
}
interface EditNameActionInterface {
  type: typeof actionTypes.EDIT_WIDGET_NAME
  widgetName: string
  newWidgetName: string
}
interface SetUpdateNameMode {
  type: typeof actionTypes.SET_NAME_UPDATE_MODE
  mode: number
  widgetName: string
}
export type UnionInterface =
  | EditNameActionInterface
  | Iaction
  | DeleteNameActionInterface
  | ShowMessageActionInterface
  | HideMessageActionInterface
  | SetMessageActionInterface
  | SetUpdateNameMode

export interface dispatchInterface {
  (arg0: UnionInterface): void
}
function replaceName(state: StateInterface, widgetName: string, newWidgetName: string): string[] {
  const newArray = [...state.widgetNames]
  const indexOfWidgetName: number = state.widgetNames.indexOf(widgetName)
  newArray[indexOfWidgetName] = newWidgetName
  return newArray
}
function deleteName(state: StateInterface, widgetName: string): string[] {
  const newArray = [...state.widgetNames]
  const indexOfWidgetName = state.widgetNames.indexOf(widgetName)
  if (indexOfWidgetName !== -1) newArray.splice(indexOfWidgetName, 1)
  return newArray
}
function reducer(state: StateInterface, action: UnionInterface): StateInterface {
  switch (action.type) {
    case actionTypes.ADD_WIDGET_NAME:
      return Object.assign({}, state, {
        widgetNames: [action.widgetName, ...state.widgetNames],
      })
    case actionTypes.EDIT_WIDGET_NAME:
      return Object.assign(
        {},
        state,
        { widgetNames: replaceName(state, action.widgetName, action.newWidgetName) },
      )
    case actionTypes.DELETE_WIDGET_NAME:
      return Object.assign({}, state, { widgetNames: deleteName(state, action.widgetName) })
    case actionTypes.SHOW_MESSAGE:
      return Object.assign({}, state, { isShowingMessage: true })
    case actionTypes.HIDE_MESSAGE:
      return Object.assign({}, state, { isShowingMessage: false })
    case actionTypes.SET_MESSAGE:
      return Object.assign({}, state, { message: action.message })
    case actionTypes.SET_NAME_UPDATE_MODE:
      return Object.assign({}, state,
        { nameUpdateMode: action.mode, updateName: action.widgetName })
    default:
      throw new Error('action type does not exist')
  }
}
export default reducer
