export interface ActionsInterface {
  addWidgetName: (widgetName: string) => void
  editWidgetName: (widgetName: string, newWidgetName: string) => void
  deleteWidgetName: (widgetName: string) => void
  showMessage: (message: string) => void
  hideMessage: () => void
}

const actionTypes = {
  ADD_WIDGET_NAME: 'ADD_WIDGET_NAME',
  EDIT_WIDGET_NAME: 'EDIT_WIDGET_NAME',
  DELETE_WIDGET_NAME: 'DELETE_WIDGET_NAME',
  SHOW_MESSAGE: 'SHOW_MESSAGE',
  HIDE_MESSAGE: 'HIDE_MESSAGE',
}

export { actionTypes }
