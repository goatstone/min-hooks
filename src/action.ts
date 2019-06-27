import { StateInterface } from './state'
import { actionTypes } from './reducer'

export interface IaddWidgetName {
  (widgetName: string): void
}
export interface IeditWidgeName {
  (widgetName: string, newWidgetName: string): void
}
export interface IdeleteWidgetName {
  (widgetName: string): void
}
export interface IshowMessage {
  (message: string): void
}
export interface ihideMessage {
  (): void
}
export interface setMessageInterface {
  (message: string): void
}
export interface AppActionsInterface {
  addWidgetName: IaddWidgetName
  editWidgetName: IeditWidgeName
  deleteWidgetName: IdeleteWidgetName
  showMessage: IshowMessage
  hideMessage: ihideMessage
  setMessage: setMessageInterface
}
// import { AppActionsInterface } from './action'
// useAppAction
function useAction(state: StateInterface, dispatch: (arg0: object) => void)
  : AppActionsInterface {
  function addWidgetName(widgetName: string): void {
    if (state.widgetNames.includes(widgetName)) {
      dispatch({
        type: actionTypes.SHOW_MESSAGE,
        message: 'Name exists in list.',
      })
    } else {
      dispatch({
        type: actionTypes.ADD_WIDGET_NAME,
        widgetName,
      })
    }
  }
  function editWidgetName(widgetName: string, newWidgetName: string): void {
    dispatch({
      type: actionTypes.EDIT_WIDGET_NAME,
      widgetName,
      newWidgetName,
    })
  }
  function deleteWidgetName(widgetName: string) {
    dispatch({
      type: actionTypes.DELETE_WIDGET_NAME,
      widgetName,
    })
  }
  function showMessage(message: string) {
    dispatch({
      type: actionTypes.SHOW_MESSAGE,
      message,
    })
  }
  function hideMessage() {
    dispatch({ type: actionTypes.HIDE_MESSAGE })
  }
  function setMessage(message: string) {
    dispatch({ type: actionTypes.SET_MESSAGE, message })
  }
  return {
    addWidgetName,
    editWidgetName,
    deleteWidgetName,
    showMessage,
    hideMessage,
    setMessage,
  }
}

export default useAction
