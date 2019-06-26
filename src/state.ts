export interface StateInterface {
  widgetNames: Array<string>;
  lastUpdate: string;
  isShowingMessage: boolean;
  message: string;
}

const defaultState = {
  widgetNames: [],
  lastUpdate: '',
  isShowingMessage: false,
  message: '',
}

export default defaultState
