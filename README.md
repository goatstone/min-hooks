# MinHooks  <img src="art/min-hooks-art.png" alt="drawing" width="75"/>

A project to layout global and local state patterns with React, React Hooks, and Context. 

This repository intends to provide a compact version of commonly used patterns in React. It should be useful in the investigation of these patterns and how potentially other patterns could be used in conjunction with the existing patterns.

The example application functions to enable the maintenance of a list of widget names.
The user can view, add, update, and delete widgets on this list.
A messages system exists to display messages.

## Flux Style global State
A Flux style pattern is used to maintain state in the entire application. This global state consists of actions, dispatcher, stores, and views. The pattern is described in many places. I am familiar with the explanation provide by the Flux library (Flux)[].
Key points of the Flux pattern:
A one-way flow from Actions to Views. Views initiate Action flow.
One way flow through Action, Dispatcher, State, and View
This Flux pattern is created with React Hooks and combined with React Context to create the global state.

### Actions
Actions are provided as a way of interacting with the applicaiton
```
    acions.addWidgetName
    actions.editWidgetName,
    actions.deleteWidgetName,
    actions.showMessage,
```
### Dispatcher
The Dispatcher is defined by a reducer
```
function reducer(state: StateInterface, action: UnionInterface): StateInterface {
  switch (action.type) {
    case actionTypes.ADD_WIDGET_NAME:
      return Object.assign({}, state, {...})
    case actionTypes.EDIT_WIDGET_NAME:
      return Object.assign(...) },
      )
```
### State
The global values are stored in a state object
```
const defaultState = {
  widgetNames: [],
  lastUpdate: '',
  isShowingMessage: true,
  message: 'Welcome',
}
```
### View
```
<Frame> 
    <Header />    
    <AddUpdateItem />
    <ListItems />
    <MessageControl />
    <MessageDisplay />
</Frame>
```
### The Provider
Set up a Provider to provide actions and state
```
const StoreProvider: React.FC = ({ children }) => {
  const [state, dispatch]: [StateInterface, dispatchInterface] = React
    .useReducer(reducer, defaultState)
  const actions: AppActionsInterface = useAction(state, dispatch)
  return (
    <StoreContext.Provider value={{ state, actions }}>
      {children}
    </StoreContext.Provider>
  )
```

### The Consumer
```
<StoreContext.Consumer>
  {({ state }) => (
)}
// use state here
</StoreContext.Consumer>
```

## Style JSS
Style sheets can be done in many different ways. 
Styles that are controlled in a global state have many benefits including ease of theme changing, A property on the state can be used to provide JSS class names to components. Changing themes then involves calling the correct action to change the states' property. 
```
const state = {
  cssSheet: { classes: {} },
}

```


## Testing
Working with Jest to test React is a relief from the multiple of libraries necessary previously. Along with the unification of tools are clearer best practices using these tools.
Unit tests of the components of the global state, along with end to end tests, ensure the working of the patterns throughout development and production. Some of the distinct testing issues that come up with global stae are mocking and end to end testing.

### Mock a Consumer
One key to testing the global state is to take the Consumer out of the test completly by moking it.
I have found the following style of mock to be very usefull. Having a mock like this that can be later queried for it history is very useful for unit testing.
```
const mockaddWidgetName = jest.fn()
jest.mock('../components/StoreContext', () => (
  {
    StoreContext: {
      Consumer: props => (props.children({
        actions: {
          addWidgetName: mockaddWidgetName,
        },
      })
      ),
    },
  }
))

```
### End to End Testing
Global State does not really exist in units. To really test global state one needs to use some form of end to end testing. I have found that the testing tool Cypress []() is a greate way to approach this type of testing. Action and its reaction can be tested, ensuring global state is funtioning in expected ways.

## Install, Build, Deploy Project

This project started as a create-react-app

https://facebook.github.io/create-react-app/docs/getting-started


Get the project

`git clone https://github.com/JoseHerminioCollas/min-hooks.git`

Move into the directory

`cd min-hooks`

Install the project

`npm i`


Run the app in the development mode.

In the project directory run:

`npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Launch the test runner in the interactive watch mode.

`npm test`


Lint the src folder and watch

`npm lint:watch`


Builds the app for production to the `www` folder.

`npm run build`


If you have GoogleCloud set up, Deploy to Google App Engine

`gcloud app deploy`