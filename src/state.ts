export interface StateInterface {
  widgetNames: Array<string>;
  lastUpdate: string;
  isShowingMessage: boolean;
  message: string;
}

const defaultState = {
  widgetNames: ['a', 'b', 'c'],
  lastUpdate: '',
  isShowingMessage: false,
  message: '',
}

export default defaultState
