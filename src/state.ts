const nameUpdateModes = Object.freeze({ ADD: 0, UPDATE: 1 })

export interface StateInterface {
  widgetNames: Array<string>;
  lastUpdate: string;
  isShowingMessage: boolean;
  message: string;
  nameUpdateMode: number;
  updateName: string;
  updateNameKey: string;
  cssSheet: object;
}
const defaultState = {
  widgetNames: ['a', 'b', 'c'],
  lastUpdate: '',
  isShowingMessage: true,
  message: 'Welcome',
  nameUpdateMode: nameUpdateModes.ADD,
  updateName: '',
  updateNameKey: 'init',
  cssSheet: { classes: {} },
}

export { nameUpdateModes }
export default defaultState
