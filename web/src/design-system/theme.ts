import { colorPallet, colors } from './color';

// TODO: remove if we liked using material ui system
export const theme = {
  breakpoints: [32, 48, 64],
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

  // global theme for the primitive components that we import from rebass
  // Button: {
  //   borderRadius: 10000,
  //   '&:disabled': {
  //     opacity: 0.65,
  //   },
  //   '&:hover': {
  //     cursor: 'pointer',
  //   },
  // },

  Text: {
    fontFamily: 'open-sans',
  },
  // buttons: {
  //   clickable1: {
  //     '&:hover': {
  //       cursor: 'pointer',
  //     },
  //   },
  // },
  cards: {
    clickable: {
      '&:hover': {
        backgroundColor: colors['primary-light'],
        color: 'on-surface',
        cursor: 'pointer',
      },
    },
  },
};
