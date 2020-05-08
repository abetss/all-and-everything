export const variants = {
  buttons: {
    primary: {
      color: 'primary.contrast',
      bg: 'primary.main',
    },
    secondary: {
      color: 'secondary.contrast',
      bg: 'secondary.main',
    },
  },
  cards: {
    primary: {
      borderRadius: 2,
      boxShadow: '0 0 2px rgba(0, 0, 0, 0.125)',
    },
    compact: {
      padding: 1,
      borderRadius: 2,
      border: '1px solid',
      borderColor: 'bg.surface',
    },
    clickable: {
      '&:hover': {
        backgroundColor: 'primary-light',
        color: 'text.primary',
        cursor: 'pointer',
      },
    },
  },
  text: {
    primary: {
      color: 'text.primary'
    },
    secondary: {
      color: 'text.secondary'
    },
    hint: {
      color: 'text.hint'
    }
  }
};
