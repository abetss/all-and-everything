import { colorPallet, colors } from './colors';
import { variants } from './variants';

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
  ...variants,
};
