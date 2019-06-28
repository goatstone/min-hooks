# MinHooks  <img src="art/min-hooks-art.png" alt="drawing" width="75"/>


A project to layout global and local state patterns with React React Hooks and Reactive Streams


[![CircleCI](https://circleci.com/gh/JoseHerminioCollas/min-hooks/tree/master.svg?style=svg)](https://circleci.com/gh/JoseHerminioCollas/min-hooks/tree/master)

The example application used, enables the maintenance of a list of widget names.
The user is able to view, add, update, and delete widgets on this list.
The list holds a maximum of 20 items.

A messaging system is used to notify the user of events and confirm actions.


### Main Component outline

```
<StoreProvider>
  <Widgets>
    <WidgetHeader />
    <WidgetManager>
      <h3>header</h3>
      <WidgetList>
    </WidgetManager>
    <WidgetControl>
      <h3>header</h3>
      <WidgetAdd />
      <WidgetEdit />
    </WidgetControl>
    <WidgetMessage>
  </Widgets>
</StoreProvider>
```

### State

```
interface WidgetNamesInterface{
  widgetNames: Array,
  lastUpdate: String
}
{widgetNames: [], lastUpdate: ''}
```

### Actions

* Add Widget Name
* Edit Widget Name
* Delete Widget Name

* Show Message


## Install, Build, Deploy Project

This project started as a create-react-app

https://facebook.github.io/create-react-app/docs/getting-started


Get the project

`git clone https://github.com/JoseHerminioCollas/min-hooks.git`

Move into the directory

`cd min-hooks`

Install the project

`npm i`


Run the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.<br>
You will also see any lint errors in the console.
In the project directory, you can run:

`npm start`



Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

`npm test`



Lint the src folder and watch

`npm lint:watch`


Builds the app for production to the `www` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.

`npm run build`


If you have GoogleCloud set up, Deploy to Google App Engine

`gcloud app deploy`