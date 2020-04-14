import { colorPallet, colors } from './color';

export const theme = {
  breakpoints: ['40em', '56em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 36, 48, 80, 96],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  fontFamily: {
    regular: 'open-sans',
    bold: 'open-sans-bold',
  },
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5,
  },
  letterSpacings: {
    normal: 'normal',
    tracked: '0.1em',
    tight: '-0.05em',
    mega: '0.25em',
  },
  borders: [0, '1px solid', '2px solid', '4px solid', '8px solid', '16px solid', '32px solid'],
  radii: [0, 2, 4, 8, 16, 32, 9999, '100%'],
  sizes: [16, 32, 64, 128, 256, 512, 1024],
  colorPallet,
  colors,

  Text: {
    color: 'on-background',
    textAlign: 'left',
    fontSize: 2,
    fontWeight: 3,
    fontFamily: 'regular',
    lineHeight: 'solid',
    letterSpacing: 'normal',
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
      borderColor: 'muted',
    },
    clickable: {
      '&:hover': {
        backgroundColor: colors['primary-light'],
        color: 'on-surface',
        cursor: 'pointer',
      },
    },
  },
};
