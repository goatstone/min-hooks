const main = {
  '@global': {
    body: {
      color: 'green',
      '@global .message-display': {
        position: 'fixed',
        right: 0,
        bottom: 0,
      },
    },
    div: {
      background: 'red',
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
    padding: '23px',
    background: 'black',
    '@global': {
      div: { background: 'blue' },
      h4: { color: 'red' },
    },
    '@global div.min-hooks-body': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      maxWidth: '900px',
      background: 'purple',
    },
    '@global .widgets-container': {
      background: 'yellow',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
  '@media (min-width: 675px)': {
    container: {
      background: 'white',
    },
  },
  '@media (max-width: 675px)': {
    container: {
      background: 'red',
    },
  },
}

export default main
