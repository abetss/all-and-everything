import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { theme } from 'src/design-system';
import { BrowserRouter as AppLevelBrowserRouter } from 'react-router-dom';
import { Routes } from './routes';
import { createClient } from './apollo';
import { Layout, MuiThemeProviderWithTheme } from './components';

const client = createClient();

// Using both ApolloProvider and ApolloHooksProvider in case we don't want to use
// apollo hooks all the time. Otherwise, we can remove the ApolloProvider later

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <MuiThemeProviderWithTheme>
          <ApolloProvider client={client}>
            <ApolloHooksProvider client={client}>
              <AppLevelBrowserRouter>
                <Layout>
                  <Routes />
                </Layout>
              </AppLevelBrowserRouter>
            </ApolloHooksProvider>
          </ApolloProvider>
        </MuiThemeProviderWithTheme>
      </ThemeProvider>
    </>
  );
};

export default App;
