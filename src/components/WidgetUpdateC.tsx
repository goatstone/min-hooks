import React from 'react'
// import { StoreContext, StoreContextInterface } from './StoreContext'

/* eslint-disable */
class Welcome extends React.Component {
  componentDidMount() {
    // const { state, actions }: StoreContextInterface = React.useContext(StoreContext)
    // console.log(state, actions)
  }
  render() {
    return (
        <article className="widget-update-control">
          <h4>
            Update Widget Name
          </h4>
          <input
            // value={localState}
            // onChange={la}
          />
          <input
            // value={state.updateName}
            // onChange={fA}
          />
          <button
            type="button"
            className="update-widget"
            // onClick={updateWidgetName}
            // disabled={state.updateName.length === 0}
          >
            Update
          </button>
        </article>
      )
  }
}
// class Welcome extends React.Component {
//     render() {
//       return <h1>Hello, {this.props.name}</h1>;
//     }
//   }
export { Welcome }
