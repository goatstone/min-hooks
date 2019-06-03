export interface IaddWidgetName {
  (widgetName: string): void
}
export interface ActionsInterface {
  addWidgetName: IaddWidgetName
  editWidgetName: (widgetName: string, newWidgetName: string) => void
  deleteWidgetName: (widgetName: string) => void
  showMessage: (message: string) => void
  hideMessage: () => void
}
