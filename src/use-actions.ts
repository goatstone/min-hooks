import { StateInterface } from './state'
import { ActionsInterface, actionTypes } from './action'

function useAction(state: StateInterface, dispatch: (arg0: object) => void):
ActionsInterface {
  function addWidgetName(widgetName: string): void {
    if (state.widgetNames.includes(widgetName)) {
      dispatch({
        type: actionTypes.SHOW_MESSAGE,
        message: 'Name exists in list.',
      })
    } else {
      dispatch({
        type: actionTypes.ADD_WIDGET_NAME,
        name: widgetName,
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
  function deleteWidgetName() {

  }
  function showMessage() {

  }
  function hideMessage() {

  }
  return {
    addWidgetName,
    editWidgetName,
    deleteWidgetName,
    showMessage,
    hideMessage,
  }
}

export default useAction
