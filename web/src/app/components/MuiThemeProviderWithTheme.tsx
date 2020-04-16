import React from 'react';

import { useColorMode } from 'theme-ui';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { theme } from 'src/design-system';

export const MuiThemeProviderWithTheme = ({ children }: any) => {
  const [colorMode] = useColorMode();

  const mUiTheme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: colorMode === 'default' ? 'light' : 'dark',
          primary: {
            ...theme.colors.primary,
            contrastText: theme.colors.primary.contrast,
          },
          secondary: {
            ...theme.colors.secondary,
            contrastText: theme.colors.secondary.contrast,
          },
        },
      }),
    [colorMode],
  );

  return <MuiThemeProvider theme={mUiTheme}>{children}</MuiThemeProvider>;
};
