const main = {
  '@global': {
    body: {
      margin: 0,
      background: 'gray',
      fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif`,
      color: 'black',
      '@global .message-display': {
        position: 'fixed',
        right: 0,
        bottom: 0,
      },
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
    '@global div.min-hooks-body': {
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
}

export default main
