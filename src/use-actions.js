import actionTypes from './action-types'

function useAction(state, dispatch) {
  function addWidgetName(widgetName) {
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
