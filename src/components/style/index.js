const main = {
  '@global': {
    body: {
      margin: 0,
      background: 'gray',
      fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif`,
      color: 'black',
    },
    a: {
      textDecoration: 'underline',
    },
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'space-between',
    flexWrap: 'nowrap',
    '@global': {
      h4: { color: 'black' },
    },
    '@global div.frame': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      maxWidth: '900px',
      '@media (max-width: 400px)': {
        flexDirection: 'column',
      },
    },
    '@global .widgets-container': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      '@media (min-width: 675px)': {
        flexDirection: 'row',
      },
    },
  },
  header: {
    background: 'lightgray',
    width: '100%',
    marginBottom: '0.5em',
    padding: '0 1em',
  },
  addItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    background: 'lightgray',
    padding: '0.5em',
    minWidth: '325px',
    margin: '2px',
    '@global': {
      h4: {
        margin: '0.5em',
      },
      fieldset: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        margin: '0.5em',
      },
    },
  },
  list: {
    alignSelf: 'flex-start',
    background: 'lightgray',
    minWidth: '325px',
    padding: '0.5em',
    margin: '2px',
    '@global .widget-list-grid': {
      display: 'grid',
      gridTemplateColumns: '100px 100px 100px',
      background: 'whitesmoke',
      padding: '0.5em',
    },
    '@global .widget-list-grid div': {
      padding: '0.1em',
      borderBottom: '1px solid #333',
    },
  },
  updateItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    background: 'lightgray',
    padding: '0.5em',
    minWidth: '325px',
    margin: '2px',
    '@global': {
      h4: { margin: '0.5em' },
      fieldset: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        margin: '0.5em',
      },
    },
  },
  messageDisplay: {
    position: 'fixed',
    right: 0,
    bottom: 0,
    '@global': {
      p: {
        background: 'lightcoral',
        borderRadius: '0.5em',
        margin: '1em',
        padding: '1em',
      },
    },
  },
  messageControl: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    padding: '0.5em',
    background: 'lightgray',
    margin: '2px',
    minWidth: '325px',
    '@global .message-control-layout-a': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    '@global .message-control-layout-a label': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
}

export default main
