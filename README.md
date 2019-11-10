# MinHooks  <img src="art/min-hooks-art.png" alt="drawing" width="75"/>

A project to layout global and local state patterns with React, React Hooks, and Context. 

This repository intends to provide a compact version of commonly used patterns in React. It should be useful in the investigation of these patterns and how potentially other patterns could be used in conjunction with the existing patterns.

The example application functions to enable the maintenance of a list of widget names.
The user can view, add, update, and delete widgets on this list.
A messages system exists to display messages.

## Global State
A Flux style pattern is used to maintain state in the entire application. This global state consists of actions, dispatcher, stores, and views. The pattern is described in many places. I am familiar with the explanation provide by the Flux library (Flux)[].
Key points of the Flux pattern:
A one-way flow from Actions to Views. Views initiate Action flow.
One way flow through Action, Dispatcher, State, and View
This Flux pattern is created with React Hooks.
This Flux pattern is combined with React Context to create the global state.

## Flux Style State
### Actions
```
    addWidgetName,
    editWidgetName,
    deleteWidgetName,
    showMessage,
    hideMessage,
    setMessage,
```
### Dispatcher
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
```
const defaultState = {
  widgetNames: [],
  lastUpdate: '',
  isShowingMessage: true,
  message: 'Welcome',
}
```
### Views
```
Frame
Header
AddUpdateItem
ManageListItems
MessageDisplay
```
<StoreContext.Consumer>
  {({ state }) => (
    <section className={state.cssSheet.classes.container}>
    <Frame> 
        <Header />    
        <AddUpdateItem />
        <ListItems />
        <MessageControl />
        <MessageDisplay />
    </Frame>
)}
</StoreContext.Consumer>
```
## Style JSS
Style sheets can be done in many different ways. 
CSS files do not lend themselves to being used in a global state.
In this case, a property on the state can be used to provide class names to components. Changing themes involves changing the states' property. 

##Testing
Working with Jest to test React is a relief from the multiple libraries necessary previously. Along with the unification of tools are clearer best practices using these tools.
Unit tests of the components of the global state, along with end to end tests, ensure the working of the patterns throughout development and production. 

End to end testing ensures a global state is functioning across elements in the application correctly. Working with Cypress []() and Puppeteer both are great tools for this type of testing.

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