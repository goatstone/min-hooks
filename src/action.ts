import { StateInterface } from './state'
import { actionTypes } from './reducer'

interface addWidgetNameInterface {
  (widgetName: string): void
}
interface editWidgeNameInerface {
  (widgetName: string, newWidgetName: string): void
}
interface deleteWidgetNameInterface {
  (widgetName: string): void
}
interface showMessageInterface {
  (): void
}
interface hideMessageInerface {
  (): void
}
interface setMessageInterface {
  (message: string): void
}
export interface AppActionsInterface {
  addWidgetName: addWidgetNameInterface
  editWidgetName: editWidgeNameInerface
  deleteWidgetName: deleteWidgetNameInterface
  showMessage: showMessageInterface
  hideMessage: hideMessageInerface
  setMessage: setMessageInterface
}

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
  function showMessage() {
    dispatch({
      type: actionTypes.SHOW_MESSAGE,
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
