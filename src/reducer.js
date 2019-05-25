function reducer(state, action) {
  switch (action.type) {
    case 'A':
      return Object.assign({}, state, { a: 200 })
    default:
      return Object.assign({}, state, { a: 2000 })
  }
}

export default reducer
