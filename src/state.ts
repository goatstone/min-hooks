const nameUpdateModes = Object.freeze({ ADD: 0, UPDATE: 1 })

export interface StateInterface {
  widgetNames: Array<string>;
  lastUpdate: string;
  isShowingMessage: boolean;
  message: string;
  nameUpdateMode: number;
  updateName: string;
  updateNameKey: string;
}
const defaultState = {
  widgetNames: ['a', 'b', 'c'],
  lastUpdate: '',
  isShowingMessage: false,
  message: '',
  nameUpdateMode: nameUpdateModes.ADD,
  updateName: '',
  updateNameKey: 'init',
}

export { nameUpdateModes }
export default defaultState
