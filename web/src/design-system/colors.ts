const colorSpectrum = {
  black: '#000',
  'near-black': '#111',
  'dark-gray': '#333',
  'mid-gray': '#555',
  gray: ' #777',
  silver: '#999',
  'light-silver': '#aaa',
  'moon-gray': '#ccc',
  'light-gray': '#eee',
  'near-white': '#f4f4f4',
  white: '#fff',
  transparent: 'transparent',
  blacks: [
    'rgba(0,0,0,.0125)',
    'rgba(0,0,0,.025)',
    'rgba(0,0,0,.05)',
    'rgba(0,0,0,.1)',
    'rgba(0,0,0,.2)',
    'rgba(0,0,0,.3)',
    'rgba(0,0,0,.4)',
    'rgba(0,0,0,.5)',
    'rgba(0,0,0,.6)',
    'rgba(0,0,0,.7)',
    'rgba(0,0,0,.8)',
    'rgba(0,0,0,.9)',
  ],
  whites: [
    'rgba(255,255,255,.0125)',
    'rgba(255,255,255,.025)',
    'rgba(255,255,255,.05)',
    'rgba(255,255,255,.1)',
    'rgba(255,255,255,.2)',
    'rgba(255,255,255,.3)',
    'rgba(255,255,255,.4)',
    'rgba(255,255,255,.5)',
    'rgba(255,255,255,.6)',
    'rgba(255,255,255,.7)',
    'rgba(255,255,255,.8)',
    'rgba(255,255,255,.9)',
  ],
  'dark-red': '#e7040f',
  red: '#ff4136',
  'light-red': '#ff725c',
  orange: '#ff6300',
  gold: '#ffb700',
  yellow: '#ffd700',
  'light-yellow': '#fbf1a9',
  purple: '#5e2ca5',
  'light-purple': '#a463f2',
  'dark-pink': '#d5008f',
  'hot-pink': ' #ff41b4',
  pink: '#ff80cc',
  'light-pink': '#ffa3d7',
  'dark-green': '#137752',
  green: '#19a974',
  'light-green': '#9eebcf',
  navy: '#001b44',
  'dark-blue': '#00449e',
  blue: '#357edd',
  'light-blue': '#96ccff',
  'lightest-blue': '#cdecff',
  'washed-blue': '#f6fffe',
  'washed-green': '#e8fdf5',
  'washed-yellow': '#fffceb',
  'washed-red': '#ffdfdf',
};

export const colorPallet = {
  black: [colorSpectrum.black, colorSpectrum['dark-gray'], colorSpectrum['mid-gray']],
  white: [colorSpectrum.white, colorSpectrum['near-white'], colorSpectrum['light-gray']],
  transparent: 'transparent',
  blue: [colorSpectrum.blue, colorSpectrum['light-blue'], colorSpectrum['lightest-blue']],
  red: [colorSpectrum['dark-red'], colorSpectrum.red, colorSpectrum['light-red']],
  green: [colorSpectrum['dark-green'], colorSpectrum.green, colorSpectrum['light-green']],
  orange: ['#ff6300'],
};

// https://material.io/resources/color/#!/?view.left=0&view.right=1&primary.color=BF360C&secondary.color=0c95bf&secondary.text.color=ffffff
// https://material.io/inline-tools/color/
export const colors = {
  primary: {
    light: '#f9683a',
    main: '#bf360c',
    dark: '#870000',
    contrast: '#fff',
  },
  secondary: {
    light: '#5dc6f2',
    main: '#0c95bf',
    dark: '#00678f',
    contrast: '#fff',
  },
  error: {
    light: '#fe685f',
    main: '#ff4136',
    dark: '#c8241a',
    contrast: '#fff',
  },
  text: {
    primary: '#111',
    secondary: '#333',
    disabled: '#555',
    hint: '#777',
  },
  bg: {
    default: '#fff',
    surface: '#f4f4f4',
  },
  divider: '#eae8e8',
  modes: {
    dark: {
      primary: {
        light: '#f9683a',
        main: '#bf360c',
        dark: '#870000',
        contrast: '#fff',
      },
      secondary: {
        light: '#5dc6f2',
        main: '#0c95bf',
        dark: '#00678f',
        contrast: '#fff',
      },
      error: {
        light: '#c8241a',
        main: '#ff4136',
        dark: '#fe685f',
        contrast: '#fff',
      },
      text: {
        primary: '#f1f1f1',
        secondary: '#dddada',
        disabled: '#bbb',
        hint: '#919191',
      },
      bg: {
        default: '#222',
        surface: '#333',
      },
      divider: '#666',
    },
  },
};

export const oldMaterialUIInspiredColors = {
  primary: '#00449e',
  'primary-variant': '#357edd',
  secondary: '#137752',
  'secondary-variant': '#19a974',
  background: '#fff',
  surface: '#f4f4f4',
  muted: '#eae8e8',
  error: '#ff4136',
  'on-primary': '#fff',
  'on-secondary': '#fff',
  'on-background': '#000',
  'on-surface': '#000',
  dark: {
    primary: '#357edd',
    'primary-variant': '#00449e',
    secondary: '#19a974',
    'secondary-variant': '#137752',
    background: '#373737',
    surface: '#4b4b4b',
    muted: '#848282',
    error: '#ff4136',
    'on-primary': '#fff',
    'on-secondary': '#fff',
    'on-background': '#fff',
    'on-surface': '#fff',
  },
};

export const themeUiColor = {
  text: '#000', // Body foreground color
  background: '#fff', // Body background color
  primary: '#00449e', // Primary brand color for links, buttons, etc.
  secondary: '#19a974', // A secondary brand color for alternative styling
  accent: '#96ccff', // A contrast color for emphasizing UI
  highlight: '#357edd', // A background color for highlighting text
  muted: '#f4f4f4', // A faint color for backgrounds, borders, and accents that do not require high contrast with the background color
  dark: {
    text: '#FCFAE2',
    background: '#1c1c1c',
    primary: '#357edd',
    secondary: '#19a974',
    accent: '#167ee0',
    highlight: '#00449e',
    muted: '#5f5f5f',
  },
};
