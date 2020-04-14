export const variants = {
  cards: {
    primary: {
      borderRadius: 2,
      boxShadow: '0 0 2px rgba(0, 0, 0, 0.125)',
    },
    compact: {
      padding: 1,
      borderRadius: 2,
      border: '1px solid',
      borderColor: 'muted',
    },
    clickable: {
      '&:hover': {
        backgroundColor: 'primary-light',
        color: 'on-surface',
        cursor: 'pointer',
      },
    },
  },
  Text: {
    color: 'on-background',
    textAlign: 'left',
    fontSize: 2,
    fontWeight: 3,
    fontFamily: 'regular',
    lineHeight: 'solid',
    letterSpacing: 'normal',
  },
}