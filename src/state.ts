export interface StateInterface {
  widgetNames: Array<string>;
  lastUpdate: string;
  isShowingMessage: boolean;
}

const defaultState = {
  widgetNames: [],
  lastUpdate: '',
  isShowingMessage: false,
}

export default defaultState
