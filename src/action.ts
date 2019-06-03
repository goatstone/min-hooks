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
export interface ActionsInterface {
  addWidgetName: IaddWidgetName
  editWidgetName: IeditWidgeName
  deleteWidgetName: IdeleteWidgetName
  showMessage: IshowMessage
  hideMessage: ihideMessage
}
