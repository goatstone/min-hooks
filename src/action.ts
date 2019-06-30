import { StateInterface } from './state'
import { actionTypes, dispatchInterface } from './reducer'

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
interface setNameUpdateModeInterface {
  (mode: number, widgetName: string, updateNameKey: string): void
}
interface setUpdateNameInerface {
  (widgetName: string, updateNameKey: string) : void
}
export interface AppActionsInterface {
  addWidgetName: addWidgetNameInterface
  editWidgetName: editWidgeNameInerface
  deleteWidgetName: deleteWidgetNameInterface
  showMessage: showMessageInterface
  hideMessage: hideMessageInerface
  setMessage: setMessageInterface
  setNameUpdateMode: setNameUpdateModeInterface
  setUpdateName: setUpdateNameInerface
}

function useAction(state: StateInterface, dispatch: dispatchInterface)
  : AppActionsInterface {
  function addWidgetName(widgetName: string): void {
    if (state.widgetNames.includes(widgetName)) {
      dispatch({
        type: actionTypes.SHOW_MESSAGE,
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
  function setNameUpdateMode(mode: number, widgetName: string, updateNameKey: string) {
    dispatch({
      type: actionTypes.SET_NAME_UPDATE_MODE, mode, widgetName, updateNameKey,
    })
  }
  function setUpdateName(widgetName: string) {
    dispatch({ type: actionTypes.SET_UPDATE_NAME, widgetName })
  }
  return {
    addWidgetName,
    editWidgetName,
    deleteWidgetName,
    showMessage,
    hideMessage,
    setMessage,
    setNameUpdateMode,
    setUpdateName,
  }
}

export default useAction
