import { StateInterface } from './state'
import { ActionsInterface, actionTypes } from './action'

function useAction(state: StateInterface, dispatch: (arg0: object) => void): ActionsInterface {
  function addWidgetName(widgetName: string) : void{
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

  return { addWidgetName }
}

export default useAction
