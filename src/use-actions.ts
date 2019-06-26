import { StateInterface } from './state'
import { actionTypes } from './reducer'
import { ActionsInterface } from './action'

function useAction(state: StateInterface, dispatch: (arg0: object) => void)
  : ActionsInterface {
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
